import { describe, expect, it } from "vitest";

import {
  CANONICALIZATION_PROFILE,
  INTEGRITY_METHOD,
  canonicalJson,
  computeDigest,
  digestCanonicalValue,
  sealReceipt,
  verifyDigest,
} from "../lib/trust-receipt-integrity.mjs";

describe("canonicalJson normalization", () => {
  it("accepts the permitted JSON scalar and container types", () => {
    const value = {
      s: "text",
      n: 42,
      neg: -7,
      t: true,
      f: false,
      nul: null,
      arr: [1, 2, 3],
      nested: { inner: [true, null, "x"] },
    };
    expect(() => canonicalJson(value)).not.toThrow();
    expect(JSON.parse(canonicalJson(value))).toEqual(value);
  });

  it("sorts object keys deterministically regardless of insertion order", () => {
    const forward = canonicalJson({ a: 1, b: 2, c: 3 });
    const reversed = canonicalJson({ c: 3, b: 2, a: 1 });
    expect(forward).toBe(reversed);
    expect(forward).toBe('{"a":1,"b":2,"c":3}');
  });

  it("sorts keys recursively in nested objects", () => {
    expect(canonicalJson({ z: { y: 1, x: 2 } })).toBe('{"z":{"x":2,"y":1}}');
  });

  it("preserves array element order (arrays are sequences, not sets)", () => {
    expect(canonicalJson([3, 1, 2])).toBe("[3,1,2]");
  });

  it("orders keys by Unicode code point, not by UTF-16 code unit", () => {
    // U+FFFF is a single BMP unit; U+1F600 is an astral char whose leading
    // surrogate (0xD83D) is numerically below 0xFFFF. A naive UTF-16 sort would
    // place the emoji first; a code-point sort must place U+FFFF first.
    const canonical = canonicalJson({ "\u{1F600}": 1, "￿": 2 });
    expect(canonical.indexOf("￿")).toBeLessThan(canonical.indexOf("\u{1F600}"));
  });
});

describe("canonicalJson numeric guardrails", () => {
  it("rejects non-integer (float) numbers", () => {
    expect(() => canonicalJson({ x: 1.5 })).toThrow(TypeError);
  });

  it("rejects integers outside the cross-runtime safe range", () => {
    expect(() => canonicalJson({ x: Number.MAX_SAFE_INTEGER + 1 })).toThrow(TypeError);
  });

  it("rejects NaN and Infinity", () => {
    expect(() => canonicalJson({ x: Number.NaN })).toThrow(TypeError);
    expect(() => canonicalJson({ x: Number.POSITIVE_INFINITY })).toThrow(TypeError);
  });

  it("accepts the maximum safe integer", () => {
    expect(() => canonicalJson({ x: Number.MAX_SAFE_INTEGER })).not.toThrow();
  });
});

describe("canonicalJson string guardrails", () => {
  it("accepts well-formed surrogate pairs", () => {
    expect(() => canonicalJson({ emoji: "😀" })).not.toThrow();
  });

  it("rejects an unpaired high surrogate in a value", () => {
    expect(() => canonicalJson({ bad: "\uD800" })).toThrow(TypeError);
  });

  it("rejects an unpaired low surrogate in a value", () => {
    expect(() => canonicalJson({ bad: "\uDC00" })).toThrow(TypeError);
  });

  it("rejects an unpaired surrogate in an object key", () => {
    expect(() => canonicalJson({ "\uD800": 1 })).toThrow(TypeError);
  });
});

describe("canonicalJson type guardrails", () => {
  it("rejects class instances and other non-plain objects", () => {
    class Custom {
      constructor() {
        this.a = 1;
      }
    }
    expect(() => canonicalJson(new Custom())).toThrow(TypeError);
    expect(() => canonicalJson(new Map([["a", 1]]))).toThrow(TypeError);
  });

  it("rejects unsupported primitive values", () => {
    expect(() => canonicalJson(undefined)).toThrow(TypeError);
    expect(() => canonicalJson(() => {})).toThrow(TypeError);
    expect(() => canonicalJson(Symbol("x"))).toThrow(TypeError);
    expect(() => canonicalJson(10n)).toThrow(TypeError);
  });
});

describe("digestCanonicalValue", () => {
  it("returns a sha256-prefixed lowercase 64-hex digest", async () => {
    const digest = await digestCanonicalValue({ a: 1 });
    expect(digest).toMatch(/^sha256:[0-9a-f]{64}$/);
  });

  it("is stable across equivalent objects with reordered keys", async () => {
    const left = await digestCanonicalValue({ a: 1, b: 2 });
    const right = await digestCanonicalValue({ b: 2, a: 1 });
    expect(left).toBe(right);
  });
});

describe("sealReceipt / computeDigest / verifyDigest round trip", () => {
  const baseReceipt = () => ({
    receipt_id: "r-1",
    action: { status: "executed", verb: "send" },
    subject: { id: "abc" },
  });

  it("seals a receipt with the expected integrity metadata", async () => {
    const sealed = await sealReceipt(baseReceipt());
    expect(sealed.integrity.method).toBe(INTEGRITY_METHOD);
    expect(sealed.integrity.canonicalization_profile).toBe(CANONICALIZATION_PROFILE);
    expect(sealed.integrity.verification_status).toBe("unverified");
    expect(sealed.integrity.digest).toMatch(/^sha256:[0-9a-f]{64}$/);
  });

  it("verifies an untouched sealed receipt", async () => {
    const sealed = await sealReceipt(baseReceipt());
    expect(await verifyDigest(sealed)).toBe(true);
  });

  it("fails verification after any protected field is altered", async () => {
    const sealed = await sealReceipt(baseReceipt());
    sealed.action.status = "denied";
    expect(await verifyDigest(sealed)).toBe(false);
  });

  it("ignores the recorded digest field when recomputing", async () => {
    const sealed = await sealReceipt(baseReceipt());
    const original = sealed.integrity.digest;
    sealed.integrity.digest = `sha256:${"0".repeat(64)}`;
    // computeDigest strips the recorded digest before hashing, so the value
    // it returns must equal the digest computed at seal time.
    expect(await computeDigest(sealed)).toBe(original);
  });
});

describe("verifyDigest negative cases", () => {
  it("returns false for an unsupported integrity method", async () => {
    const sealed = await sealReceipt({ receipt_id: "r", action: { status: "executed" } });
    sealed.integrity.method = "unsupported-method";
    expect(await verifyDigest(sealed)).toBe(false);
  });

  it("returns false for an unsupported canonicalization profile", async () => {
    const sealed = await sealReceipt({ receipt_id: "r", action: { status: "executed" } });
    sealed.integrity.canonicalization_profile = "unsupported-profile";
    expect(await verifyDigest(sealed)).toBe(false);
  });

  it("returns false when the digest is missing", async () => {
    const sealed = await sealReceipt({ receipt_id: "r", action: { status: "executed" } });
    delete sealed.integrity.digest;
    expect(await verifyDigest(sealed)).toBe(false);
  });

  it("returns false (instead of throwing) for structurally invalid content", async () => {
    const invalid = {
      integrity: {
        method: INTEGRITY_METHOD,
        canonicalization_profile: CANONICALIZATION_PROFILE,
        digest: `sha256:${"0".repeat(64)}`,
      },
      value: 1.5,
    };
    expect(await verifyDigest(invalid)).toBe(false);
  });

  it("returns false for null or non-object receipts", async () => {
    expect(await verifyDigest(null)).toBe(false);
    expect(await verifyDigest(undefined)).toBe(false);
  });
});
