import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Disclosure & Trust Guide | Emotional Infrastructure",
  description:
    "A practical guide that tells you when to disclose AI use, how to word it, when human review is needed, and what simple records protect trust if a client, student, customer, or audience member asks."
};

const missing = [
  "a written rule for when AI use should be disclosed",
  "clear language for how to say it",
  "a review process for AI-assisted work",
  "a record that shows what happened",
  "a public trust statement clients can inspect"
];

const promise = [
  "when disclosure is required",
  "how much to say",
  "where to place the disclosure",
  "when human review is needed",
  "what record to keep",
  "how to publish a basic AI trust statement"
];

const inside = [
  "The two-minute AI disclosure test",
  "The four disclosure depths",
  "Copy-paste disclosure statements",
  "Human review rules",
  "The 30-second review log",
  "Automated-system boundaries",
  "Public AI trust page template",
  "AI trust self-assessment",
  "Implementation workflow"
];

const audience = [
  "consultants using AI in client deliverables",
  "coaches using AI in content or client communication",
  "creators using AI in posts, newsletters, products, or courses",
  "educators using AI-assisted instructional materials",
  "founders using AI in customer communication",
  "small businesses using AI in marketing, sales, or automated replies"
];

const notFor = [
  "legal advice",
  "a certification",
  "enterprise compliance software",
  "a technical AI safety framework",
  "a theoretical ethics essay",
  "a way to hide AI use"
];

const faq = [
  [
    "Is this legal advice?",
    "No. This is an operational governance guide. It is not legal advice, certification, or guaranteed compliance."
  ],
  [
    "Do I need this if I only use AI for drafting?",
    "Possibly. If AI-assisted drafting affects how a client, student, customer, or audience member understands or relies on the work, disclosure may be needed."
  ],
  [
    "Does every AI use need disclosure?",
    "No. Disclosure is triggered by materiality, not by the mere fact of AI use."
  ],
  [
    "What does materiality mean?",
    "It means a reasonable person's understanding of the work would change if they knew how AI was involved."
  ],
  [
    "Is this only for businesses?",
    "No. It is useful for consultants, creators, coaches, educators, founders, service providers, and small AI-enabled teams."
  ],
  [
    "What do I receive?",
    "You receive the full AI Disclosure & Trust Guide, disclosure examples, review rules, review log template, automated-system boundary guidance, public trust page template, and self-assessment."
  ],
  [
    "Can I use the templates directly?",
    "Yes. The templates are designed to be adapted and used in your own workflow."
  ]
];

export default function AiDisclosureGuidePage() {
  return (
    <main>
      <Section eyebrow="Core product" title="Know when to disclose AI use, how to say it, and what records protect trust.">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="prose-ei text-lg">
            <p>
              A practical guide for consultants, creators, educators, coaches, founders, and small AI-enabled
              businesses using AI in client-facing or audience-facing communication.
            </p>
            <p>
              You use AI in your work. It may help draft, edit, summarize, translate, personalize, automate, or
              respond. But if a client, student, customer, or audience member asks whether AI was involved, can
              you answer clearly? Most people cannot. They do not have:
            </p>
            <ul className="list-disc pl-6 leading-8">
              {missing.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <p>That is where trust risk begins.</p>
            <p>
              <strong>AI use is not the problem. Undisclosed, unreviewed, and unaccountable AI use is the trust
              risk.</strong>
            </p>
            <h3>The product promise</h3>
            <p>In one focused working session, this guide helps you build a practical AI disclosure practice. You will know:</p>
            <ul className="list-disc pl-6 leading-8">
              {promise.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-ink p-8 text-paper">
            <p className="font-serif text-4xl leading-tight">The AI Disclosure &amp; Trust Guide.</p>
            <p className="mt-8 text-3xl">$99</p>
            <p className="mt-2 text-sm text-paper/70">Early-reader launch price: $49 for the first five buyers.</p>
            <Link
              href={siteConfig.guideCheckoutUrl}
              className="mt-8 inline-flex rounded-full bg-paper px-5 py-3 text-xs uppercase tracking-widest text-ink"
            >
              Get the AI Disclosure &amp; Trust Guide
            </Link>
            <h3 className="mt-10 text-xs uppercase tracking-widest text-paper/60">What is inside</h3>
            <ol className="mt-4 list-decimal pl-6 leading-8 text-paper/90">
              {inside.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ol>
            <p className="mt-8 text-sm leading-7 text-paper/70">
              Checkout is currently a placeholder. Replace the URL in lib/site.ts once the payment link is
              created.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="prose-ei text-lg">
            <h3>Who it is for</h3>
            <ul className="list-disc pl-6 leading-8">
              {audience.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          <div className="prose-ei text-lg">
            <h3>Who it is not for</h3>
            <p>This guide is not:</p>
            <ul className="list-disc pl-6 leading-8">
              {notFor.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
            <p>It is a practical disclosure and trust guide.</p>
          </div>
        </div>

        <div className="mt-16 max-w-4xl">
          <h3 className="font-serif text-3xl">Questions, answered.</h3>
          <div className="mt-6">
            {faq.map(([q, a]) => (
              <div key={q} className="border-t border-line py-5">
                <p className="font-semibold">{q}</p>
                <p className="mt-2">{a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 max-w-4xl">
          <p className="text-sm leading-7 text-muted">
            Because this is a digital product, all sales are final once the guide is downloaded. If you purchase
            the guide and believe it does not match the product description, contact {siteConfig.email} within 7
            days with your concern.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">
            This guide is an operational governance resource. It is not legal advice, certification, financial
            advice, clinical advice, or guaranteed compliance with any law, regulation, platform policy, or
            institutional requirement. For regulated, legal, clinical, financial, or high-stakes settings, consult
            qualified professionals.
          </p>
          <p className="mt-8 font-serif text-2xl">Build a clearer AI disclosure practice this week.</p>
          <p className="mt-4">
            Not ready for the full guide? Start with the free{" "}
            <Link href="/ai-disclosure-checklist" className="underline">
              AI Disclosure Decision Checklist
            </Link>{" "}
            or book an{" "}
            <Link href="/audit" className="underline">
              AI Disclosure &amp; Trust Audit
            </Link>
            .
          </p>
        </div>
      </Section>
    </main>
  );
}
