import Link from "next/link";

const nav = [
  ["Home", "/"],
  ["Research", "/research"],
  ["Trust Receipt", "/trust-receipt"],
  ["Implementation", "/implementation"],
  ["Artifacts", "/artifacts"],
  ["Review", "/review"]
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" href="/" aria-label="Emotional Infrastructure home">
          <div className="mark" aria-hidden="true">EI</div>
          <div>
            <div className="brand-title">Emotional Infrastructure</div>
            <div className="brand-sub">Brittany Wright · AI Governance · Cybersecurity</div>
          </div>
        </Link>
        <nav className="navlinks" aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
          <Link href="/contact" className="nav-cta">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
