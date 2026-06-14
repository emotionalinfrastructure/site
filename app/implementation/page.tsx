import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Implementation | Emotional Infrastructure",
  description:
    "EIT v1.2, the full-stack reference implementation of Emotional Infrastructure: schemas, API, tests, documentation, diagrams, Docker, and certification materials."
};

const stack = [
  ["Schemas", "Typed data models for inferred-state events, authorization decisions, and trajectory records that make adaptive behavior legible to an auditor."],
  ["API", "A reference service surface for recording decision bases, issuing notices, and exposing contestability and redress pathways."],
  ["Test suite", "An automated suite exercising boundary, specification, and trajectory behavior. Recorded result: 20 passed."],
  ["Documentation", "Specification text, integration guides, and reviewer-facing notes covering scope, limits, and conformance posture."],
  ["Diagrams", "Architecture and sequence diagrams mapping where inference becomes influence and where governance attaches."],
  ["Docker", "Containerized setup so a reviewer can stand up the reference implementation in a single, reproducible environment."],
  ["Certification materials", "Conformance checklists and evidence templates prepared for external review, not asserted as completed certification."]
];

export default function ImplementationPage() {
  return (
    <main id="main">
      <section className="page-title">
        <div className="container">
          <div className="kicker">Reference implementation</div>
          <h1>EIT v1.2: governance you can stand up and inspect.</h1>
          <p className="lead">
            The Emotional Infrastructure Toolkit turns the framework into a working full-stack package, so the
            architecture can be run, tested, and reviewed rather than only read.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-4">
            <div className="stat">
              <strong className="green">20 passed</strong>
              <span>Recorded reference implementation test-suite result.</span>
            </div>
            <div className="stat">
              <strong className="blue">75 files</strong>
              <span>Full-stack v1.2 package: schemas, API, tests, docs, diagrams, Docker, and certification materials.</span>
            </div>
            <div className="stat">
              <strong className="gold">255</strong>
              <span>Master export file count across the portfolio, excluding the final archive.</span>
            </div>
            <div className="stat">
              <strong>Reproducible</strong>
              <span>Containerized so reviewers can run the same environment locally.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="kicker">Technical stack</div>
          <h2 style={{ maxWidth: "880px", marginBottom: "26px" }}>
            Each layer exists to make adaptive behavior accountable.
          </h2>
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
        <div className="container">
          <div className="boundary-note">
            <strong>Status boundary:</strong> EIT v1.2 is a review-ready, implementation-planning package. It is not
            production-proven, externally certified, or regulator-approved, and the certification materials are prepared
            for review rather than asserted as completed.
          </div>
        </div>
      </section>
    </main>
  );
}
