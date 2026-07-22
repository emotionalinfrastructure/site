import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Publications | Emotional Infrastructure",
  description:
    "Papers, technical briefs, dispatches, and public materials of the Emotional Infrastructure research program, each labeled by publication status.",
  alternates: { canonical: "https://emotionalinfrastructure.org/publications/" }
};

const sections = [
  {
    kicker: "Working papers",
    items: [
      {
        title: "Recursive Epistemic Reinforcement in Conversational AI",
        meta: "Working paper · v1.0 · 2026 · External validation pending",
        desc: "A longitudinal archival case study of how unsupported interpretations can be repeated, elaborated, and normalized across 1,714 conversations and 57,307 message nodes.",
        href: "/research/recursive-epistemic-reinforcement",
        external: false
      }
    ]
  },
  {
    kicker: "Candidate specifications",
    items: [
      {
        title: "AI Trust Receipts™ — Technical Specification",
        meta: "Candidate specification · v0.1.1 · 2026",
        desc: "Verifiable, human-readable records of consequential AI actions, with reference implementation, schemas, conformance materials, and an operational API alpha.",
        href: "/research/trust-receipt",
        external: false
      }
    ]
  },
  {
    kicker: "Technical dispatches",
    items: [
      {
        title: "PDEV Middleware and the Emotional Infrastructure Runtime Stack",
        meta: "Technical implementation brief · Dispatch Issue 47 · June 2026",
        desc: "A candidate runtime architecture applying ordered purpose, dignity, evidence, and veto checks before behavioral signals reach adaptive inference.",
        href: "/research/pdev-runtime-governance",
        external: false
      }
    ]
  },
  {
    kicker: "External and public papers",
    items: [
      {
        title: "Why AI Needs Emotional Governance Before It Is Too Late",
        meta: "Public paper · SSRN",
        desc: "Public-facing argument for governing the emotional and behavioral conditions AI systems create. Available via the author's SSRN profile.",
        href: null,
        external: true
      }
    ]
  },
  {
    kicker: "Manuscripts under submission",
    items: [
      {
        title: "EIT research manuscripts and submission packages",
        meta: "Submission-oriented · Not yet peer-reviewed accepted",
        desc: "Cover letters, revision memos, APA7 manuscripts, and submission packages are available as hash-verified Tier A artifacts in the controlled download library.",
        href: "/downloads",
        external: false
      }
    ]
  }
];

export default function PublicationsPage() {
  return (
    <main id="main">
      <section className="page-title">
        <div className="container">
          <div className="kicker">Publications</div>
          <h1>Papers, briefs, and dispatches.</h1>
          <p className="lead">
            The published output of the research program, labeled by status. Working papers, candidate
            specifications, technical dispatches, and submission-oriented manuscripts are distinct categories, and
            the distinction is preserved deliberately.
          </p>
        </div>
      </section>

      {sections.map((s, i) => (
        <section className={i % 2 ? "section alt" : "section"} key={s.kicker}>
          <div className="container">
            <div className="kicker">{s.kicker}</div>
            <div className="pathway">
              {s.items.map((item) => (
                <div className="download" key={item.title}>
                  <div className="label">{item.meta}</div>
                  {item.href ? (
                    <Link href={item.href}>{item.title}</Link>
                  ) : (
                    <span style={{ fontWeight: 700, color: "var(--navy)" }}>{item.title}</span>
                  )}
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="container">
          <div className="boundary-note">
            <strong>Status boundary:</strong> Items on this page are labeled by their actual publication status.
            No item should be described as peer-reviewed accepted, externally adopted, or certified unless that
            status is documented in the <Link href="/governance-register" style={{ textDecoration: "underline" }}>Governance Register</Link>.
          </div>
        </div>
      </section>
    </main>
  );
}
