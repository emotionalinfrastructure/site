import type { Metadata } from "next";
import ReleaseStatus from "@/components/ReleaseStatus";

export const metadata: Metadata = {
  title: "Standards | Emotional Infrastructure",
  description:
    "Candidate specification material translating the Emotional Infrastructure governance model into implementable requirements, conformance classes, schemas, and audit expectations."
};

const positioning = [
  {
    component: "Scope and terms",
    fn: "Defines the system boundary and shared vocabulary.",
    status: "Candidate specification material."
  },
  {
    component: "Conformance model",
    fn: "Defines implementation classes and review expectations.",
    status: "Review-ready draft."
  },
  {
    component: "Schema placement",
    fn: "Identifies where machine-readable structures belong.",
    status: "Standards-ready planning material."
  },
  {
    component: "Policy logic",
    fn: "Converts governance duties into enforceable rules and triggers.",
    status: "Implementation-planning material."
  },
  {
    component: "Audit and readiness model",
    fn: "Defines how a system proves behavior through evidence.",
    status: "Review-ready draft."
  }
];

export default function StandardsPage() {
  return (
    <main id="main">
      <section className="page-title">
        <div className="container">
          <div className="kicker">Standards</div>
          <h1>Candidate specification material.</h1>
          <p className="lead">
            The Standards section presents Emotional Infrastructure as candidate specification material. Its purpose
            is to translate the governance model into implementable requirements, defined terminology, conformance
            classes, schemas, audit expectations, policy logic, readiness gates, and release controls.
          </p>
          <p className="note">
            The standards materials should be reviewed as standards-oriented drafts. They are written to support
            future discussion with standards communities, technical reviewers, implementation partners, and
            governance evaluators. They should not be described as adopted RFCs, W3C Recommendations, ISO standards,
            legal mandates, or regulator-approved specifications unless a formal adoption pathway is completed and
            documented.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">Standards positioning</div>
          <table className="table">
            <thead>
              <tr>
                <th>Standards component</th>
                <th>Function</th>
                <th>Current status</th>
              </tr>
            </thead>
            <tbody>
              {positioning.map((p) => (
                <tr key={p.component}>
                  <td>
                    <strong style={{ color: "#fff" }}>{p.component}</strong>
                  </td>
                  <td>{p.fn}</td>
                  <td>{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="kicker">Standards claim boundary</div>
          <p className="copy" style={{ maxWidth: 900 }}>
            The accurate claim is that Emotional Infrastructure has been organized into standards-ready draft form.
            The restricted claim is that it has been formally adopted by an external standards body. That restricted
            claim must not be used without documented adoption.
          </p>
        </div>
      </section>

      <ReleaseStatus />
    </main>
  );
}
