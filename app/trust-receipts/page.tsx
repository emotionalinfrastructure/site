import type { Metadata } from "next";
import Link from "next/link";

const repoUrl = "https://github.com/emotionalinfrastructure/Trust-Receipts";
const releaseUrl = `${repoUrl}/releases/tag/v0.1.1`;
const reviewIssueUrl = `${repoUrl}/issues/4`;
const specUrl = `${repoUrl}/blob/main/docs/Trust_Receipt_Technical_Specification_v0.1.1.md`;

export const metadata: Metadata = {
  title: "AI Trust Receipts | Emotional Infrastructure",
  description:
    "The authoritative home of the AI Trust Receipt: a candidate governance specification and reference implementation for machine-verifiable receipts of consequential AI actions. Current version: v0.1.1 Candidate."
};

export default function TrustReceiptsPage() {
  return (
    <main id="main">
      <section className="page-title">
        <div className="container">
          <div className="kicker">Project home · Current version: v0.1.1 Candidate · July 19, 2026</div>
          <h1 style={{ fontSize: "clamp(38px,5.4vw,68px)" }}>AI Trust Receipts</h1>
          <p className="lead">
            A candidate governance specification and reference implementation for machine-verifiable receipts of
            consequential AI actions. Twelve noncompensatory requirements, JSON Schema contracts, executable
            conformance vectors.
          </p>
          <div className="actions">
            <Link className="btn primary" href="/trust-receipt">Open the live demo →</Link>
            <a className="btn secondary" href={repoUrl}>GitHub repository</a>
            <a className="btn secondary" href={releaseUrl}>Release v0.1.1</a>
            <a className="btn secondary" href={reviewIssueUrl}>Request for review</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two">
          <div>
            <div className="kicker">What they are</div>
            <h2>A receipt for what an AI system did — before it does it.</h2>
          </div>
          <div className="copy">
            <p>
              An AI Trust Receipt is a durable, user-legible, machine-verifiable record of a consequential AI
              action: what occurred, under whose authority, using which evidence, with what result, and through
              what remedy pathway. A pre-execution gate requires valid authority, material evidence, receipt
              capability, and an operational remedy pathway to exist before the action executes — and a denial
              produces a receipt too, so refusal is a governed, recorded outcome rather than a silent failure.
            </p>
            <p>
              Conformance is noncompensatory: twelve requirements (R1–R12) are evaluated individually, and one
              failed requirement cannot be averaged away by the other eleven.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container two">
          <div>
            <div className="kicker">Why they matter</div>
            <h2>The accountability gap is structural, not incidental.</h2>
          </div>
          <div className="copy">
            <p>
              AI agents increasingly change access, modify data, communicate externally, delegate authority, or
              affect third parties on people&apos;s behalf. Existing records are operational, fragmented, or
              inaccessible to the person affected — insufficient to reconstruct what happened or contest it.
              Financial systems normalized the transaction receipt; AI-mediated actions that materially affect a
              person&apos;s status, eligibility, access, or resources still lack a broadly adopted equivalent.
            </p>
            <p>
              The Trust Receipt proposes that equivalent as an interoperable, testable specification: one canonical
              event record from which the machine receipt, the human-readable disclosure, and the integrity
              verification are all derived, so the explanation shown to a person cannot silently contradict the
              machine record.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker" style={{ marginBottom: 24 }}>Current release</div>
          <div className="grid-4" style={{ marginBottom: 30 }}>
            <div className="stat">
              <strong className="blue">v0.1.1</strong>
              <span>Candidate specification and reference implementation. Not an adopted standard or certification program.</span>
            </div>
            <div className="stat">
              <strong className="green">23/23</strong>
              <span>Automated Python tests passing in the published verification baseline.</span>
            </div>
            <div className="stat">
              <strong className="green">9/9</strong>
              <span>Conformance vectors matching expected decisions.</span>
            </div>
            <div className="stat">
              <strong className="green">2/2</strong>
              <span>Fixed browser/Python digest parity vectors passing.</span>
            </div>
          </div>
          <div className="downloads">
            <div className="download">
              <a href={repoUrl}>GitHub repository</a>
              <small>Source code, schemas, fixtures, conformance profiles, governance and security policy.</small>
            </div>
            <div className="download">
              <Link href="/trust-receipt">Live demo</Link>
              <small>Six gate presets with in-browser SHA-256 digest verification and tamper-evidence.</small>
            </div>
            <div className="download">
              <a href={releaseUrl}>GitHub Release v0.1.1</a>
              <small>Complete ZIP archive, release manifest, SHA-256 digest ledgers, specification PDF, and wheel.</small>
            </div>
            <div className="download">
              <a href={reviewIssueUrl}>Review issue</a>
              <small>The standing invitation for adversarial review, negative testing, and independent implementation.</small>
            </div>
          </div>
          <p className="note" style={{ marginTop: 24 }}>
            The normative candidate document is the{" "}
            <a href={specUrl} style={{ color: "var(--cyan)", fontWeight: 700 }}>
              technical specification v0.1.1
            </a>
            . Issuer authentication, key management, and signature profiles are reserved for v0.2 or a dedicated
            production profile; receipts in v0.1.1 are self-attested.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="boundary-note">
            <strong>Claim boundary:</strong> This is a candidate governance and implementation package. It is not
            an adopted standard, certification program, external audit, legal-compliance determination, or
            regulatory approval. Receipt conformance does not establish that a recorded action was truthful, fair,
            lawful, safe, or correct.
          </div>
        </div>
      </section>
    </main>
  );
}
