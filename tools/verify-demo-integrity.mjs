import { readFile } from "node:fs/promises";

import {
  computeDigest,
  verifyDigest,
} from "../lib/trust-receipt-integrity.mjs";

const presetDocument = JSON.parse(
  await readFile(new URL("../lib/trust-receipt-presets.json", import.meta.url), "utf8"),
);
const presets = presetDocument.presets;

if (!Array.isArray(presets) || presets.length !== 6) {
  throw new Error(
    `Expected six demo presets; found ${Array.isArray(presets) ? presets.length : "invalid data"}`,
  );
}

let passed = 0;
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
