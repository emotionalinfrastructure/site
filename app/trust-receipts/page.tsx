import type { Metadata } from "next";

const repoUrl = "https://github.com/emotionalinfrastructure/Trust-Receipts";
import { siteConfig } from "@/lib/site";

const demoUrl = siteConfig.demoUrl;
const serviceUrl = `${repoUrl}/tree/main/service`;
const openApiUrl = `${repoUrl}/blob/main/service/openapi.json`;
const readinessUrl = `${repoUrl}/blob/main/service/PRODUCTION_READINESS.md`;

export const metadata: Metadata = {
  title: "AI Trust Receipts™ | Emotional Infrastructure",
  description:
    "AI Trust Receipts™ is a candidate governance specification, reference implementation, and operational API alpha for producing verifiable records of consequential AI actions.",
  metadataBase: new URL("https://emotionalinfrastructure.org"),
  openGraph: {
    title: "AI Trust Receipts™ — Specification & Implementation",
    description:
      "Governance specification and operational system for durable, user-legible, machine-verifiable records of consequential AI actions.",
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

const operational = [
  "Two-phase pre-execution gate",
  "Durable D1 receipt persistence",
  "Detached Ed25519 issuer assertions",
  "Protected receipt retrieval",
  "Public verification",
  "Revocation records",
  "Remedy case workflow",
  "OpenAPI 3.1 contract",
  "Production configuration gate",
  "Post-deployment smoke testing"
];

export default function TrustReceiptsPage() {
  return (
    <main id="main">
      <section className="page-title">
        <div className="container">
          <div className="kicker">Candidate Specification v0.1.1 · Operational API Alpha</div>
          <h1 style={{ fontSize: "clamp(38px,5.4vw,68px)" }}>AI Trust Receipts™</h1>
          <p className="lead">
            A proposed governance specification and open implementation system for producing verifiable,
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
              Version 0.1.1 is released as a candidate specification accompanied by a working reference
              implementation. It demonstrates deterministic gate behavior, canonical receipt construction, content
              integrity, browser verification, and positive and negative conformance cases.
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
          <div className="kicker">Operational API Alpha</div>
          <h2 style={{ maxWidth: 940 }}>Coded and validated; public production provisioning remains pending.</h2>
          <div className="copy" style={{ maxWidth: 940, marginTop: 22 }}>
            <p>
              The canonical repository now includes an API-backed Cloudflare Worker implementation with durable D1
              storage. It evaluates proposed actions before execution, issues short-lived execution permits for
              allowed actions, creates signed denial receipts when governance conditions fail, and finalizes the
              observed outcome into a stored receipt after authorized execution.
            </p>
            <p>
              The operational layer has passed its unit tests, OpenAPI contract checks, configuration checks, Worker
              bundle validation, and the existing Python conformance matrix. It is published as a deployment
              candidate—not as a publicly provisioned production service. A real database identifier, managed
              deployment environment, issuer-key custody, public origin, and successful post-deployment smoke test
              are still required before the API is represented as live.
            </p>
          </div>
          <div className="grid-3" style={{ marginTop: 30 }}>
            <article className="tile">
              <h3>Implemented</h3>
              <p>Pre-execution authorization, signed receipt issuance, persistence, verification, revocation, and remedy workflows.</p>
            </article>
            <article className="tile">
              <h3>Validated</h3>
              <p>Operational tests, OpenAPI checks, fail-closed configuration validation, conformance checks, and Worker dry-run bundling.</p>
            </article>
            <article className="tile">
              <h3>Deployment status</h3>
              <p>Source complete and merged. Public infrastructure provisioning and post-deployment verification remain pending.</p>
            </article>
          </div>
          <div className="tags" style={{ marginTop: 28 }}>
            {operational.map((item) => (
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

      <section className="section">
        <div className="container">
          <div className="kicker" style={{ marginBottom: 24 }}>Explore the Project</div>
          <div className="downloads">
            <div className="download">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">Interactive Demo →</a>
              <small>Experience the browser-based reference implementation and explore receipt verification.</small>
            </div>
            <div className="download">
              <a href={repoUrl}>GitHub Repository →</a>
              <small>Browse the specification, schemas, conformance materials, reference implementation, and service.</small>
            </div>
            <div className="download">
              <a href={serviceUrl}>Operational API Source →</a>
              <small>Inspect the Worker, D1 migration, tests, examples, deployment workflow, and operational documentation.</small>
            </div>
            <div className="download">
              <a href={openApiUrl}>OpenAPI 3.1 Contract →</a>
              <small>Review the eleven endpoints, authentication boundaries, request structures, and operational methods.</small>
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

      <section className="section alt">
        <div className="container">
          <div className="boundary-note">
            <strong>Claim Boundary:</strong> AI Trust Receipts™ Version 0.1.1 is a candidate specification and
            reference implementation. The operational API is an alpha deployment candidate whose source and
            validation controls are public, but it is not presently represented as a provisioned production service.
            Neither layer is an adopted standard, certification program, external audit, legal-compliance
            determination, or regulatory requirement.
          </div>
        </div>
      </section>

      <section className="section">
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
