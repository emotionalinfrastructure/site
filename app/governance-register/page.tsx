import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Governance Register | Emotional Infrastructure",
  description:
    "The canonical register for Emotional Infrastructure: authoritative terminology, artifact versions, superseded materials, and change history.",
  alternates: { canonical: "https://emotionalinfrastructure.org/governance-register/" }
};

const releases = [
  {
    artifact: "AI Trust Receipts™ specification",
    version: "v0.1.1",
    status: "Canonical",
    note: "Supersedes v0.1. Candidate specification with reference implementation and operational API alpha."
  },
  {
    artifact: "Professional Governance Manual",
    version: "Build v1.2 (Founding Edition)",
    status: "Canonical",
    note: "Supersedes Build v1.1. Public release layer only; the locked 262-page PDF is the distribution master."
  },
  {
    artifact: "Recursive Epistemic Reinforcement working paper",
    version: "v1.0",
    status: "Working paper",
    note: "Retrospective single-participant study; external validation pending. SHA-256 2c808a67…d62d80a."
  },
  {
    artifact: "Emotional Infrastructure Dispatch",
    version: "Issue 47 (June 13, 2026)",
    status: "Technical dispatch",
    note: "Predates this register's PDEV terminology; read with the canonical definition below."
  },
  {
    artifact: "Public portfolio staging package",
    version: "MRP 8.6 (v0.1.0)",
    status: "Controlled public staging",
    note: "Tier A download library with SHA-256 ledger; pages preserve candidate-level language."
  },
  {
    artifact: "ei-middleware Helm chart",
    version: "0.2.0",
    status: "Unpublished",
    note: "Held for release until linting, deployment testing, placeholder removal, and green CI evidence exist."
  }
];

const superseded = [
  ["AI Trust Receipts v0.1", "Superseded by v0.1.1. Do not cite v0.1 as current."],
  ["Professional Governance Manual Build v1.1", "Superseded by Build v1.2 (Founding Edition)."],
  ["PDEV expansions in pre-register documents", "Superseded by the canonical definition in this register."],
  ["Earlier personal-authorship and emotional-safety phrasings", "Superseded by the current governance positioning used across this site."]
];

const changes = [
  ["2026-07", "Governance Register published. Canonical PDEV definition recorded; release matrix and superseded list established."],
  ["2026-07", "Site restructured into a research library: research catalog, program pages, and the Recursive Epistemic Reinforcement working paper page added."],
  ["2026-07", "MRP 8.6 public staging export: ten portfolio pages and the Tier A hash-verified download library published."],
  ["2026-06", "Dispatch Issue 47 published (print edition); PDEV terminology therein predates this register."],
  ["2026-05", "MRP 8.5/8.6 launch copy approved for controlled public portfolio staging."]
];

export default function GovernanceRegisterPage() {
  return (
    <main id="main">
      <section className="page-title">
        <div className="container">
          <div className="kicker">Governance register</div>
          <h1>Canonical terminology, versions, and change history.</h1>
          <p className="lead">
            This register is the authoritative record for Emotional Infrastructure terminology and artifact
            versions. Where any published document conflicts with this register, the register governs. Superseded
            materials remain available for the record but should not be cited as current.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">Canonical terminology</div>
          <h2 style={{ maxWidth: 920, marginBottom: 12 }}>PDEV — Protected Decision Exchange Vector.</h2>
          <div className="boundary-note" style={{ maxWidth: 920 }}>
            <strong>Canonical definition:</strong> PDEV means <strong>Protected Decision Exchange Vector</strong>.
            The gateway applies four ordered checks: purpose, dignity, evidence, and veto.
          </div>
          <p className="note" style={{ marginTop: 18 }}>
            Documents published before this register—including Dispatch Issue 47—present &ldquo;Purpose, Dignity,
            Evidence, Veto&rdquo; as an expansion of the acronym. That usage is deprecated: the four terms name the
            gateway&rsquo;s ordered checks, not the acronym&rsquo;s expansion. Earlier expansions used in framework
            drafts are likewise deprecated.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="kicker">Release matrix</div>
          <h2 style={{ maxWidth: 880, marginBottom: 26 }}>Current versions.</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Artifact</th>
                <th>Version</th>
                <th>Status</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {releases.map((r) => (
                <tr key={r.artifact}>
                  <td><strong style={{ color: "var(--navy)" }}>{r.artifact}</strong></td>
                  <td>{r.version}</td>
                  <td>{r.status}</td>
                  <td>{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">Superseded materials</div>
          <h2 style={{ maxWidth: 880, marginBottom: 26 }}>Deprecated versions and phrasings.</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Material</th>
                <th>Disposition</th>
              </tr>
            </thead>
            <tbody>
              {superseded.map(([material, disposition]) => (
                <tr key={material}>
                  <td><strong style={{ color: "var(--navy)" }}>{material}</strong></td>
                  <td>{disposition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="kicker">Change history</div>
          <h2 style={{ maxWidth: 880, marginBottom: 26 }}>Register log.</h2>
          <div className="pathway">
            {changes.map(([date, entry], i) => (
              <div className="row" key={i}>
                <strong>{date}</strong>
                <span>{entry}</span>
              </div>
            ))}
          </div>
          <p className="note" style={{ marginTop: 22 }}>
            Related pages: <Link href="/standards" style={{ color: "var(--cyan)" }}>Standards &amp; Tools</Link> ·{" "}
            <Link href="/research" style={{ color: "var(--cyan)" }}>Research catalog</Link> ·{" "}
            <Link href="/downloads" style={{ color: "var(--cyan)" }}>Tier A download library</Link> ·{" "}
            <Link href="/status" style={{ color: "var(--cyan)" }}>Public status statement</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
