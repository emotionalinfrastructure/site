import Link from "next/link";

const portfolio = [
  ["Status", "/status"],
  ["Framework", "/framework"],
  ["Standards", "/standards"],
  ["Policy", "/policy"],
  ["Revenue", "/revenue"],
  ["Downloads", "/downloads"]
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ marginBottom: 26 }}>
        <nav aria-label="Portfolio pages" style={{ display: "flex", flexWrap: "wrap", gap: 18 }}>
          {portfolio.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="container footer-grid">
        <div>
          <strong style={{ color: "#fff" }}>Brittany Wright</strong>
          <br />
          Founder, Emotional Infrastructure · AI Governance Research · Cybersecurity Student · CEITR-aligned research pathway
          <br />
          <span>Unauthorized Inference · Human-impact AI governance · Interaction-layer accountability</span>
        </div>
        <div>
          © {new Date().getFullYear()} Brittany Wright. Materials are presented for review, critique, collaboration,
          research development, and implementation discussion. Do not describe these artifacts as externally certified,
          regulator-approved, standards-body adopted, legally validated, peer-reviewed accepted, production-proven, or
          externally validated without separate evidence.
        </div>
      </div>
    </footer>
  );
}
