import Link from "next/link";

const email = "brittanywright@emotionalinfrastructure.org";

export default function Home() {
  return (
    <main id="main">
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Research and governance library · Review-ready public staging</div>
            <h1>Governance for AI-mediated trust environments.</h1>
            <p className="lead">
              Emotional Infrastructure™ is a research and implementation framework for disclosure, consent,
              auditability, human review, contestability, and longitudinal accountability in AI systems.
            </p>
            <div className="actions">
              <Link className="btn primary" href="/research">Explore the Research</Link>
              <Link className="btn secondary" href="/standards">View Standards &amp; Tools</Link>
            </div>
            <p className="note">
              This site consolidates the research programs, candidate standards, technical specifications, and
              working implementations of Emotional Infrastructure, with each artifact labeled by status.
            </p>
          </div>
          <aside className="card">
            <div className="card-inner">
              <div className="card-title">
                <div>
                  <div className="small">Core thesis</div>
                  <h3>The interaction is the evidence.</h3>
                </div>
                <span className="pill">Sequence-level accountability</span>
              </div>
              <div className="steps">
                <div className="step">
                  <div className="num">1</div>
                  <div>
                    <h4>Output review is not enough</h4>
                    <p>AI systems must be evaluated by what repeated interaction does to human perception, judgment, behavior, and agency over time.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="num">2</div>
                  <div>
                    <h4>Inference becomes governance-relevant</h4>
                    <p>When inferred states change timing, framing, sequencing, or intervention, the system crosses into adaptive influence.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="num">3</div>
                  <div>
                    <h4>Trajectory is the missing unit</h4>
                    <p>The critical question is not only whether an answer was safe, but where the user-system relationship is moving.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="num">4</div>
                  <div>
                    <h4>Agency must be engineered back in</h4>
                    <p>Governance should produce notices, friction, contestability, redress pathways, and auditable decision bases.</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section alt" id="featured-paper">
        <div className="container">
          <div className="kicker">Featured working paper</div>
          <div className="card">
            <div className="card-inner">
              <div className="card-title">
                <div>
                  <div className="small">Retrospective single-participant working paper · v1.0 · 2026</div>
                  <h3>Recursive Epistemic Reinforcement in Conversational AI</h3>
                </div>
                <span className="pill">External validation pending</span>
              </div>
              <p className="copy" style={{ marginBottom: 14 }}>
                A longitudinal archival case study examining how unsupported interpretations can be repeated,
                elaborated, and normalized across extended AI conversations.
              </p>
              <p className="note" style={{ marginTop: 0 }}>
                Corpus: 1,714 conversations and 57,307 message nodes, August 2024–August 2025.
              </p>
              <div className="actions" style={{ marginTop: 18 }}>
                <Link className="btn primary" href="/research/recursive-epistemic-reinforcement">Read Abstract</Link>
                <Link className="btn secondary" href="/research/recursive-epistemic-reinforcement#methods">Methods &amp; Limitations</Link>
                <Link className="btn secondary" href="/research/recursive-epistemic-reinforcement#cite">Cite This Work</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="selected-research">
        <div className="container">
          <div className="kicker">Selected research</div>
          <h2 style={{ maxWidth: 920 }}>Research into AI-mediated trust environments.</h2>
          <p className="lead" style={{ marginBottom: 30 }}>
            Emotional Infrastructure™ examines how adaptive and agentic AI systems shape trust, reliance, consent,
            interpretation, and human agency across repeated interactions—and develops governance mechanisms for
            making that influence visible, bounded, reviewable, and contestable.
          </p>
          <div className="grid-2">
            <article className="tile">
              <span className="status-pill">Active research</span>
              <h3 style={{ marginTop: 14 }}>Trajectory Governance</h3>
              <p>
                How AI behavior and trust effects should be evaluated across time rather than one response at a
                time.
              </p>
              <p style={{ marginTop: 12 }}>
                <Link href="/research/trajectory-governance">Read the research overview →</Link>
              </p>
            </article>
            <article className="tile">
              <span className="status-pill">Working paper</span>
              <h3 style={{ marginTop: 14 }}>Recursive Epistemic Reinforcement</h3>
              <p>
                How conversational systems can reinforce uncertain interpretations and what correction controls are
                needed.
              </p>
              <p style={{ marginTop: 12 }}>
                <Link href="/research/recursive-epistemic-reinforcement">Read the research overview →</Link>
              </p>
            </article>
            <article className="tile">
              <span className="status-pill">Candidate specification</span>
              <h3 style={{ marginTop: 14 }}>AI Trust Receipts</h3>
              <p>
                A candidate accountability instrument documenting action, authority, evidence, oversight, and
                remedy.
              </p>
              <p style={{ marginTop: 12 }}>
                <Link href="/research/trust-receipt">Read the research overview →</Link>
              </p>
            </article>
            <article className="tile">
              <span className="status-pill">Candidate standards</span>
              <h3 style={{ marginTop: 14 }}>Emotional Infrastructure Standards</h3>
              <p>
                Governance architecture for disclosure, consent, human review, auditability, and longitudinal
                accountability.
              </p>
              <p style={{ marginTop: 12 }}>
                <Link href="/standards">View standards &amp; tools →</Link>
              </p>
            </article>
          </div>
          <p className="note" style={{ marginTop: 26 }}>
            Each artifact is labeled by status so readers can distinguish established outputs, candidate standards,
            active studies, and exploratory proposals. Progression:&nbsp; research question → conceptual model →
            normative specification → reference implementation → conformance evidence → live demonstration.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container two">
          <div>
            <div className="kicker">Founder profile</div>
            <h2>Brittany Wright positions AI governance around the missing middle layer.</h2>
          </div>
          <div className="copy">
            <p>
              Brittany Wright is the founder of Emotional Infrastructure™ and an undergraduate cybersecurity
              researcher developing governance tools for AI-mediated trust environments. Her work focuses on
              disclosure, consent, auditability, human review, contestability, and longitudinal accountability.
            </p>
            <p>
              The public posture is disciplined: the work is review-ready and public-staging ready, not externally
              certified or formally adopted.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="framework">
        <div className="container">
          <div className="two" style={{ marginBottom: "34px" }}>
            <div>
              <div className="kicker">Framework architecture</div>
              <h2>From isolated incidents to trajectory-aware governance.</h2>
            </div>
            <div className="copy">
              <p>
                Emotional Infrastructure defines a governance layer for cumulative human impact in AI-mediated
                interaction. It treats adaptive AI as a feedback environment where influence can emerge through
                reliability, availability, personalization, and repeated use, even when each individual output appears
                acceptable.
              </p>
            </div>
          </div>
          <div className="grid-3">
            <article className="tile">
              <div className="icon">AB</div>
              <div className="label">Authorization Boundary</div>
              <h3>Where inference becomes influence</h3>
              <p>Defines the threshold where inferred internal states become operational through adaptive system behavior and therefore require consent, purpose limits, and traceability.</p>
              <div className="tags">
                <span className="tag">Consent</span>
                <span className="tag">Influence</span>
                <span className="tag">Traceability</span>
              </div>
            </article>
            <article className="tile">
              <div className="icon">EI</div>
              <div className="label">EI-Spec</div>
              <h3>Control language for adaptive AI</h3>
              <p>Organizes governance into risk classes, prohibited behaviors, audit requirements, user rights, red-line states, cessation thresholds, and conformance posture.</p>
              <div className="tags">
                <span className="tag">Risk tiers</span>
                <span className="tag">Rights</span>
                <span className="tag">Audit</span>
              </div>
            </article>
            <article className="tile">
              <div className="icon">TG</div>
              <div className="label">Trajectory Governance</div>
              <h3>Safety as a longitudinal property</h3>
              <p>Reframes governance around cumulative influence, authority formation, contestability, attenuation, proportionality, and the pattern of interaction over time.</p>
              <div className="tags">
                <span className="tag">Longitudinal</span>
                <span className="tag">Agency</span>
                <span className="tag">Legitimacy</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt" id="evidence">
        <div className="container">
          <div className="kicker">Evidence dashboard</div>
          <h2 style={{ maxWidth: "920px", marginBottom: "30px" }}>
            A full evidence stack: research, specification, implementation, documentation, release control, and outreach.
          </h2>
          <div className="grid-4">
            <div className="stat">
              <strong className="green">20 passed</strong>
              <span>Recorded EIT reference implementation test-suite result.</span>
            </div>
            <div className="stat">
              <strong className="blue">75 files</strong>
              <span>Full-stack EIT v1.2 package includes schemas, API, tests, docs, diagrams, Docker, and certification materials.</span>
            </div>
            <div className="stat">
              <strong className="gold">255</strong>
              <span>Master export file count excluding final zip.</span>
            </div>
            <div className="stat">
              <strong>Review-ready</strong>
              <span>review ready and public staging ready not externally certified</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="quote-wrap">
            <p className="quote">
              AI systems did not become influential because they failed. They became influential because they worked,
              reliably and repeatedly, within the structure of human interaction.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt" id="review">
        <div className="container">
          <div className="boundary-note">
            <strong>Status boundary:</strong> Emotional Infrastructure is presented as a review-ready governance
            architecture and implementation-planning package. It is not positioned as externally certified,
            standards-body adopted, legally validated, regulator-approved, peer-reviewed accepted, production-proven, or
            revenue-guaranteed. This claim boundary is part of the credibility architecture.
          </div>
        </div>
      </section>
    </main>
  );
}
