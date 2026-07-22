"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  ["Research", "/research"],
  ["Standards", "/standards"],
  ["Services", "/services"],
  ["Implementation", "/implementation"],
  ["Downloads", "/downloads"],
  ["Register", "/governance-register"]
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close ✕" : "Menu ☰"}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">
          {nav.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
          <Link href="/contact">Contact</Link>
        </nav>
      )}
    </header>
  );
}
