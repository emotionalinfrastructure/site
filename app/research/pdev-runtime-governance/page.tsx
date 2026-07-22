import type { Metadata } from "next";
import Link from "next/link";

const pdfPath = "/research/EI_Dispatch_Issue47_PDEV_Runtime_Governance.pdf";
const pdfSha256 = "a87570a02c69a8b31f665d7f674ad3ae2c2a2257b90590fac5622b607afb1f98";

export const metadata: Metadata = {
  title: "PDEV Runtime Governance — Research Overview | Emotional Infrastructure",
  description:
    "PDEV Middleware and the Emotional Infrastructure runtime stack: a candidate runtime architecture for evaluating purpose, dignity, evidence, and user veto before behavioral signals reach adaptive inference."
};

const pillars = [
  ["P — Purpose", "Requested inference tier exceeds the purpose-allowed tier.", "DENY", "Context authorization."],
  ["D — Dignity", "High-risk tier with extractive intent, or risk score above threshold.", "DENY", "Prevent dignity erosion and benevolent capture."],
  ["E — Evidence", "Behavioral signal score variance exceeds the stability threshold.", "DEGRADE", "Require signal stability before stronger inference."],
  ["V — Veto", "User veto is active.", "DENY", "Preserve user agency as an absolute override."]
];

const stack = [
  ["Sovereignty Engine", "Manages stable governance states using hysteresis logic so users are not rapidly shifted between modes."],
  ["EIOS Runtime Engine", "Defines enforceable operating states including NORMAL, BOUNDED, CONSENT_GATED, SAFE_MODE, and QUARANTINE."],
  ["Dignity Ledger", "Provides tamper-evident audit records and agency receipts for consequential governance decisions."],
  ["TrustDelta", "Tracks repair dynamics after adverse or restrictive system decisions so trust impact is not invisible."],
  ["EIT Telemetry", "Supports longitudinal trajectory logging, enabling analysis across sequences rather than isolated events."]
];

const apa = `Wright, B. (2026, June 13). PDEV middleware and the Emotional Infrastructure runtime
stack (Emotional Infrastructure Dispatch No. 47). Emotional Infrastructure.
https://emotionalinfrastructure.org/research/pdev-runtime-governance/`;

const bibtex = `@techreport{wright2026pdev,
  author      = {Wright, Brittany},
  title       = {PDEV Middleware and the Emotional Infrastructure Runtime Stack},
  institution = {Emotional Infrastructure},
  year        = {2026},
  month       = {June},
  number      = {Dispatch 47},
  type        = {Technical implementation brief},
  url         = {https://emotionalinfrastructure.org/research/pdev-runtime-governance/}
}`;

export default function PdevRuntimeGovernancePage() {
  return (
    <main id="main">
      <section className="page-title">
        <div className="container">
          <div className="kicker">Technical implementation brief · Candidate architecture · Dispatch Issue 47 · June 2026</div>
          <h1>PDEV Middleware and the Emotional Infrastructure runtime stack.</h1>
          <p className="lead">
            A candidate runtime architecture for evaluating purpose, dignity, evidence, and user veto before
            behavioral signals reach adaptive inference. The proposed stack connects deterministic policy decisions
            with bounded runtime states, trajectory telemetry, user-facing receipts, and tamper-evident governance
            records.
          </p>
          <div className="actions">
            <a className="btn primary" href={pdfPath} download>Download the dispatch (PDF, 8 pages)</a>
            <Link className="btn secondary" href="/research">Back to research catalog</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two">
          <div>
            <div className="kicker">Research question</div>
            <h2>What must be decided before inference proceeds?</h2>
          </div>
          <div className="copy">
            <p>
              When an adaptive system holds behavioral or affective signals about a person, what ordered,
              deterministic decision logic should run before those signals are allowed to shape inference,
              personalization, or intervention—and what record should each decision leave behind?
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container two">
          <div>
            <div className="kicker">Abstract</div>
            <h2>A deterministic gateway for behavioral signals.</h2>
          </div>
          <div className="copy">
            <p>
              PDEV Middleware is proposed as the runtime enforcement layer of the Emotional Infrastructure stack: a
              deterministic short-circuit gateway that applies four ordered checks—purpose, dignity, evidence,
              and veto—before behavioral signals reach downstream inference. Rather than a general ethical promise,
              the architecture defines ordered decision logic: what is authorized for the current context, what
              crosses a dignity boundary, what evidence is stable enough to support stronger inference, and whether
              the user has vetoed the operation. Each decision transitions the runtime into an enforceable operating
              state and writes a tamper-evident ledger record, connecting policy evaluation to trajectory telemetry
              and user-facing accountability artifacts.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">Canonical definition</div>
          <h2 style={{ maxWidth: 920, marginBottom: 12 }}>PDEV — Protected Decision Exchange Vector.</h2>
          <p className="copy" style={{ maxWidth: 860, marginBottom: 24 }}>
            PDEV means <strong>Protected Decision Exchange Vector</strong>. The gateway applies four ordered
            checks—purpose, dignity, evidence, and veto—defined by the decision table below. Dispatch Issue 47
            predates the canonical terminology register and presents these four terms as the acronym&rsquo;s
            expansion; that usage is deprecated. The{" "}
            <Link href="/governance-register" style={{ color: "var(--cyan)" }}>Governance Register</Link> records
            the authoritative definition.
          </p>
          <table className="table">
            <thead>
              <tr>
                <th>Ordered check</th>
                <th>Failure condition</th>
                <th>Action</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              {pillars.map(([pillar, failure, action, purpose]) => (
                <tr key={pillar}>
                  <td><strong style={{ color: "var(--navy)" }}>{pillar}</strong></td>
                  <td>{failure}</td>
                  <td><strong style={{ color: "var(--cyan)" }}>{action}</strong></td>
                  <td>{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="kicker">Supporting systems</div>
          <h2 style={{ maxWidth: 880, marginBottom: 26 }}>An operating stack, not a concept alone.</h2>
          <div className="pathway">
            {stack.map(([name, desc]) => (
              <div className="row" key={name}>
                <strong>{name}</strong>
                <span>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two">
          <div>
            <div className="kicker">Evidence and claim boundaries</div>
            <h2>Implementation-ready candidate architecture.</h2>
          </div>
          <div className="copy">
            <p>
              The dispatch describes SDK paths (TypeScript/Node and Python), Express and FastAPI integration
              patterns, deployment scaffolding, a dashboard, regulatory mapping outputs, and documentation. These
              are presented as an implementation-ready candidate architecture and prototype direction—not as a
              production-certified system. Production claims require the SDK, test evidence, security review, and
              conformance results to be independently inspectable.
            </p>
            <p>
              This dispatch is a technical implementation brief and print feature, not a peer-reviewed publication.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container two">
          <div>
            <div className="kicker">Limitations</div>
            <h2>Open problems.</h2>
          </div>
          <div className="copy">
            <p>
              Threshold selection (risk scores, signal-variance limits, hysteresis bounds) is currently normative
              and requires empirical calibration. The architecture has not undergone independent security review.
              Dignity-boundary evaluation encodes policy judgments that need domain-specific review, and the
              regulatory mapping outputs are working aids rather than compliance determinations.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">Artifact</div>
          <h2 style={{ maxWidth: 880, marginBottom: 26 }}>The dispatch document.</h2>
          <div className="pathway">
            <div className="download">
              <a href={pdfPath} download>Emotional Infrastructure Dispatch, Issue 47 (PDF) →</a>
              <p>Eight-page print feature: opening argument, profile, core governance problem, framework, PDEV decision table, supporting systems, and implementation stack. Print edition; an accessible HTML edition is planned.</p>
              <small style={{ overflowWrap: "anywhere" }}>SHA-256 {pdfSha256}</small>
            </div>
            <div className="download">
              <Link href="/research/trajectory-governance">Trajectory Governance research program →</Link>
              <p>The governance model PDEV enforces at runtime: longitudinal accountability for accumulated influence.</p>
            </div>
            <div className="download">
              <Link href="/research/trust-receipt">AI Trust Receipts →</Link>
              <p>The user-facing accountability layer: agency receipts for consequential governance decisions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="kicker">Cite this work</div>
          <h2 style={{ marginBottom: 20 }}>Citation.</h2>
          <div className="grid-2">
            <div className="tile">
              <div className="label">APA</div>
              <pre style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere", fontSize: 13, lineHeight: 1.6, color: "var(--soft)" }}>{apa}</pre>
            </div>
            <div className="tile">
              <div className="label">BibTeX</div>
              <div style={{ overflowX: "auto" }}>
                <pre style={{ fontSize: 12.5, lineHeight: 1.6, color: "var(--soft)" }}>{bibtex}</pre>
              </div>
            </div>
          </div>
          <p className="note" style={{ marginTop: 20 }}>
            Dispatch Issue 47 · Published June 13, 2026 · Status: technical implementation brief, candidate
            architecture.
          </p>
        </div>
      </section>
    </main>
  );
}
