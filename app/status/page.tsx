import type { Metadata } from "next";
import ReleaseStatus from "@/components/ReleaseStatus";

export const metadata: Metadata = {
  title: "Public Status | Emotional Infrastructure",
  description:
    "The official maturity statement for the Emotional Infrastructure portfolio, separating internal completion from external validation."
};

const maturity = [
  {
    area: "Internal artifact build",
    position: "Core governance package is built and organized.",
    boundary: "The package may be described as internally complete at version 0.1."
  },
  {
    area: "Academic papers",
    position: "Manuscripts and submission packages exist.",
    boundary: "They should not be described as peer-reviewed or accepted until a journal decision exists."
  },
  {
    area: "Standards materials",
    position: "Candidate specification materials exist.",
    boundary: "They should not be described as IETF, W3C, ISO, or regulatory standards unless formally adopted."
  },
  {
    area: "Technical implementation",
    position: "Logic, schemas, and testing requirements are defined.",
    boundary: "The system should not be described as production-tested until live implementation evidence exists."
  },
  {
    area: "Public deployment",
    position: "Launch-ready copy and Tier A download controls exist.",
    boundary: "Public pages must preserve candidate-level language."
  },
  {
    area: "Commercial use",
    position: "Pricing, licensing, revenue governance, and offer materials exist.",
    boundary: "Binding use requires legal review and client-specific scoping."
  }
];

export default function StatusPage() {
  return (
    <main id="main">
      <section className="page-title">
        <div className="container">
          <div className="kicker">Public status statement</div>
          <h1>Where the work stands, stated precisely.</h1>
          <p className="lead">
            Emotional Infrastructure is currently a candidate research, standards, policy, implementation, public
            deployment, and revenue-governance framework. The materials in this portfolio are provided for review,
            development, academic submission refinement, standards-oriented discussion, implementation planning,
            institutional evaluation, and controlled commercial scoping.
          </p>
          <p className="note">
            The public portfolio distinguishes completed internal development from external validation. A completed
            manuscript is not the same thing as a peer-reviewed publication. A candidate standard is not the same
            thing as an adopted standard. A schema model is not the same thing as a production-certified
            implementation. A policy framework is not the same thing as legal compliance approval. A revenue model
            is not the same thing as a binding contract. These distinctions are governance controls, not weaknesses.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">Maturity statement</div>
          <table className="table">
            <thead>
              <tr>
                <th>Maturity area</th>
                <th>Current position</th>
                <th>Claim boundary</th>
              </tr>
            </thead>
            <tbody>
              {maturity.map((m) => (
                <tr key={m.area}>
                  <td>
                    <strong style={{ color: "var(--navy)" }}>{m.area}</strong>
                  </td>
                  <td>{m.position}</td>
                  <td>{m.boundary}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="note">
            The accurate current claim is that Emotional Infrastructure is a developed, reviewable, and
            implementation-oriented governance architecture for longitudinal AI interaction accountability. The next
            validation steps are academic review, standards-oriented feedback, technical testing, institutional
            pilot design, legal review for commercial terms, external peer review, and controlled public release.
          </p>
        </div>
      </section>

      <ReleaseStatus />
    </main>
  );
}
