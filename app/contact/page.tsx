import type { Metadata } from "next";
import Link from "next/link";

const email = "brittanywright@emotionalinfrastructure.org";

export const metadata: Metadata = {
  title: "Contact | Emotional Infrastructure",
  description:
    "Contact Brittany Wright about AI governance assessments, Trust Receipt implementation, regulatory crosswalks, staff capability development, advisory, research, review, and collaboration."
};

const inquiries = [
  "Governance assessment",
  "AI Trust Receipt implementation",
  "Regulatory crosswalk",
  "Staff capability development",
  "Monthly governance advisory",
  "Research review or collaboration",
  "Speaking, media, and writing"
];

export default function ContactPage() {
  return (
    <main id="main">
      <section className="page-title">
        <div className="container">
          <div className="kicker">Contact</div>
          <h1>Start with the system and the decision.</h1>
          <p className="lead">
            The fastest path is email. Describe the AI system, the affected users, and the governance decision your
            organization needs to make. For research or review requests, identify the artifact you are working from.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two">
          <div className="copy">
            <p>
              Service inquiries are qualified against system access, documentation availability, executive decision
              authority, budget range, and a timeline that permits defensible work. When a full proposal would be
              premature, the response will recommend a narrower scoping step.
            </p>
            <p>
              Adversarial review and serious research critique are welcome. If you are assessing a specification,
              instrument, reference implementation, or public claim, say so directly and identify the evidence standard
              you are applying.
            </p>
            <div className="actions">
              <a
                className="btn primary"
                href={`mailto:${email}?subject=${encodeURIComponent("Emotional Infrastructure inquiry")}`}
              >
                Email Brittany →
              </a>
              <Link className="btn secondary" href="/services">Review professional services</Link>
              <Link className="btn secondary" href="/review">How review works</Link>
            </div>
          </div>
          <aside className="card">
            <div className="card-inner">
              <div className="card-title">
                <div>
                  <div className="small">Direct written contact</div>
                  <h3>Email</h3>
                </div>
                <span className="pill">Primary channel</span>
              </div>
              <p className="copy" style={{ wordBreak: "break-word" }}>
                <a href={`mailto:${email}`} style={{ color: "var(--cyan)", fontWeight: 800 }}>{email}</a>
              </p>
              <div className="tags" style={{ marginTop: "18px" }}>
                {inquiries.map((inquiry) => (
                  <span className="tag" key={inquiry}>{inquiry}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
