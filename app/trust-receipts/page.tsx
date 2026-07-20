import type { Metadata } from "next";

const repoUrl = "https://github.com/emotionalinfrastructure/Trust-Receipts";
const demoUrl = "https://demo.emotionalinfrastructure.org";

export const metadata: Metadata = {
  title: "AI Trust Receipts™ | Emotional Infrastructure™",
  description:
    "AI Trust Receipts™ is a candidate governance specification and reference implementation for producing verifiable records of AI actions, authority, accountability, and audit evidence."
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

export default function TrustReceiptsPage() {
  return (
    <main id="main">
      <section className="page-title">
        <div className="container">
          <div className="kicker">Candidate Specification · Version 0.1.1</div>
          <h1 style={{ fontSize: "clamp(38px,5.4vw,68px)" }}>AI Trust Receipts™</h1>
          <p className="lead">
            A proposed governance specification and open reference implementation for producing verifiable,
            human-readable records of significant AI actions. Trust Receipts improve transparency, accountability,
            and auditability by documenting what occurred, why it occurred, under whose authority it occurred, and
            how the event can later be verified.
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
              recommendations, moderation, automation, and trust. While organizations often publish high-level
              governance principles, users rarely receive evidence describing how those principles were applied
              during a specific interaction.
            </p>
            <p>
              AI Trust Receipts introduce a proposed accountability layer that records significant AI actions in a
              standardized format that is understandable to people while remaining suitable for technical
              verification and auditing.
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
            <div className="kicker">Current Implementation</div>
            <h2>Candidate v0.1.1, with its boundaries stated.</h2>
          </div>
          <div className="copy">
            <p>
              Version 0.1.1 is released as a candidate specification accompanied by a working reference
              implementation. The current implementation demonstrates core governance behavior while clearly
              distinguishing implemented capabilities from future work.
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
          <div className="kicker" style={{ marginBottom: 24 }}>Explore the Project</div>
          <div className="downloads">
            <div className="download">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">Interactive Demo →</a>
              <small>Experience the browser-based reference implementation and explore receipt verification.</small>
            </div>
            <div className="download">
              <a href={repoUrl}>GitHub Repository →</a>
              <small>Browse the complete source code, documentation, specification, and implementation.</small>
            </div>
            <div className="download">
              <a href={`${repoUrl}/releases`}>Latest Release →</a>
              <small>Download the current candidate release, verification manifests, and supporting artifacts.</small>
            </div>
            <div className="download">
              <a href={`${repoUrl}/issues`}>Technical Review →</a>
              <small>Review the specification, report defects, and contribute technical feedback.</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="boundary-note">
            <strong>Claim Boundary:</strong> AI Trust Receipts™ Version 0.1.1 is published as a candidate
            specification together with a reference implementation. It is intended to support technical evaluation,
            discussion, experimentation, and independent review. It is not presented as an adopted industry
            standard, certification program, or regulatory requirement.
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
              Emotional Infrastructure™ is a research and governance initiative focused on improving transparency,
              accountability, consent, and human agency within AI-mediated environments. Its work develops
              practical governance mechanisms that make AI systems more understandable, auditable, and accountable
              while preserving meaningful human oversight.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
