import Link from "next/link";

const products = [
  ["Free Disclosure Checklist", "/ai-disclosure-checklist"],
  ["Disclosure & Trust Guide", "/ai-disclosure-guide"],
  ["Trust Audit", "/audit"],
  ["Creator Kit", "/creator-kit"]
];

const portfolio = [
  ["Status", "/status"],
  ["Framework", "/framework"],
  ["Standards & Tools", "/standards"],
  ["Governance Register", "/governance-register"],
  ["Policy", "/policy"],
  ["Revenue", "/revenue"],
  ["Downloads", "/downloads"],
  ["Trust Receipts", "/trust-receipts"],
  ["Review", "/review"]
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
        <nav
          aria-label="Products and services"
          style={{ display: "flex", flexWrap: "wrap", gap: 18, marginTop: 12 }}
        >
          {products.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="container footer-grid">
        <div>
          <strong>Brittany Wright</strong>
          <br />
          Founder of Emotional Infrastructure™ · Undergraduate cybersecurity researcher developing governance
          tools for AI-mediated trust environments
          <br />
          <span>Disclosure · Consent · Auditability · Human review · Contestability · Longitudinal accountability</span>
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
