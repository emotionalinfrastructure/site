import type { Metadata } from "next";
import Link from "next/link";

const repoUrl = "https://github.com/emotionalinfrastructure/Trust-Receipts";
import { siteConfig } from "@/lib/site";

const demoUrl = siteConfig.demoUrl;
const demoSourceUrl = `${repoUrl}/tree/main/demo-worker`;
const serviceUrl = `${repoUrl}/tree/main/service`;
const openApiUrl = `${repoUrl}/blob/main/service/openapi.json`;

export const metadata: Metadata = {
  title: "AI Trust Receipts — Research Overview | Emotional Infrastructure",
  description:
    "Research page for AI Trust Receipts v0.1.1: research question, abstract, governance gap, method, contribution, claim boundaries, limitations, artifacts, citation, and hosted demo boundary."
};

const artifacts = [
  ["Candidate specification", `${repoUrl}`, "Read the v0.1.1 specification, schemas, conformance materials, release notes, and public-claim boundaries in the canonical repository."],
  ["JSON Schemas", `${repoUrl}/tree/main/schemas`, "Inspect the canonical receipt structures and machine-verifiable formats for the candidate release."],
  ["Reference implementation", `${repoUrl}/tree/main/src/trust_receipt`, "View the Python reference implementation for gate behavior, receipt construction, digest verification, rendering, and conformance operations."],
  ["Demo Worker source", demoSourceUrl, "Inspect the source-controlled Cloudflare Worker used for the hosted public demonstration. The demo is unsigned and nonpersistent."],
  ["Operational API alpha source", serviceUrl, "Inspect the separate production-oriented API source track. It is not the currently hosted public demo."],
  ["OpenAPI 3.1 contract", openApiUrl, "Review the separate operational API contract, authentication boundaries, and methods."],
  ["Release and verification manifests", `${repoUrl}/releases`, "Download the current candidate release with its release hashes and supporting artifacts."],
  ["Live demonstration", demoUrl, "Run the Worker-hosted public demo and explore unsigned, nonpersistent demonstration receipts."]
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
            A candidate governance specification and working implementation package for producing verifiable,
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
              human-review conditions—and produce a tamper-evident receipt documenting what occurred, why,
              under whose authority, with what evidence, and how the event can be reviewed, verified, contested, or
              remedied.
            </p>
            <p>
              Version 0.1.1 comprises a candidate specification, JSON schemas, a deterministic Python reference
              implementation, positive and negative conformance cases, release manifests, digest verification, and
              browser/Python digest-parity evidence. The hosted Cloudflare demo is a separate source-controlled
              public demonstration: it generates unsigned, nonpersistent demonstration receipts and does not claim
              durable server custody, issuer authentication, revocation, or production deployment status.
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
                Normative specification design paired with a reference implementation: deterministic gate logic,
                canonical receipt construction, content-integrity digests, browser/Python digest parity, and an
                automated conformance matrix covering allow and deny paths.
              </p>
            </article>
            <article className="tile">
              <div className="label">Contribution</div>
              <p>
                A candidate specification whose claims are testable: every normative statement maps to schema
                structures, gate behavior, conformance cases, or documented implementation boundaries, and the
                evidence chain is publicly inspectable.
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
              Demonstrated in the candidate package: deterministic gate behavior, canonical receipt construction,
              digest verification, tamper-evidence under the documented integrity model, conformance test results,
              release manifests, and browser/Python digest parity within the documented restricted input domain.
            </p>
            <p>
              Demonstrated in the hosted public demo: Cloudflare Worker routing, scenario evaluation, unsigned
              demonstration-receipt generation, JSON download, digest verification, tamper detection, and baseline
              security headers. The hosted demo is not a persistent receipt service and does not authenticate the
              issuer.
            </p>
            <p>
              Not claimed: adoption as an external standard, certification, external audit, legal-compliance
              determination, regulatory status, production issuer-key custody, durable public receipt storage, or a
              publicly provisioned production API. Version 0.1.1 is a candidate specification open for technical
              review.
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
              testing. Issuer-key custody, production deployment provisioning, post-deployment verification, sector
              profiles, and persistent receipt lifecycle controls remain pending for later implementation work.
              Consequence classification currently reflects the reference policy set and requires evaluation across
              more domains before generalization claims are appropriate.
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
