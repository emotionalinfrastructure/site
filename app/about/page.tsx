import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Emotional Infrastructure",
  description:
    "Brittany Wright is the founder of Emotional Infrastructure™ and an undergraduate cybersecurity researcher developing governance tools for AI-mediated trust environments.",
  alternates: { canonical: "https://emotionalinfrastructure.org/about/" }
};

const focus = [
  ["Disclosure", "When and how AI involvement must be made visible to the people it affects."],
  ["Consent", "What authorization longitudinal, adaptive processing actually requires."],
  ["Auditability", "What records prove a system behaved within its declared boundaries."],
  ["Human review", "Where human judgment must gate automated action."],
  ["Contestability", "How affected people challenge, correct, and seek remedy."],
  ["Longitudinal accountability", "How influence that accumulates across interactions is governed."]
];

export default function AboutPage() {
  return (
    <main id="main">
      <section className="page-title">
        <div className="container">
          <div className="kicker">About</div>
          <h1>Research biography.</h1>
          <p className="lead">
            Brittany Wright is the founder of Emotional Infrastructure™ and an undergraduate cybersecurity
            researcher developing governance tools for AI-mediated trust environments. Her work focuses on
            disclosure, consent, auditability, human review, contestability, and longitudinal accountability.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two">
          <div>
            <div className="kicker">Research agenda</div>
            <h2>The interaction is the unit of analysis.</h2>
          </div>
          <div className="copy">
            <p>
              The research program studies what repeated, adaptive AI interaction does to human trust, reliance,
              interpretation, and agency—and builds the governance instruments that make that cumulative effect
              visible, bounded, reviewable, and contestable. The program spans conceptual research (Trajectory
              Governance, Recursive Epistemic Reinforcement), candidate standards (AI Trust Receipts, the
              Professional Governance Manual), technical architecture (PDEV, EIOS, EIT), and working
              implementations with conformance evidence.
            </p>
            <p>
              The public posture is deliberate: every artifact is labeled by status, claim boundaries are stated on
              each page, and the <Link href="/governance-register" style={{ color: "var(--cyan)" }}>Governance
              Register</Link> records canonical terminology and versions.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="kicker">Research focus</div>
          <h2 style={{ maxWidth: 880, marginBottom: 26 }}>Six governance questions.</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Area</th>
                <th>Question</th>
              </tr>
            </thead>
            <tbody>
              {focus.map(([area, q]) => (
                <tr key={area}>
                  <td><strong style={{ color: "var(--navy)" }}>{area}</strong></td>
                  <td>{q}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <div className="container two">
          <div>
            <div className="kicker">Working with the program</div>
            <h2>Collaboration and implementation.</h2>
          </div>
          <div className="copy">
            <p>
              The program is open to research collaboration, implementation guidance, standards-oriented
              discussion, documentation work, and advisory engagements scoped within the published claim
              boundaries. Commercial offerings are described on the{" "}
              <Link href="/audit" style={{ color: "var(--cyan)" }}>audit</Link> and{" "}
              <Link href="/ai-disclosure-guide" style={{ color: "var(--cyan)" }}>guide</Link> pages.
            </p>
            <p>
              Contact: <a href={`mailto:${siteConfig.email}`} style={{ color: "var(--cyan)" }}>{siteConfig.email}</a>
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="boundary-note">
            <strong>Credential boundary:</strong> Affiliations, credentials, and research roles are described here
            using institutionally verifiable language only. The work is presented as review-ready and
            public-staging ready—not externally certified, standards-body adopted, legally validated, or
            peer-reviewed accepted.
          </div>
        </div>
      </section>
    </main>
  );
}
