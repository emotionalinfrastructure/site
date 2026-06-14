import type { Metadata } from "next";

const email = "brittanywright@emotionalinfrastructure.org";

export const metadata: Metadata = {
  title: "Contact | Emotional Infrastructure",
  description:
    "Contact Brittany Wright for review access, research conversations, collaboration, audits, and Emotional Infrastructure framework questions."
};

const inquiries = [
  "Review and critique access",
  "Research conversation or collaboration",
  "Audit and assessment inquiries",
  "Speaking, media, and writing",
  "Framework and specification questions"
];

export default function ContactPage() {
  return (
    <main id="main">
      <section className="page-title">
        <div className="container">
          <div className="kicker">Contact</div>
          <h1>Open to review, collaboration, and serious questions.</h1>
          <p className="lead">
            The fastest path is email. Tell me which artifact or question you are working from and what kind of response
            you need.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two">
          <div className="copy">
            <p>
              Use this for review access, research conversations, collaboration, audit inquiries, media and speaking
              requests, and Emotional Infrastructure framework questions.
            </p>
            <p>
              Adversarial review is welcome. If you are assessing the work, say so, and I will point you to the
              specification and the reference implementation.
            </p>
            <div className="actions">
              <a className="btn primary" href={`mailto:${email}`}>Email Brittany →</a>
              <a className="btn secondary" href="/review">How review works</a>
            </div>
          </div>
          <aside className="card">
            <div className="card-inner">
              <div className="card-title">
                <div>
                  <div className="small">Direct contact</div>
                  <h3>Email</h3>
                </div>
                <span className="pill">Primary channel</span>
              </div>
              <p className="copy" style={{ wordBreak: "break-word" }}>
                <a href={`mailto:${email}`} style={{ color: "var(--cyan)", fontWeight: 800 }}>{email}</a>
              </p>
              <div className="tags" style={{ marginTop: "18px" }}>
                {inquiries.map((i) => (
                  <span className="tag" key={i}>{i}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
