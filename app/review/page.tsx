import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Review | Emotional Infrastructure",
  description:
    "How to engage Emotional Infrastructure for review and critique, and the explicit claim boundary that governs how the work may be described."
};

const steps = [
  ["Request access", "Email for access to the artifact you want to assess: a framework, the specification, or the EIT reference implementation."],
  ["Run or read", "Read the specification and documentation, or stand up the reference implementation with Docker to inspect behavior directly."],
  ["Return critique", "Share findings, gaps, objections, or proposed revisions. Adversarial review is welcome and treated as part of the work."],
  ["Iterate openly", "Substantive critique is incorporated and the claim boundary is updated only when separate evidence supports it."]
];

const isIsNot = [
  ["Review-ready governance architecture", "Externally certified"],
  ["Implementation-planning package", "Standards-body adopted"],
  ["Public-staging ready", "Legally validated or regulator-approved"],
  ["Open to critique and collaboration", "Peer-reviewed accepted or production-proven"]
];

export default function ReviewPage() {
  return (
    <main id="main">
      <section className="page-title">
        <div className="container">
          <div className="kicker">Review and critique</div>
          <h1>Built to be inspected, not just announced.</h1>
          <p className="lead">
            The credibility architecture is the claim boundary itself: the work states plainly what it is and what it is
            not, and invites the review that would move it forward.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">How review works</div>
          <h2 style={{ maxWidth: "820px", marginBottom: "26px" }}>Four steps from request to incorporated critique.</h2>
          <div className="steps">
            {steps.map(([title, body], i) => (
              <div className="step" key={title}>
                <div className="num">{i + 1}</div>
                <div>
                  <h4>{title}</h4>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="kicker">Claim boundary</div>
          <h2 style={{ maxWidth: "820px", marginBottom: "26px" }}>What this is, and what it is not.</h2>
          <table className="table">
            <thead>
              <tr>
                <th>This is</th>
                <th>This is not</th>
              </tr>
            </thead>
            <tbody>
              {isIsNot.map(([is, isnot]) => (
                <tr key={is}>
                  <td><strong style={{ color: "#fff" }}>{is}</strong></td>
                  <td>{isnot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="boundary-note">
            <strong>Status boundary:</strong> Materials are presented for review, critique, collaboration, and
            implementation discussion. Do not describe them as externally certified, regulator-approved, standards-body
            adopted, legally validated, peer-reviewed accepted, or production-proven without separate evidence.
          </div>
          <div className="actions">
            <a className="btn primary" href="/contact">Request review access →</a>
            <a className="btn secondary" href="/artifacts">Browse artifacts</a>
          </div>
        </div>
      </section>
    </main>
  );
}
