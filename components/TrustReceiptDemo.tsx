"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import presetData from "@/lib/trust-receipt-presets.json";
// Verbatim copy of browser/integrity.mjs from Trust-Receipts candidate v0.1.1.
import { computeDigest, verifyDigest } from "@/lib/trust-receipt-integrity.mjs";

type JsonRecord = Record<string, unknown>;
type GateFailure = { code: string; message: string; field: string };
type Receipt = JsonRecord & {
  receipt_id: string;
  action: { status: string; [key: string]: unknown };
  integrity: { digest: string; [key: string]: unknown };
};
type Preset = {
  id: string;
  label: string;
  summary: string;
  gate: { decision: string; failures: GateFailure[] };
  receipt: Receipt;
  human: string;
};

const presets = presetData.presets as unknown as Preset[];

type VerifyState =
  | { kind: "idle" }
  | { kind: "working" }
  | { kind: "stale" }
  | { kind: "done"; matches: boolean; recorded: string; recomputed: string };

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function asRecord(value: unknown): JsonRecord {
  return value !== null && typeof value === "object" && !Array.isArray(value)
    ? (value as JsonRecord)
    : {};
}

function asArray(value: unknown): unknown[] {
  return Array.isArray(value) ? value : [];
}

function display(value: unknown): string {
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  if (value === null) return "null";
  if (value === undefined) return "not recorded";
  return JSON.stringify(value);
}

function renderHumanReceipt(receipt: Receipt): string {
  const action = asRecord(receipt.action);
  const authority = asRecord(receipt.authority);
  const agent = asRecord(receipt.agent);
  const consequence = asRecord(receipt.consequence);
  const review = asRecord(receipt.human_review);
  const remedy = asRecord(receipt.remedy);
  const integrity = asRecord(receipt.integrity);
  const evidence = asArray(receipt.material_inputs);
  const delegation = asArray(receipt.delegation);
  const relationships = asArray(receipt.relationships);
  const evidenceViewed = asArray(review.evidence_viewed);

  const lines = [
    "AI TRUST RECEIPT",
    "================",
    `Receipt: ${display(receipt.receipt_id)}`,
    `Event time: ${display(receipt.event_time)}`,
    `Created: ${display(receipt.created_at)}`,
    "",
    "ACTION",
    `Status: ${display(action.status)}`,
    `Type: ${display(action.type)}`,
    `Verb: ${display(action.verb)}`,
    `Target: ${display(action.target)}`,
    `Persistent change: ${display(action.persistent_change)}`,
    "",
    "ACCOUNTABILITY AND AUTHORITY",
    `Agent: ${display(agent.agent_id)}`,
    `Operator: ${display(agent.operator_id)}`,
    `Accountable organization: ${display(agent.accountable_organization)}`,
    `Grant: ${display(authority.grant_id)} (${display(authority.validation_status)})`,
    `Confirmation: ${display(authority.confirmation_status)}`,
    "",
    "CONSEQUENCE AND REVIEW",
    `Class: ${display(consequence.class)}`,
    `Affected party: ${display(consequence.affected_party)}`,
    `Notice required: ${display(consequence.notice_required)}`,
    `Protected third-party information: ${display(consequence.protected_third_party_information)}`,
    `Human review: ${display(review.status)}`,
    "Evidence viewed:"
  ];

  if (evidenceViewed.length === 0) {
    lines.push("  - None");
  } else {
    evidenceViewed.forEach((item) => lines.push(`  - ${display(item)}`));
  }

  lines.push("", "MATERIAL EVIDENCE");
  if (evidence.length === 0) {
    lines.push("  - None");
  } else {
    evidence.forEach((item) => {
      const record = asRecord(item);
      lines.push(
        `  - ${display(record.evidence_id)}: ${display(record.status)} / ${display(record.freshness)} (${display(record.materiality)})`
      );
    });
  }

  lines.push("", "DELEGATION");
  if (delegation.length === 0) {
    lines.push("  - None");
  } else {
    delegation.forEach((item) => {
      const record = asRecord(item);
      lines.push(
        `  - ${display(record.recipient_id)} at depth ${display(record.depth)}: ${display(record.task)}`
      );
    });
  }

  lines.push("", "RELATED RECEIPTS");
  if (relationships.length === 0) {
    lines.push("  - None");
  } else {
    relationships.forEach((item) => lines.push(`  - ${display(item)}`));
  }

  lines.push(
    "",
    "REMEDY",
    `Available: ${display(remedy.available)}`,
    `Reversible: ${display(remedy.reversible)}`,
    `Contestable: ${display(remedy.contestable)}`,
    `Review owner: ${display(remedy.review_owner)}`,
    `Status: ${display(remedy.status_uri)}`,
    "",
    "INTEGRITY",
    `Method: ${display(integrity.method)}`,
    `Profile: ${display(integrity.canonicalization_profile)}`,
    `Digest: ${display(integrity.digest)}`,
    `Recorded verification status: ${display(integrity.verification_status)}`,
    "",
    "This receipt is an event record, not a claim that the action was fair, lawful, or correct."
  );

  return `${lines.join("\n")}\n`;
}

export default function TrustReceiptDemo() {
  const [presetId, setPresetId] = useState(presets[0].id);
  const preset = useMemo(
    () => presets.find((item) => item.id === presetId) ?? presets[0],
    [presetId]
  );
  const [receipt, setReceipt] = useState<Receipt>(() => clone(presets[0].receipt));
  const [tampered, setTampered] = useState(false);
  const [verify, setVerify] = useState<VerifyState>({ kind: "idle" });
  const [view, setView] = useState<"machine" | "human">("machine");
  const [announcement, setAnnouncement] = useState("");
  const revision = useRef(0);

  const updateReceipt = useCallback((nextReceipt: Receipt, nextTampered: boolean, message: string) => {
    revision.current += 1;
    setReceipt(nextReceipt);
    setTampered(nextTampered);
    setVerify({ kind: "idle" });
    setAnnouncement(message);
  }, []);

  const selectPreset = useCallback((nextPreset: Preset) => {
    setPresetId(nextPreset.id);
    updateReceipt(clone(nextPreset.receipt), false, `${nextPreset.label} preset loaded.`);
  }, [updateReceipt]);

  const runVerify = useCallback(async () => {
    const snapshot = clone(receipt);
    const verificationRevision = revision.current;
    setVerify({ kind: "working" });
    setAnnouncement("Digest verification started.");

    const matches = await verifyDigest(snapshot);
    let recomputed = "unavailable";
    try {
      recomputed = await computeDigest(snapshot);
    } catch {
      recomputed = "recomputation failed for this content";
    }

    if (revision.current !== verificationRevision) {
      setVerify({ kind: "stale" });
      setAnnouncement("Verification result discarded because the receipt changed during verification.");
      return;
    }

    setVerify({ kind: "done", matches, recorded: snapshot.integrity.digest, recomputed });
    setAnnouncement(matches ? "Digest matches." : "Digest mismatch detected.");
  }, [receipt]);

  const tamper = useCallback(() => {
    const next = clone(receipt);
    next.action.status = next.action.status === "executed" ? "denied" : "executed";
    updateReceipt(next, true, `Tampering completed. action.status changed to ${next.action.status}.`);
  }, [receipt, updateReceipt]);

  const reset = useCallback(() => {
    updateReceipt(clone(preset.receipt), false, `${preset.label} preset reset.`);
  }, [preset, updateReceipt]);

  const humanDisclosure = useMemo(() => renderHumanReceipt(receipt), [receipt]);
  const denial = preset.gate.decision !== "allow";
  const working = verify.kind === "working";

  return (
    <div className="card">
      <div className="card-inner" aria-busy={working}>
        <div className="label">Gate presets</div>
        <div className="filterbar" aria-label="Demo gate presets">
          {presets.map((item) => (
            <button
              key={item.id}
              className={item.id === presetId ? "active" : undefined}
              onClick={() => selectPreset(item)}
              aria-pressed={item.id === presetId}
              disabled={working}
            >
              {item.label}
            </button>
          ))}
        </div>

        <p style={{ color: "var(--soft)", lineHeight: 1.7, margin: "0 0 18px" }}>{preset.summary}</p>

        <div className="pathway" style={{ marginBottom: 20 }}>
          <div className="row">
            <strong>Original gate decision</strong>
            <span className={denial ? "rose" : "green"} style={{ fontWeight: 800 }}>
              {denial ? "DENY — the action did not execute" : "ALLOW — the action executed"}
            </span>
          </div>
          {preset.gate.failures.map((failure) => (
            <div className="row" key={failure.code}>
              <strong>{failure.code}</strong>
              <span>
                {failure.message} <em style={{ color: "var(--muted)" }}>({failure.field})</em>
              </span>
            </div>
          ))}
          <div className="row">
            <strong>Receipt</strong>
            <span>
              A receipt is generated for the attempt either way — denial is a governed, recorded outcome, not a
              silent failure. This receipt was generated by the Python reference implementation; the digest below is
              recomputed live in your browser by the released JavaScript module.
            </span>
          </div>
        </div>

        <div className="actions" style={{ marginTop: 0 }}>
          <button className="btn primary" onClick={runVerify} disabled={working}>
            {working ? "Recomputing digest…" : "Verify receipt"}
          </button>
          <button className="btn secondary" onClick={tamper} disabled={working}>
            Tamper with a field
          </button>
          {(tampered || verify.kind === "done" || verify.kind === "stale") && (
            <button className="btn dark" onClick={reset} disabled={working}>
              Reset preset
            </button>
          )}
        </div>

        <div role="status" aria-live="polite" style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", border: 0 }}>
          {announcement}
        </div>

        {tampered && (
          <p role="status" aria-live="polite" style={{ color: "var(--gold)", marginTop: 16, lineHeight: 1.6 }}>
            <strong>action.status</strong> was changed to “{receipt.action.status}” after sealing. Select{" "}
            <strong>Verify receipt</strong> to see the digest mismatch.
          </p>
        )}

        {verify.kind === "stale" && (
          <div role="alert" aria-live="assertive" className="boundary-note" style={{ borderColor: "rgba(253,164,175,.3)", background: "rgba(253,164,175,.08)", color: "#ffe4e6", marginTop: 18 }}>
            <strong>Verification result discarded.</strong> The receipt changed while verification was running, so the
            completed digest result was not applied to the currently displayed receipt. Verify the current receipt again.
          </div>
        )}

        {verify.kind === "done" && (
          <div
            role={verify.matches ? "status" : "alert"}
            aria-live={verify.matches ? "polite" : "assertive"}
            className="boundary-note"
            style={
              verify.matches
                ? { borderColor: "rgba(134,239,172,.3)", background: "rgba(134,239,172,.08)", color: "#dcfce7", marginTop: 18 }
                : { borderColor: "rgba(253,164,175,.3)", background: "rgba(253,164,175,.08)", color: "#ffe4e6", marginTop: 18 }
            }
          >
            <strong>{verify.matches ? "Digest matches." : "Digest mismatch."}</strong>{" "}
            {verify.matches
              ? "The recomputed SHA-256 digest equals the digest recorded in the currently displayed receipt, so the protected content is unchanged relative to that recorded digest."
              : "The changed content no longer matches the digest recorded in this receipt. This does not, by itself, prove who issued the original receipt."}
            <div style={{ fontFamily: "ui-monospace,monospace", fontSize: 12, marginTop: 12, wordBreak: "break-all" }}>
              recorded&nbsp;&nbsp;&nbsp;{verify.recorded}
              <br />
              recomputed&nbsp;{verify.recomputed}
            </div>
          </div>
        )}

        <div className="filterbar" style={{ margin: "24px 0 12px" }} aria-label="Receipt view">
          <button
            className={view === "machine" ? "active" : undefined}
            onClick={() => setView("machine")}
            aria-pressed={view === "machine"}
          >
            Machine receipt (JSON)
          </button>
          <button
            className={view === "human" ? "active" : undefined}
            onClick={() => setView("human")}
            aria-pressed={view === "human"}
          >
            Human-readable disclosure
          </button>
        </div>
        <pre
          aria-label={view === "machine" ? "Machine-readable receipt" : "Human-readable disclosure"}
          style={{
            margin: 0,
            border: "1px solid var(--line)",
            background: "rgba(2,6,23,.6)",
            borderRadius: 20,
            padding: 20,
            maxHeight: 420,
            overflow: "auto",
            fontSize: 12.5,
            lineHeight: 1.55,
            color: "var(--soft)"
          }}
        >
          {view === "machine" ? JSON.stringify(receipt, null, 2) : humanDisclosure}
        </pre>
      </div>
    </div>
  );
}
