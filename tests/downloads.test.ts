import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

import { tierADownloads } from "../lib/downloads";

const downloadsDir = fileURLToPath(new URL("../public/downloads/", import.meta.url));

describe("Tier A download ledger", () => {
  it("declares at least one download", () => {
    expect(tierADownloads.length).toBeGreaterThan(0);
  });

  it("has unique ledger ids and file names", () => {
    const ledgerIds = tierADownloads.map((d) => d.ledgerId);
    const files = tierADownloads.map((d) => d.file);
    expect(new Set(ledgerIds).size).toBe(ledgerIds.length);
    expect(new Set(files).size).toBe(files.length);
  });

  it.each(tierADownloads.map((d) => [d.ledgerId, d] as const))(
    "%s: on-disk file matches the recorded size and SHA-256",
    async (_ledgerId, download) => {
      const bytes = await readFile(downloadsDir + download.file);
      expect(bytes.length).toBe(download.sizeBytes);
      const sha256 = createHash("sha256").update(bytes).digest("hex");
      expect(sha256).toBe(download.sha256);
    },
  );
});
