import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Research | Emotional Infrastructure",
  description:
    "The complete catalog of Emotional Infrastructure research programs and studies: trajectory governance, AI trust receipts, behavioral signal governance, and adaptive-AI governance in education."
};

const programs = [
  {
    status: "Active research",
    title: "Trajectory Governance",
    desc: "Longitudinal accountability for accumulated AI influence, reliance formation, interpretive narrowing, and changes in user agency.",
    href: "/research/trajectory-governance"
  },
  {
    status: "Working paper",
    title: "Recursive Epistemic Reinforcement",
    desc: "How conversational systems can reinforce uncertain interpretations across extended histories, and what correction controls are needed.",
    href: "/research/recursive-epistemic-reinforcement"
  },
  {
    status: "Candidate specification",
    title: "AI Trust Receipts and Agentic Accountability",
    desc: "Pre-execution authority, evidence, consequence, human-review, receipt, and remedy gates for consequential AI actions.",
    href: "/research/trust-receipt"
  },
  {
    status: "Candidate architecture",
    title: "Behavioral Signal Governance",
    desc: "Consent, purpose limitation, minimization, and accountability for inferred behavioral, affective, and trust-related signals.",
    href: "/research/pdev-runtime-governance"
  },
  {
    status: "Exploratory study",
    title: "Education and Adaptive-AI Governance",
    desc: "Research concerning disclosure, reliance, human oversight, and behavioral inference in AI-supported learning environments.",
    href: null
  }
];

const library = [
  {
    title: "Recursive Epistemic Reinforcement in Conversational AI",
    kind: "Working paper · v1.0 · External validation pending",
    date: "2026",
    href: "/research/recursive-epistemic-reinforcement",
    desc: "A longitudinal archival case study of how unsupported interpretations can be repeated, elaborated, and normalized across 1,714 conversations and 57,307 message nodes."
  },
  {
    title: "AI Trust Receipts™ — Candidate Specification v0.1.1",
    kind: "Candidate specification · Reference implementation · Operational API alpha",
    date: "2026",
    href: "/research/trust-receipt",
    desc: "Verifiable, human-readable records of consequential AI actions, with pre-execution gates, signed receipts, verification, revocation, and remedy workflows."
  },
  {
    title: "Trajectory Governance: Accountability Beyond Isolated Outputs",
    kind: "Active research program · Working summaries",
    date: "2026",
    href: "/research/trajectory-governance",
    desc: "Reframes AI safety as a longitudinal property: cumulative influence, authority formation, contestability, attenuation, and proportionality across repeated interaction."
  },
  {
    title: "PDEV Middleware and the Emotional Infrastructure Runtime Stack",
    kind: "Technical implementation brief · Candidate architecture · Dispatch Issue 47",
    date: "June 2026",
    href: "/research/pdev-runtime-governance",
    desc: "A candidate runtime architecture for evaluating purpose, dignity, evidence, and user veto before behavioral signals reach adaptive inference."
  }
];

const hierarchy = [
  ["Umbrella framework", "Emotional Infrastructure™"],
  ["Object of governance", "AI-mediated trust trajectory"],
  ["Governance model", "Trajectory Governance"],
  ["Risk constructs", "Benevolent Capture, Trust Debt"],
  ["Behavioral-data governance", "Behavioral Signal Governance"],
  ["Technical architecture", "EIT, PDEV, EIOS"],
  ["User-facing accountability", "Agency Artifact Layer, Trust Receipt"],
  ["Integrity and conformance", "Schemas, digests, decision profiles, tests"]
];

const modules = [
  ["Authorization Boundary", "The threshold where inferred internal states become operational through adaptive behavior and therefore require consent, purpose limits, and traceability.", "Framework"],
  ["EI-Spec", "A control language organizing governance into risk classes, prohibited behaviors, audit requirements, user rights, red-line states, and cessation thresholds.", "Specification"],
  ["Trajectory Governance", "Safety treated as a longitudinal property: cumulative influence, authority formation, contestability, attenuation, and proportionality over time.", "Framework"],
  ["LIL", "Instrumentation for tracking how influence accumulates across sessions, where a relationship is moving, and when attenuation is warranted.", "Method"],
  ["TAR", "A structured account of adaptive behavior that lets a reviewer reconstruct the decision basis behind timing, framing, and sequencing.", "Method"],
  ["PDEV", "The Protected Decision Exchange Vector: runtime logic applying ordered purpose, dignity, evidence, and veto checks before behavioral signals reach adaptive inference.", "Architecture"]
];

const chain = [
  "Research question",
  "Conceptual model",
  "Normative specification",
  "Reference implementation",
  "Conformance evidence",
  "Live demonstration"
];

export default function ResearchPage() {
  return (
    <main id="main">
      <section className="page-title">
        <div className="container">
          <div className="kicker">Research catalog</div>
          <h1>Research into AI-mediated trust environments.</h1>
          <p className="lead">
            Emotional Infrastructure™ examines how adaptive and agentic AI systems shape trust, reliance, consent,
            interpretation, and human agency across repeated interactions—and develops governance mechanisms for
            making that influence visible, bounded, reviewable, and contestable.
          </p>
          <p className="note">
            Each item below is labeled by status: peer-reviewed manuscripts, candidate specifications, technical
            briefs, and exploratory studies are distinct categories, and the distinction is part of the credibility
            architecture.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">Research programs</div>
          <h2 style={{ maxWidth: 880, marginBottom: 26 }}>Primary programs.</h2>
          <div className="grid-2">
            {programs.map((p) => (
              <article className="tile" key={p.title}>
                <span className="status-pill">{p.status}</span>
                <h3 style={{ marginTop: 14 }}>{p.title}</h3>
                <p>{p.desc}</p>
                {p.href && (
                  <p style={{ marginTop: 12 }}>
                    <Link href={p.href}>Research overview →</Link>
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="kicker">Research library</div>
          <h2 style={{ maxWidth: 880, marginBottom: 26 }}>Indexed research items.</h2>
          <div className="pathway">
            {library.map((item) => (
              <div className="download" key={item.title}>
                <div className="label">{item.kind} · {item.date}</div>
                <Link href={item.href}>{item.title}</Link>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="note" style={{ marginTop: 22 }}>
            Tier A review artifacts—including submission-oriented manuscripts—are available in the controlled{" "}
            <Link href="/downloads" style={{ color: "var(--cyan)" }}>download library</Link>. Manuscripts are
            submission-oriented and are not represented as peer-reviewed accepted until a journal decision exists.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">Research hierarchy</div>
          <h2 style={{ maxWidth: 880, marginBottom: 12 }}>One architecture, related layers.</h2>
          <p className="copy" style={{ maxWidth: 820, marginBottom: 24 }}>
            The vocabulary of the research program maps to distinct layers of a single architecture rather than a
            list of disconnected terms.
          </p>
          <table className="table">
            <thead>
              <tr>
                <th>Layer</th>
                <th>Constructs</th>
              </tr>
            </thead>
            <tbody>
              {hierarchy.map(([layer, constructs]) => (
                <tr key={layer}>
                  <td><strong style={{ color: "var(--navy)" }}>{layer}</strong></td>
                  <td>{constructs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="kicker">Evidence chain</div>
          <h2 style={{ maxWidth: 920, marginBottom: 26 }}>
            From research question to live demonstration.
          </h2>
          <div className="pathway">
            {chain.map((step, i) => (
              <div className="row" key={step}>
                <strong>{i + 1}. {step}</strong>
                <span>
                  {i === 0 && "What does repeated, adaptive AI interaction do to trust, reliance, and agency?"}
                  {i === 1 && "Trajectory Governance, risk constructs, and the authorization boundary."}
                  {i === 2 && "Candidate specifications: AI Trust Receipts v0.1.1, EI-Spec, PDEV decision logic."}
                  {i === 3 && "Working reference implementations with schemas, tests, and deployment gates."}
                  {i === 4 && "Conformance matrices, digest verification, and release controls."}
                  {i === 5 && "The interactive Trust Receipt demonstration, runnable in the browser."}
                </span>
              </div>
            ))}
          </div>
          <p className="note" style={{ marginTop: 22 }}>
            The AI Trust Receipt program currently carries this chain end to end:{" "}
            <Link href="/research/trust-receipt" style={{ color: "var(--cyan)" }}>inspect each link of the chain</Link>{" "}
            or <a href={siteConfig.demoUrl} style={{ color: "var(--cyan)" }}>run the live demo</a>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">Framework modules</div>
          <h2 style={{ maxWidth: 880, marginBottom: 26 }}>
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
                  <td><strong style={{ color: "var(--navy)" }}>{name}</strong></td>
                  <td>{focus}</td>
                  <td>{cls}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="note">
            Module descriptions are working summaries drafted for review. They describe scope and intent, not
            externally validated findings.
          </p>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="boundary-note">
            <strong>Status boundary:</strong> This research is presented as a review-ready governance program. It is
            not positioned as externally certified, standards-body adopted, legally validated, regulator-approved,
            or peer-reviewed accepted. The boundary is part of the credibility architecture.
          </div>
        </div>
      </section>
    </main>
  );
}
