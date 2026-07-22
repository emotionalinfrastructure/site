import type { Metadata } from "next";
import Link from "next/link";
import ReleaseStatus from "@/components/ReleaseStatus";

const repoUrl = "https://github.com/emotionalinfrastructure/Trust-Receipts";
import { siteConfig } from "@/lib/site";

const demoUrl = siteConfig.demoUrl;

export const metadata: Metadata = {
  title: "Standards & Tools | Emotional Infrastructure",
  description:
    "Candidate standards and instruments: the AI Trust Receipts specification, the Professional Governance Manual, schemas, conformance materials, and the governance register.",
  alternates: { canonical: "https://emotionalinfrastructure.org/standards/" }
};

const positioning = [
  {
    component: "Scope and terms",
    fn: "Defines the system boundary and shared vocabulary.",
    status: "Candidate specification material."
  },
  {
    component: "Conformance model",
    fn: "Defines implementation classes and review expectations.",
    status: "Review-ready draft."
  },
  {
    component: "Schema placement",
    fn: "Identifies where machine-readable structures belong.",
    status: "Standards-ready planning material."
  },
  {
    component: "Policy logic",
    fn: "Converts governance duties into enforceable rules and triggers.",
    status: "Implementation-planning material."
  },
  {
    component: "Audit and readiness model",
    fn: "Defines how a system proves behavior through evidence.",
    status: "Review-ready draft."
  }
];

const receiptLinks = [
  ["Candidate specification and schemas", repoUrl, "The v0.1.1 specification, JSON schemas, and conformance materials in the canonical repository."],
  ["Reference implementation", repoUrl, "Deterministic gate behavior, receipt construction, digest verification, and automated tests."],
  ["Operational API source", `${repoUrl}/tree/main/service`, "Worker implementation, D1 migration, tests, examples, and deployment workflow."],
  ["OpenAPI 3.1 contract", `${repoUrl}/blob/main/service/openapi.json`, "Endpoints, authentication boundaries, and operational methods."],
  ["Live demonstration", demoUrl, "The browser-based reference implementation with receipt verification."],
  ["Research overview and citation", "/research/trust-receipt", "Research question, method, claim boundaries, limitations, and how to cite the specification."]
];

export default function StandardsPage() {
  return (
    <main id="main">
      <section className="page-title">
        <div className="container">
          <div className="kicker">Standards &amp; tools</div>
          <h1>Candidate standards and working instruments.</h1>
          <p className="lead">
            This page collects the standards-oriented materials of Emotional Infrastructure: the AI Trust Receipts
            candidate specification, the Professional Governance Manual, schemas, conformance materials, and the
            supporting toolchain. Everything here is candidate material prepared for review—organized so that each
            claim can be inspected rather than taken on authority.
          </p>
          <p className="note">
            Canonical versions, terminology, and superseded materials are tracked in the{" "}
            <Link href="/governance-register" style={{ color: "var(--cyan)" }}>Governance Register</Link>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">Instrument</div>
          <h2 style={{ maxWidth: 920, marginBottom: 12 }}>AI Trust Receipts™ — candidate specification v0.1.1.</h2>
          <p className="copy" style={{ maxWidth: 860, marginBottom: 8 }}>
            A candidate governance specification and working implementation for verifiable, human-readable records
            of consequential AI actions: pre-execution authority, evidence, consequence, and human-review gates,
            signed receipts, verification, revocation, and remedy workflows.
          </p>
          <p className="note" style={{ marginBottom: 24 }}>
            Version note: v0.1.1 is the canonical release and supersedes v0.1. Where earlier materials reference
            v0.1, the v0.1.1 specification governs. See the release matrix in the Governance Register.
          </p>
          <div className="pathway">
            {receiptLinks.map(([title, href, desc]) => (
              <div className="download" key={title}>
                {href.startsWith("/") ? (
                  <Link href={href}>{title} →</Link>
                ) : (
                  <a href={href}>{title} →</a>
                )}
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container two">
          <div>
            <div className="kicker">Instrument</div>
            <h2>Professional Governance Manual — Founding Edition, Build v1.2.</h2>
          </div>
          <div className="copy">
            <p>
              An operational governance reference for AI-assisted creator ecosystems and AI-mediated trust
              environments. The manual translates disclosure, consent, human review, automation boundaries,
              audience protection, monetization governance, public trust infrastructure, operational records, and
              conformance into documented governance practice.
            </p>
            <p>
              <strong>Edition note:</strong> the public release layer presents the Build v1.2 additions and
              release-control material; it is not the complete manual. The locked 262-page PDF is the distribution
              master. Build v1.1 is superseded by v1.2. A public standards index derived from the distribution
              master—including verification of the manual&rsquo;s standards inventory—is in preparation and will be
              published here with a version manifest and checksum before any standards-count claim is featured.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">Standards positioning</div>
          <h2 style={{ maxWidth: 880, marginBottom: 26 }}>How the candidate materials are organized.</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Standards component</th>
                <th>Function</th>
                <th>Current status</th>
              </tr>
            </thead>
            <tbody>
              {positioning.map((p) => (
                <tr key={p.component}>
                  <td>
                    <strong style={{ color: "var(--navy)" }}>{p.component}</strong>
                  </td>
                  <td>{p.fn}</td>
                  <td>{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="note">
            These materials should be reviewed as standards-oriented drafts. They should not be described as
            adopted RFCs, W3C Recommendations, ISO standards, legal mandates, or regulator-approved specifications
            unless a formal adoption pathway is completed and documented.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="kicker">Standards claim boundary</div>
          <p className="copy" style={{ maxWidth: 900 }}>
            The accurate claim is that Emotional Infrastructure has been organized into standards-ready draft form.
            The restricted claim is that it has been formally adopted by an external standards body. That restricted
            claim must not be used without documented adoption.
          </p>
        </div>
      </section>

      <ReleaseStatus />
    </main>
  );
}
