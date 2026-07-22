import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trajectory Governance — Research Overview | Emotional Infrastructure",
  description:
    "Research page for Trajectory Governance: why AI accountability must move beyond isolated outputs to the accumulated influence of repeated interaction, with claim boundaries, limitations, and citation."
};

const constructs = [
  ["Benevolent capture", "Gradual reliance formed through consistently useful, emotionally attuned system behavior."],
  ["Trust debt", "A system that appears trustworthy while systematically violating one or more trust conditions."],
  ["Interpretive narrowing", "Repeated attunement, reassurance, and redirection that narrows how a user frames choices."],
  ["Trajectory drift", "Small interaction shifts that compound into longer-term influence on trust and choice."]
];

const apa = `Wright, B. (2026). Trajectory governance: Longitudinal accountability for AI-mediated
influence [Active research program]. Emotional Infrastructure.
https://emotionalinfrastructure.org/research/trajectory-governance/`;

const bibtex = `@techreport{wright2026trajectory,
  author      = {Wright, Brittany},
  title       = {Trajectory Governance: Longitudinal Accountability for
                 AI-Mediated Influence},
  institution = {Emotional Infrastructure},
  year        = {2026},
  type        = {Active research program},
  url         = {https://emotionalinfrastructure.org/research/trajectory-governance/}
}`;

export default function TrajectoryGovernanceResearchPage() {
  return (
    <main id="main">
      <section className="page-title">
        <div className="container">
          <div className="kicker">Research overview · Active research · 2026</div>
          <h1>Trajectory Governance.</h1>
          <p className="lead">
            Longitudinal accountability for accumulated AI influence, reliance formation, interpretive narrowing,
            and changes in user agency.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two">
          <div>
            <div className="kicker">Research question</div>
            <h2>Where is the user-system relationship moving?</h2>
          </div>
          <div className="copy">
            <p>
              When no single output fails, how should governance detect, bound, and review the influence an adaptive
              AI system accumulates over many interactions—on trust, reliance, interpretation, and the user&rsquo;s
              practical capacity to refuse?
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container two">
          <div>
            <div className="kicker">Abstract</div>
            <h2>Safety as a longitudinal property.</h2>
          </div>
          <div className="copy">
            <p>
              Most AI evaluation asks whether an individual output was safe. Emotionally adaptive systems, however,
              can produce risk without any visibly harmful response: through repeated moments of attunement,
              narrowing, reassurance, redirection, and dependency formation. Trajectory Governance reframes the
              governance object from the isolated output to the interaction trajectory—the accumulated pattern of
              influence across sessions. The program develops constructs for naming longitudinal risks, instruments
              for logging and reconstructing decision bases across sequences, and governance mechanisms—notices,
              friction, contestability, attenuation, and audit records—that attach accountability to the pathway a
              system shapes rather than only the statements it makes.
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
                Incident- and output-centered review cannot see influence that emerges from a system working
                reliably and repeatedly. The accumulated trajectory is currently governed by no one.
              </p>
            </article>
            <article className="tile">
              <div className="label">Method</div>
              <p>
                Conceptual model development with instrument design: longitudinal interaction logging (LIL),
                trajectory accountability records (TAR), and telemetry structures (EIT) that make sequence-level
                review possible.
              </p>
            </article>
            <article className="tile">
              <div className="label">Contribution</div>
              <p>
                A governance model in which the trajectory is the unit of analysis, with named risk constructs and
                reviewable instruments rather than aspirational principles.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="kicker">Risk constructs</div>
          <h2 style={{ maxWidth: 880, marginBottom: 26 }}>Named risks of accumulated influence.</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Construct</th>
                <th>Definition</th>
              </tr>
            </thead>
            <tbody>
              {constructs.map(([name, def]) => (
                <tr key={name}>
                  <td><strong style={{ color: "#fff" }}>{name}</strong></td>
                  <td>{def}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <div className="container two">
          <div>
            <div className="kicker">Evidence and claim boundaries</div>
            <h2>Current standing.</h2>
          </div>
          <div className="copy">
            <p>
              The program is presented as active research with working summaries, defined constructs, and
              instrument designs prepared for review. Submission-oriented manuscripts exist in the controlled
              download library. The program is not represented as peer-reviewed accepted, externally validated, or
              empirically confirmed at scale; construct definitions describe scope and intent.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container two">
          <div>
            <div className="kicker">Limitations</div>
            <h2>Open problems.</h2>
          </div>
          <div className="copy">
            <p>
              Operationalizing trajectory-level constructs requires longitudinal data that most deployments do not
              currently record; the instruments define what should be logged, but empirical validation across real
              deployments remains future work. Distinguishing supportive personalization from authority-forming
              dependency at scale is an open measurement problem, and attenuation thresholds currently rest on
              normative argument rather than field evidence.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">Related work and artifacts</div>
          <h2 style={{ maxWidth: 880, marginBottom: 26 }}>Where the program connects.</h2>
          <div className="pathway">
            <div className="download">
              <Link href="/research/trust-receipt">AI Trust Receipts →</Link>
              <p>The user-facing accountability instrument: event-level records inside a trajectory-level governance model.</p>
            </div>
            <div className="download">
              <Link href="/research/pdev-runtime-governance">PDEV Runtime Governance →</Link>
              <p>Candidate runtime architecture evaluating purpose, dignity, evidence, and veto before signals reach adaptive inference.</p>
            </div>
            <div className="download">
              <Link href="/downloads">Tier A download library →</Link>
              <p>Submission-oriented manuscripts, the research portfolio database, and hash-verified review artifacts.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
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
          <p className="note" style={{ marginTop: 20 }}>Published 2026 · Status: active research program.</p>
        </div>
      </section>
    </main>
  );
}
