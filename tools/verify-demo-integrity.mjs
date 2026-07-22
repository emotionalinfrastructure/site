import { readFile } from "node:fs/promises";

import {
  computeDigest,
  verifyDigest,
} from "../lib/trust-receipt-integrity.mjs";
import demoWorker from "../worker/index.mjs";

const presetDocument = JSON.parse(
  await readFile(new URL("../lib/trust-receipt-presets.json", import.meta.url), "utf8"),
);
const publishedSchema = JSON.parse(
  await readFile(
    new URL(
      "../public/schemas/trust-receipt/trust-receipt.v0.1.1.schema.json",
      import.meta.url,
    ),
    "utf8",
  ),
);
const presets = presetDocument.presets;

if (!Array.isArray(presets) || presets.length !== 6) {
  throw new Error(
    `Expected six demo presets; found ${Array.isArray(presets) ? presets.length : "invalid data"}`,
  );
}

let passed = 0;
if (publishedSchema.$id !== presets[0].receipt.schema_id) {
  throw new Error("Published schema identifier does not match the demo receipts");
}
passed += 1;

if (
  !presets.every(
    ({ receipt }) =>
      receipt.schema_id === publishedSchema.$id &&
      receipt.receipt_version === publishedSchema.properties?.receipt_version?.const,
  )
) {
  throw new Error("A demo receipt does not match the published schema version or identifier");
}
passed += 1;

for (const preset of presets) {
  const receipt = structuredClone(preset.receipt);
  const computed = await computeDigest(receipt);

  if (computed !== receipt.integrity.digest) {
    throw new Error(`${preset.id}: recorded digest does not match recomputed digest`);
  }

  if (!(await verifyDigest(receipt))) {
    throw new Error(`${preset.id}: untouched receipt did not verify`);
  }
  passed += 1;

  const tampered = structuredClone(receipt);
  tampered.action.status = tampered.action.status === "executed" ? "denied" : "executed";
  if (await verifyDigest(tampered)) {
    throw new Error(`${preset.id}: tampered receipt unexpectedly verified`);
  }
  passed += 1;
}

const unsupportedMethod = structuredClone(presets[0].receipt);
unsupportedMethod.integrity.method = "unsupported-method";
if (await verifyDigest(unsupportedMethod)) {
  throw new Error("Unsupported integrity method unexpectedly verified");
}
passed += 1;

const unsupportedProfile = structuredClone(presets[0].receipt);
unsupportedProfile.integrity.canonicalization_profile = "unsupported-profile";
if (await verifyDigest(unsupportedProfile)) {
  throw new Error("Unsupported canonicalization profile unexpectedly verified");
}
passed += 1;

const missingDigest = structuredClone(presets[0].receipt);
delete missingDigest.integrity.digest;
if (await verifyDigest(missingDigest)) {
  throw new Error("Receipt without a digest unexpectedly verified");
}
passed += 1;

let requestedAssetPath;
const mockEnvironment = {
  ASSETS: {
    async fetch(request) {
      requestedAssetPath = new URL(request.url).pathname;
      return new Response("asset", {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    },
  },
};

const rootResponse = await demoWorker.fetch(
  new Request("https://ei-trust-receipt.brittanywright.workers.dev/"),
  mockEnvironment,
);
if (
  requestedAssetPath !== "/trust-receipt/" ||
  rootResponse.headers.get("X-Content-Type-Options") !== "nosniff" ||
  !rootResponse.headers.has("Content-Security-Policy")
) {
  throw new Error("Worker root routing or response security headers are invalid");
}
passed += 1;

const schemaResponse = await demoWorker.fetch(
  new Request(
    "https://ei-trust-receipt.brittanywright.workers.dev/schemas/trust-receipt/trust-receipt.v0.1.1.schema.json",
  ),
  mockEnvironment,
);
if (schemaResponse.headers.get("Access-Control-Allow-Origin") !== "*") {
  throw new Error("Published schema is missing cross-origin access");
}
passed += 1;

const rejectedMethod = await demoWorker.fetch(
  new Request("https://ei-trust-receipt.brittanywright.workers.dev/", {
    method: "POST",
  }),
  mockEnvironment,
);
if (rejectedMethod.status !== 405 || rejectedMethod.headers.get("Allow") !== "GET, HEAD") {
  throw new Error("Worker did not reject an unsupported method");
}
passed += 1;

console.log(
  JSON.stringify(
    {
      presets: presets.length,
      checks: passed,
      result: "pass",
    },
    null,
    2,
  ),
);
