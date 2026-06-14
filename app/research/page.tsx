import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research | Emotional Infrastructure",
  description:
    "The research program behind Emotional Infrastructure: the authorization boundary, trajectory governance, and the modules that make cumulative AI influence governable."
};

const modules = [
  ["Authorization Boundary", "The threshold where inferred internal states become operational through adaptive behavior and therefore require consent, purpose limits, and traceability.", "Framework"],
  ["EI-Spec", "A control language organizing governance into risk classes, prohibited behaviors, audit requirements, user rights, red-line states, and cessation thresholds.", "Specification"],
  ["Trajectory Governance", "Safety treated as a longitudinal property: cumulative influence, authority formation, contestability, attenuation, and proportionality over time.", "Framework"],
  ["LIL", "Instrumentation for tracking how influence accumulates across sessions, where a relationship is moving, and when attenuation is warranted.", "Method"],
  ["TAR", "A structured account of adaptive behavior that lets a reviewer reconstruct the decision basis behind timing, framing, and sequencing.", "Method"],
  ["PDEV", "An evaluation lens for distinguishing supportive personalization from authority-forming dependency in repeated interaction.", "Method"]
];

export default function ResearchPage() {
  return (
    <main id="main">
      <section className="page-title">
        <div className="container">
          <div className="kicker">Research program</div>
          <h1>The interaction is the unit of analysis.</h1>
          <p className="lead">
            Emotional Infrastructure studies what repeated, adaptive AI interaction does to human perception, judgment,
            behavior, and agency, and builds the governance instruments that make that cumulative effect reviewable.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two">
          <div>
            <div className="kicker">The question</div>
            <h2>Output review is necessary, but not sufficient.</h2>
          </div>
          <div className="copy">
            <p>
              Most AI evaluation asks whether a single output was safe. The research question here is different: where is
              the user-system relationship moving across many interactions, and what structure of influence is forming
              along the way?
            </p>
            <p>
              When inferred states begin to change timing, framing, sequencing, or intervention, the system crosses from
              description into adaptive influence. That crossing is the object of study, and the place governance has to
              attach.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="kicker">Framework modules</div>
          <h2 style={{ maxWidth: "880px", marginBottom: "26px" }}>
            A modular stack from boundary definition to longitudinal method.
          </h2>
          <table className="table">
            <thead>
              <tr>
                <th>Module</th>
                <th>Focus</th>
                <th>Class</th>
              </tr>
            </thead>
            <tbody>
              {modules.map(([name, focus, cls]) => (
                <tr key={name}>
                  <td><strong style={{ color: "#fff" }}>{name}</strong></td>
                  <td>{focus}</td>
                  <td>{cls}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="note">
            Module descriptions are working summaries drafted for review. They describe scope and intent, not externally
            validated findings.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="boundary-note">
            <strong>Status boundary:</strong> This research is presented as a review-ready governance program. It is not
            positioned as externally certified, standards-body adopted, legally validated, regulator-approved, or
            peer-reviewed accepted. The boundary is part of the credibility architecture.
          </div>
        </div>
      </section>
    </main>
  );
}
