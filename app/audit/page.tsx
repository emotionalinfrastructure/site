import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Disclosure & Trust Audit | Emotional Infrastructure",
  description:
    "A practical audit of your AI-assisted communication workflow to identify where disclosure, human review, records, and public trust commitments may be missing."
};

const tiers = [
  {
    name: "Lite Audit",
    price: "$300–$500",
    turnaround: "5–7 business days",
    bestFor: "Solo consultants, creators, coaches, or service providers.",
    includes: [
      "intake questionnaire",
      "review of up to 3 AI-assisted workflows",
      "disclosure gap assessment",
      "human review recommendation",
      "basic recordkeeping recommendation",
      "1-page findings memo",
      "3 recommended disclosure statements"
    ]
  },
  {
    name: "Full Audit",
    price: "$750–$1,500",
    turnaround: "10–14 business days",
    bestFor:
      "Small businesses, educators, agencies, and founders using AI across several public or client-facing channels.",
    includes: [
      "intake questionnaire",
      "review of up to 8 workflows/channels",
      "AI use inventory",
      "disclosure classification",
      "trust-impact routing",
      "human review recommendations",
      "automated-system boundary review",
      "claims and sales language review",
      "public trust page recommendation",
      "findings memo",
      "implementation checklist"
    ]
  },
  {
    name: "Team / Organization Audit",
    price: "Custom",
    turnaround: "Scoped at discovery",
    bestFor:
      "Organizations using AI across content, customer service, education, marketing, sales, or internal and external communication.",
    includes: [
      "scoped discovery",
      "channel inventory",
      "role and ownership map",
      "disclosure architecture",
      "review-routing recommendation",
      "automation boundary review",
      "trust page recommendation",
      "correction pathway recommendation",
      "implementation roadmap"
    ]
  }
];

const memo = [
  "Executive summary of current AI disclosure and trust posture",
  "AI use inventory of reviewed workflows",
  "Disclosure gaps: where disclosure is absent, unclear, misplaced, or too shallow",
  "Human review gaps: where AI-assisted work requires stronger review or sign-off",
  "Recordkeeping gaps: where a simple review log or decision record is needed",
  "Automation boundaries: where automated systems need non-human status disclosure, refusal rules, or human handoff",
  "Prioritized recommended fixes",
  "Suggested copy-paste disclosure language",
  "Next-step implementation path"
];

export default function AuditPage() {
  return (
    <main>
      <Section eyebrow="Service" title="The AI Disclosure & Trust Audit.">
        <div className="prose-ei max-w-4xl text-lg">
          <p>
            If you use AI in client work, content, courses, customer communication, automated replies, sales
            material, or digital products, your audience may not know where AI is shaping what they read, receive,
            rely on, or respond to.
          </p>
          <p>
            The AI Disclosure &amp; Trust Audit reviews your current workflow and identifies where trust could be
            weakened by unclear disclosure, missing human review, absent records, unsupported claims, or
            automation that feels more human than it is. You receive a clear findings memo, prioritized
            recommendations, and practical disclosure language you can apply immediately.
          </p>
          <p>
            This is an operational trust review, not a legal audit or compliance certification.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-3xl bg-ink p-8 text-paper">
              <p className="font-serif text-3xl leading-tight">{t.name}</p>
              <p className="mt-4 text-2xl">{t.price}</p>
              <p className="mt-1 text-sm text-paper/70">Turnaround: {t.turnaround}</p>
              <p className="mt-4 text-sm leading-7 text-paper/80">
                <strong>Best for:</strong> {t.bestFor}
              </p>
              <ul className="mt-4 list-disc pl-5 text-sm leading-7 text-paper/90">
                {t.includes.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="prose-ei text-lg">
            <h3>What the findings memo covers</h3>
            <ul className="list-disc pl-6 leading-8">
              {memo.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="rounded-3xl bg-ink p-8 text-paper">
              <p className="font-serif text-3xl leading-tight">
                Book an AI Disclosure &amp; Trust Audit.
              </p>
              <p className="mt-6 text-sm leading-7 text-paper/80">
                Start with a short intake covering where you use AI, which uses are client- or audience-facing,
                what you currently disclose, who reviews AI-assisted work, and what records you keep.
              </p>
              <Link
                href={siteConfig.auditCheckoutUrl}
                className="mt-8 inline-flex rounded-full bg-paper px-5 py-3 text-xs uppercase tracking-widest text-ink"
              >
                Book Audit
              </Link>
              <p className="mt-8 text-sm leading-7 text-paper/70">
                Checkout is currently a placeholder. Replace the URL in lib/site.ts once the payment or booking
                link is created.
              </p>
            </div>
            <p className="mt-6 text-sm leading-7 text-muted">
              This audit is an operational governance review. It is not legal advice, certification, financial
              advice, clinical advice, or guaranteed compliance. Not ready for an audit? Start with the free{" "}
              <Link href="/ai-disclosure-checklist" className="underline">
                AI Disclosure Decision Checklist
              </Link>{" "}
              or the{" "}
              <Link href="/ai-disclosure-guide" className="underline">
                AI Disclosure &amp; Trust Guide
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
