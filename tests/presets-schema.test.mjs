import { readFile } from "node:fs/promises";

import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import { beforeAll, describe, expect, it } from "vitest";

const schema = JSON.parse(
  await readFile(
    new URL("../public/schemas/trust-receipt/trust-receipt.v0.1.1.schema.json", import.meta.url),
    "utf8",
  ),
);
const presetDocument = JSON.parse(
  await readFile(new URL("../lib/trust-receipt-presets.json", import.meta.url), "utf8"),
);
const presets = presetDocument.presets;

let validate;

beforeAll(() => {
  const ajv = new Ajv2020({ allErrors: true, strict: false });
  addFormats(ajv);
  validate = ajv.compile(schema);
});

describe("demo presets vs published schema", () => {
  it("exposes an array of presets", () => {
    expect(Array.isArray(presets)).toBe(true);
    expect(presets.length).toBeGreaterThan(0);
  });

  it.each(presets.map((p) => [p.id, p]))(
    "%s: receipt conforms to the published JSON Schema",
    (_id, preset) => {
      const valid = validate(preset.receipt);
      // Surface AJV's messages directly so a schema drift is actionable.
      expect(validate.errors ?? [], JSON.stringify(validate.errors, null, 2)).toEqual([]);
      expect(valid).toBe(true);
    },
  );

  it.each(presets.map((p) => [p.id, p]))(
    "%s: receipt advertises the published schema id and version",
    (_id, preset) => {
      expect(preset.receipt.schema_id).toBe(schema.$id);
      expect(preset.receipt.receipt_version).toBe(schema.properties?.receipt_version?.const);
    },
  );
});
