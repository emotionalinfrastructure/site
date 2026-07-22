import type { Metadata } from "next";
import ReleaseStatus from "@/components/ReleaseStatus";

export const metadata: Metadata = {
  title: "Revenue and Commercial Readiness | Emotional Infrastructure",
  description:
    "How Emotional Infrastructure may be positioned for advisory work, implementation planning, licensing strategy, and institutional scoping without commercial incentives undermining the system's principles."
};

const positioning = [
  {
    offer: "Governance architecture review",
    use: "Use for advisory conversations and institutional scoping.",
    boundary: "Do not promise legal compliance guarantees."
  },
  {
    offer: "Policy and standards package",
    use: "Use for implementation planning and review.",
    boundary: "Do not describe as externally adopted standard."
  },
  {
    offer: "Audit-readiness model",
    use: "Use to help organizations define evidence and review pathways.",
    boundary: "Do not claim independent certification unless performed."
  },
  {
    offer: "Licensing discussion",
    use: "Use for strategy, pricing, and access-tier planning.",
    boundary: "Obtain legal review before binding use."
  },
  {
    offer: "Revenue governance",
    use: "Use to show misuse prevention and incentive alignment.",
    boundary: "Maintain prohibition against monetizing distress or emotional vulnerability."
  }
];

export default function RevenuePage() {
  return (
    <main id="main">
      <section className="page-title">
        <div className="container">
          <div className="kicker">Revenue and commercial readiness</div>
          <h1>Commercial scoping with governed boundaries.</h1>
          <p className="lead">
            The Revenue section defines how Emotional Infrastructure may be positioned for advisory work,
            implementation planning, licensing strategy, governance documentation, audit-readiness support, and
            institutional scoping without allowing commercial incentives to undermine the system&rsquo;s own
            principles.
          </p>
          <p className="note">
            The current commercial materials are review-ready for strategy and scoping. They are not binding legal
            contracts and should not be used as final legal terms without qualified counsel review. Commercial
            language must not promise guaranteed compliance, external certification, regulator approval, or
            production readiness unless those claims are separately documented.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">Commercial positioning</div>
          <table className="table">
            <thead>
              <tr>
                <th>Offer area</th>
                <th>Appropriate current use</th>
                <th>Required boundary</th>
              </tr>
            </thead>
            <tbody>
              {positioning.map((p) => (
                <tr key={p.offer}>
                  <td>
                    <strong style={{ color: "#fff" }}>{p.offer}</strong>
                  </td>
                  <td>{p.use}</td>
                  <td>{p.boundary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <ReleaseStatus />
    </main>
  );
}
