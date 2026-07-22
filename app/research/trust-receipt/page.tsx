import type { Metadata } from "next";
import Link from "next/link";

const repoUrl = "https://github.com/emotionalinfrastructure/Trust-Receipts";
import { siteConfig } from "@/lib/site";

const demoUrl = siteConfig.demoUrl;

export const metadata: Metadata = {
  title: "AI Trust Receipts — Research Overview | Emotional Infrastructure",
  description:
    "Research page for AI Trust Receipts v0.1.1: research question, abstract, governance gap, method, contribution, claim boundaries, limitations, artifacts, and citation."
};

const artifacts = [
  ["Candidate specification", `${repoUrl}`, "Read the v0.1.1 specification, schemas, and conformance materials in the canonical repository."],
  ["JSON Schemas", `${repoUrl}`, "Inspect the canonical receipt structures and machine-verifiable formats."],
  ["Reference implementation", `${repoUrl}`, "View deterministic gate behavior, receipt construction, digest verification, and tests."],
  ["Operational API source", `${repoUrl}/tree/main/service`, "Inspect the Worker, D1 migration, tests, examples, and deployment workflow."],
  ["OpenAPI 3.1 contract", `${repoUrl}/blob/main/service/openapi.json`, "Review the endpoints, authentication boundaries, and operational methods."],
  ["Release and verification manifests", `${repoUrl}/releases`, "Download the current candidate release with its release hashes and supporting artifacts."],
  ["Live demonstration", demoUrl, "Run the browser-based reference implementation and explore receipt verification."]
];

const apa = `Wright, B. (2026). AI Trust Receipts: A candidate governance specification for verifiable
records of consequential AI actions (Version 0.1.1) [Candidate specification and reference
implementation]. Emotional Infrastructure.
https://emotionalinfrastructure.org/research/trust-receipt/`;

const bibtex = `@techreport{wright2026trustreceipts,
  author      = {Wright, Brittany},
  title       = {AI Trust Receipts: A Candidate Governance Specification for
                 Verifiable Records of Consequential AI Actions},
  institution = {Emotional Infrastructure},
  year        = {2026},
  number      = {v0.1.1},
  type        = {Candidate specification},
  url         = {https://emotionalinfrastructure.org/research/trust-receipt/}
}`;

export default function TrustReceiptResearchPage() {
  return (
    <main id="main">
      <section className="page-title">
        <div className="container">
          <div className="kicker">Research overview · Candidate specification v0.1.1 · 2026</div>
          <h1>AI Trust Receipts and Agentic Accountability.</h1>
          <p className="lead">
            A candidate governance specification and working implementation system for producing verifiable,
            human-readable records of consequential AI actions.
          </p>
          <div className="actions">
            <Link className="btn primary" href="/trust-receipts">Project home</Link>
            <a className="btn secondary" href={demoUrl}>Run the live demo</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two">
          <div>
            <div className="kicker">Research question</div>
            <h2>Can consequential AI actions carry their own evidence?</h2>
          </div>
          <div className="copy">
            <p>
              When an AI system takes an action that affects a person—communication, recommendation, moderation,
              automation, access—what standardized, durable, independently verifiable record should that action
              produce, and what gates should evaluate authority, evidence, and consequence before execution?
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container two">
          <div>
            <div className="kicker">Abstract</div>
            <h2>The record as the accountability unit.</h2>
          </div>
          <div className="copy">
            <p>
              Organizations publish high-level AI governance principles, but users rarely receive evidence of how
              those principles were applied to a specific action. AI Trust Receipts propose an accountability layer
              in which significant AI actions pass pre-execution gates—authority, evidence, consequence, and
              human-review conditions—and produce a signed, tamper-evident receipt documenting what occurred, why,
              under whose authority, with what evidence, and how the event can be reviewed, verified, contested, or
              remedied. Version 0.1.1 comprises a candidate specification, JSON schemas, a deterministic reference
              implementation with positive and negative conformance cases, and an API-backed operational alpha with
              durable persistence, detached issuer signatures, revocation records, and a remedy workflow.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            <article className="tile">
              <div className="label">Governance gap</div>
              <p>
                Disclosure statements and policy principles do not give affected people event-level evidence.
                Between principles and outcomes there is no standard record of what an AI system actually did and
                under what authority.
              </p>
            </article>
            <article className="tile">
              <div className="label">Method</div>
              <p>
                Normative specification design paired with a working reference implementation: deterministic gate
                logic, canonical receipt construction, content-integrity digests, browser verification, and an
                automated conformance matrix covering allow and deny paths.
              </p>
            </article>
            <article className="tile">
              <div className="label">Contribution</div>
              <p>
                A candidate specification whose claims are testable: every normative statement maps to schema
                structures, gate behavior, or conformance cases, and the full chain from specification to live
                demonstration is publicly inspectable.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container two">
          <div>
            <div className="kicker">Evidence and claim boundaries</div>
            <h2>What is demonstrated, and what is not claimed.</h2>
          </div>
          <div className="copy">
            <p>
              Demonstrated: deterministic gate behavior, signed receipt issuance, digest verification,
              tamper-evidence, revocation, remedy workflow, OpenAPI contract checks, and conformance test results.
              The operational API is an alpha deployment candidate whose source and validation controls are public.
            </p>
            <p>
              Not claimed: adoption as an external standard, certification, external audit, legal-compliance
              determination, regulatory status, or a publicly provisioned production service. Version 0.1.1 is a
              candidate specification open for technical review.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two">
          <div>
            <div className="kicker">Limitations</div>
            <h2>Open problems.</h2>
          </div>
          <div className="copy">
            <p>
              The specification has not yet undergone independent security review or third-party interoperability
              testing. Issuer-key custody, deployment provisioning, and post-deployment verification remain pending
              for the operational layer. Consequence classification currently reflects the reference policy set and
              requires evaluation across more domains before generalization claims are appropriate.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="kicker">Artifacts</div>
          <h2 style={{ maxWidth: 880, marginBottom: 26 }}>Inspect the evidence chain directly.</h2>
          <div className="pathway">
            {artifacts.map(([title, href, desc]) => (
              <div className="download" key={title as string}>
                <a href={href as string}>{title} →</a>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
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
            Version 0.1.1 · Published 2026 · Related program:{" "}
            <Link href="/research/trajectory-governance" style={{ color: "var(--cyan)" }}>Trajectory Governance</Link>{" "}
            · Related pages:{" "}
            <Link href="/trust-receipts" style={{ color: "var(--cyan)" }}>AI Trust Receipts™ project home</Link>,{" "}
            <Link href="/implementation" style={{ color: "var(--cyan)" }}>technical stack</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
