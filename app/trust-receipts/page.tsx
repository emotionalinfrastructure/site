import type { Metadata } from "next";

const repoUrl = "https://github.com/emotionalinfrastructure/Trust-Receipts";
import { siteConfig } from "@/lib/site";

const demoUrl = siteConfig.demoUrl;
const demoSourceUrl = `${repoUrl}/tree/main/demo-worker`;
const serviceUrl = `${repoUrl}/tree/main/service`;
const openApiUrl = `${repoUrl}/blob/main/service/openapi.json`;
const readinessUrl = `${repoUrl}/blob/main/service/PRODUCTION_READINESS.md`;

export const metadata: Metadata = {
  title: "AI Trust Receipts™ | Emotional Infrastructure",
  description:
    "AI Trust Receipts™ is a candidate governance specification, reference implementation, and hosted public demonstration for producing verifiable records of consequential AI actions.",
  metadataBase: new URL("https://emotionalinfrastructure.org"),
  openGraph: {
    title: "AI Trust Receipts™ — Specification & Implementation",
    description:
      "Governance specification, reference implementation, and hosted demonstration for durable, user-legible, machine-verifiable records of consequential AI actions.",
    url: "https://emotionalinfrastructure.org/trust-receipts/",
    type: "website",
    locale: "en_US"
  },
  robots: {
    index: true,
    follow: true
  }
};

const questions = [
  ["What happened?", "The action performed by the AI system."],
  ["Why?", "The governance rationale supporting the action."],
  ["Authority", "The policy or authorization permitting the action."],
  ["Consequence", "The evaluated consequence classification associated with the event."],
  ["Evidence", "The information supporting the governance decision."],
  ["Verification", "How reviewers can independently validate the recorded event."]
];

const implemented = [
  "Authority evaluation",
  "Governance decision routing",
  "Consequence classification",
  "Receipt generation",
  "Digest verification",
  "Tamper-evidence demonstration",
  "Reference implementation",
  "Automated validation tests"
];

const hostedDemo = [
  "Cloudflare Worker demo",
  "Server-side evaluation endpoint",
  "Unsigned demonstration receipts",
  "No persistent receipt storage",
  "No issuer authentication",
  "Digest verification endpoint",
  "Tamper-evidence demonstration",
  "Published demo schema"
];

const operationalSource = [
  "Two-phase pre-execution gate",
  "D1 receipt-persistence design",
  "Detached issuer-assertion design",
  "Protected receipt retrieval",
  "Public verification design",
  "Revocation-record design",
  "Remedy-case workflow design",
  "OpenAPI 3.1 contract",
  "Production configuration gate",
  "Post-deployment smoke testing"
];

export default function TrustReceiptsPage() {
  return (
    <main id="main">
      <section className="page-title">
        <div className="container">
          <div className="kicker">Candidate Specification v0.1.1 · Hosted Demo Worker</div>
          <h1 style={{ fontSize: "clamp(38px,5.4vw,68px)" }}>AI Trust Receipts™</h1>
          <p className="lead">
            A proposed governance specification and open implementation package for producing verifiable,
            human-readable records of consequential AI actions. Trust Receipts document what occurred, why it
            occurred, under whose authority it occurred, what evidence supported the decision, and how the event can
            later be reviewed, verified, contested, or remedied.
          </p>
          <div className="actions">
            <a
              className="btn primary"
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch Interactive Demo
            </a>
            <a className="btn secondary" href={repoUrl}>View GitHub Repository</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two">
          <div>
            <div className="kicker">Why AI Trust Receipts?</div>
            <h2>Evidence, not just principles.</h2>
          </div>
          <div className="copy">
            <p>
              Artificial intelligence increasingly participates in decisions that affect communication,
              recommendations, moderation, automation, access, and trust. While organizations often publish
              high-level governance principles, users rarely receive evidence describing how those principles were
              applied during a specific action.
            </p>
            <p>
              AI Trust Receipts introduce a proposed accountability layer that records significant AI actions in a
              standardized format that is understandable to people while remaining suitable for technical
              verification, organizational review, and auditing.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="kicker">The record</div>
          <h2 style={{ maxWidth: 920, marginBottom: 30 }}>Every Trust Receipt answers six questions</h2>
          <div className="grid-3">
            {questions.map(([title, body]) => (
              <article className="tile" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two">
          <div>
            <div className="kicker">Reference Implementation</div>
            <h2>Candidate v0.1.1, with its boundaries stated.</h2>
          </div>
          <div className="copy">
            <p>
              Version 0.1.1 is released as a candidate specification accompanied by a working Python reference
              implementation. It demonstrates deterministic gate behavior, canonical receipt construction, content
              integrity, browser/Python digest parity, and positive and negative conformance cases within the
              documented input domain.
            </p>
            <div className="tags">
              {implemented.map((item) => (
                <span className="tag" key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="kicker">Hosted Public Demo</div>
          <h2 style={{ maxWidth: 940 }}>Live, source-controlled, and intentionally bounded.</h2>
          <div className="copy" style={{ maxWidth: 940, marginTop: 22 }}>
            <p>
              The public interactive demo is a source-controlled Cloudflare Worker. It evaluates scenario inputs,
              generates unique downloadable demonstration receipts, exposes digest verification, and shows how a
              tampered receipt fails verification. It is useful for review and education because the boundary is
              explicit: demo receipts are not persisted and are not issuer-signed.
            </p>
            <p>
              The hosted demo is not the full v0.1.1 release artifact, not a production receipt service, and not the
              separate operational API alpha. It should be described as a Worker-hosted public demonstration of the
              Trust Receipt governance model, not as a provisioned production implementation.
            </p>
          </div>
          <div className="tags" style={{ marginTop: 28 }}>
            {hostedDemo.map((item) => (
              <span className="tag" key={item}>{item}</span>
            ))}
          </div>
          <div className="actions" style={{ marginTop: 28 }}>
            <a className="btn primary" href={demoUrl}>Run Hosted Demo</a>
            <a className="btn secondary" href={demoSourceUrl}>Inspect Demo Worker Source</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">Operational API Alpha Source</div>
          <h2 style={{ maxWidth: 940 }}>Production-oriented source exists, but the hosted demo is separate.</h2>
          <div className="copy" style={{ maxWidth: 940, marginTop: 22 }}>
            <p>
              The canonical repository also includes a separate API-backed Cloudflare Worker source track for a
              more production-oriented operational layer, including D1 persistence design, protected retrieval,
              revocation records, remedy workflow design, an OpenAPI contract, and deployment-readiness gates.
            </p>
            <p>
              That operational source track should not be represented as the currently hosted public demo. A real
              database identifier, managed deployment environment, issuer-key custody, public origin, and successful
              post-deployment smoke test remain required before that API is represented as a public production
              service.
            </p>
          </div>
          <div className="grid-3" style={{ marginTop: 30 }}>
            <article className="tile">
              <h3>Source track</h3>
              <p>Pre-execution authorization, receipt issuance, persistence, verification, revocation, and remedy workflow designs.</p>
            </article>
            <article className="tile">
              <h3>Validation target</h3>
              <p>Operational tests, OpenAPI checks, fail-closed configuration validation, conformance checks, and Worker dry-run bundling.</p>
            </article>
            <article className="tile">
              <h3>Deployment status</h3>
              <p>Separate from the hosted public demo. Production provisioning and post-deployment verification remain required.</p>
            </article>
          </div>
          <div className="tags" style={{ marginTop: 28 }}>
            {operationalSource.map((item) => (
              <span className="tag" key={item}>{item}</span>
            ))}
          </div>
          <div className="actions" style={{ marginTop: 28 }}>
            <a className="btn primary" href={serviceUrl}>Inspect Operational Source</a>
            <a className="btn secondary" href={openApiUrl}>Review OpenAPI Contract</a>
            <a className="btn dark" href={readinessUrl}>Read Deployment Gate</a>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="kicker" style={{ marginBottom: 24 }}>Explore the Project</div>
          <div className="downloads">
            <div className="download">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">Interactive Demo →</a>
              <small>Run the Worker-hosted public demonstration. Receipts are downloadable, unsigned, and not persisted.</small>
            </div>
            <div className="download">
              <a href={repoUrl}>GitHub Repository →</a>
              <small>Browse the specification, schemas, conformance materials, reference implementation, demo Worker, and operational source.</small>
            </div>
            <div className="download">
              <a href={demoSourceUrl}>Demo Worker Source →</a>
              <small>Inspect the Cloudflare Worker that powers the hosted public demo.</small>
            </div>
            <div className="download">
              <a href={serviceUrl}>Operational API Source →</a>
              <small>Inspect the separate production-oriented API source track. This is not the hosted public demo.</small>
            </div>
            <div className="download">
              <a href={openApiUrl}>OpenAPI 3.1 Contract →</a>
              <small>Review the operational API endpoint design, authentication boundaries, request structures, and methods.</small>
            </div>
            <div className="download">
              <a href={readinessUrl}>Production Readiness Gate →</a>
              <small>Review release states, deployment stop conditions, smoke testing, and required evidence.</small>
            </div>
            <div className="download">
              <a href={`${repoUrl}/releases`}>Latest Release →</a>
              <small>Download the current candidate release, verification manifests, and supporting artifacts.</small>
            </div>
            <div className="download">
              <a href={`${repoUrl}/issues`}>Technical Review →</a>
              <small>Review the specification, report defects, and contribute technical or governance feedback.</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="boundary-note">
            <strong>Claim Boundary:</strong> AI Trust Receipts™ Version 0.1.1 is a candidate specification and
            reference implementation. The hosted public demo is a source-controlled Cloudflare Worker demonstration
            that generates unsigned, nonpersistent receipts for review and education. The separate operational API
            source track is not presently represented as a provisioned public production service. No layer is an
            adopted standard, certification program, external audit, legal-compliance determination, regulatory
            requirement, or proof that a recorded action was truthful, fair, lawful, safe, or correct.
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container two">
          <div>
            <div className="kicker">About Emotional Infrastructure™</div>
            <h2>Governance for AI-mediated environments.</h2>
          </div>
          <div className="copy">
            <p>
              Emotional Infrastructure™ is a research and governance initiative focused on improving disclosure,
              consent, accountability, auditability, contestability, and human agency within AI-mediated
              environments. Its work develops practical governance mechanisms that make automated systems more
              understandable, reviewable, and accountable while preserving meaningful human oversight.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
