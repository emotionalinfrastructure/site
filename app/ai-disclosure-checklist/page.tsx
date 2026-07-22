import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "AI Disclosure Decision Checklist | Emotional Infrastructure",
  description:
    "Know in two minutes whether your AI use needs to be disclosed — and how much to say. A free checklist for consultants, creators, educators, coaches, founders, and small AI-enabled businesses."
};

const aiFunctions = [
  "drafting",
  "editing",
  "summarizing",
  "translating",
  "personalizing",
  "automating",
  "responding",
  "researching",
  "outlining",
  "formatting",
  "rewriting",
  "generating images, audio, or video",
  "supporting decisions or recommendations"
];

const beliefs = [
  ["Authorship", "they may assume the work was entirely human-written."],
  ["Expertise", "they may assume a professional personally generated the analysis."],
  ["Presence", "they may assume they are interacting with a human in real time."],
  ["Personalization", "they may not know content was adapted to them."],
  ["Persuasion", "they may not know AI helped shape sales or influence language."],
  ["Review", "they may assume a human checked the work before release."],
  [
    "Reliability",
    "they may rely on the output as professional, educational, financial, health-related, legal, safety-related, or otherwise high-stakes."
  ],
  [
    "Synthetic media",
    "they may believe an image, voice, video, testimonial, or identity representation is fully real."
  ]
];

const depths = [
  ["1", "Presence", "AI was used.", "AI assisted but a human directed and finalized the work."],
  ["2", "Function", "What AI did.", "AI drafted, summarized, personalized, translated, automated, or responded."],
  ["3", "Method", "How AI was used and reviewed.", "The client, student, buyer, or audience relies on the process itself."],
  [
    "4",
    "Full record",
    "Tools, process, review, sign-off.",
    "High-stakes contexts, paid deliverables under contract, minors, vulnerable audiences, safety-adjacent work, or regulated-adjacent content."
  ]
];

const placements = [
  ["Proposal", "near the project method section"],
  ["Client deliverable", "near the introduction or methodology note"],
  ["Newsletter", "footer or editorial note before recommendations"],
  ["Course content", "course page or lesson introduction"],
  ["Chatbot", "before or at the start of the interaction"],
  ["Automated email", "at the top or before the recipient relies on it"],
  ["Social media post", "in caption, not only in profile bio"],
  ["Public trust page", "as a reference layer, not the only disclosure"]
];

export default function AiDisclosureChecklistPage() {
  return (
    <main>
      <Section eyebrow="Free checklist" title="The AI Disclosure Decision Checklist.">
        <div className="prose-ei max-w-4xl text-lg">
          <p>
            <strong>Know in two minutes whether your AI use needs to be disclosed — and how much to say.</strong>
          </p>
          <p>
            This checklist helps consultants, creators, educators, coaches, founders, and small AI-enabled
            businesses answer one practical question: <em>do I need to tell people AI was involved?</em>
          </p>
          <p>
            AI use is not automatically a trust problem. The risk begins when AI shapes work people rely on and the
            audience is not given enough information to understand, review, or question that influence.
          </p>

          <h3>Step 1 · Did AI participate?</h3>
          <p>Did an AI tool touch this asset, message, interaction, or deliverable in any way? Examples include:</p>
          <ul className="list-disc pl-6 leading-8">
            {aiFunctions.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <p>
            <strong>If no:</strong> no AI disclosure question exists. <strong>If yes:</strong> go to Step 2.
          </p>

          <h3>Step 2 · Apply the materiality test</h3>
          <p>
            Ask: <strong>would a reasonable person&rsquo;s understanding of this work change if they knew how AI
            was involved?</strong> This is the central disclosure test. Disclosure is not triggered by the mere
            fact that AI was used. Disclosure is triggered when AI involvement matters to how the audience
            interprets, relies on, evaluates, or trusts the work.
          </p>
          <p>
            <strong>If no:</strong> disclosure may be optional. A simple utility note is enough if you want one:
            &ldquo;Prepared with AI-assisted editing and reviewed by a human before publication.&rdquo;{" "}
            <strong>If yes:</strong> disclosure is required. Go to Step 3.
          </p>

          <h3>Step 3 · Identify what belief AI affected</h3>
          <p>What belief could change if the person knew AI was involved? Check all that apply:</p>
          <ul className="list-disc pl-6 leading-8">
            {beliefs.map(([term, rest]) => (
              <li key={term}>
                <strong>{term}:</strong> {rest}
              </li>
            ))}
          </ul>
          <p>If any of these beliefs are materially affected, disclose.</p>

          <h3>Step 4 · Choose the disclosure depth</h3>
          <p>Use the smallest disclosure that preserves truthful understanding.</p>
        </div>

        <div className="mt-6 max-w-5xl overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr>
                {["Level", "Disclosure depth", "What you say", "Use when"].map((h) => (
                  <th key={h} className="border-b border-line pb-2 pr-4 text-xs uppercase tracking-widest text-muted">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {depths.map(([level, depth, say, when]) => (
                <tr key={level}>
                  <td className="border-b border-line py-3 pr-4 font-semibold">{level}</td>
                  <td className="border-b border-line py-3 pr-4 font-semibold">{depth}</td>
                  <td className="border-b border-line py-3 pr-4">{say}</td>
                  <td className="border-b border-line py-3">{when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="prose-ei mt-10 max-w-4xl text-lg">
          <h3>Step 5 · Place the disclosure where trust forms</h3>
          <p>
            A disclosure buried in fine print does not govern trust. Place the disclosure where the audience forms
            belief about the work, before reliance begins, inside the same channel as the work, near the asset,
            message, deliverable, chatbot, course page, sales page, or automated reply, and in language the
            audience can understand.
          </p>
          <ul className="list-disc pl-6 leading-8">
            {placements.map(([where, how]) => (
              <li key={where}>
                <strong>{where}:</strong> {how}
              </li>
            ))}
          </ul>

          <h3>Step 6 · Keep a one-line record</h3>
          <p>
            A record protects your process better than memory. Use this format:{" "}
            <strong>Asset · AI function · Disclosure level · Human reviewer · Date</strong>. Example: &ldquo;July
            Newsletter · AI-assisted draft + human edit · Level 2 Function disclosure · Reviewed by Brittany
            Wright · 2026-07-07.&rdquo;
          </p>

          <h3>Step 7 · Use the rule</h3>
          <p>
            <strong>
              AI use is not the problem. Undisclosed, unreviewed, and unaccountable AI use is the trust risk.
            </strong>
          </p>
        </div>

        <div className="mt-12 max-w-4xl rounded-3xl bg-ink p-8 text-paper">
          <p className="font-serif text-3xl leading-tight">
            This checklist gives you the decision rule. The full guide gives you the language, the review rules,
            and the records.
          </p>
          <p className="mt-6 text-paper/80">
            The AI Disclosure &amp; Trust Guide adds copy-paste disclosure statements, human review rules, review
            log templates, automated-system boundaries, a public AI trust page template, client-facing language,
            and a simple implementation workflow.
          </p>
          <Link
            href="/ai-disclosure-guide"
            className="mt-8 inline-flex rounded-full bg-paper px-5 py-3 text-xs uppercase tracking-widest text-ink"
          >
            Get the full guide
          </Link>
        </div>

        <p className="mt-10 max-w-4xl text-sm leading-7 text-muted">
          © Brittany Wright · Emotional Infrastructure™. This checklist is an operational governance reference. It
          is not legal advice, certification, financial advice, clinical advice, or guaranteed compliance with any
          statute, regulation, platform policy, or institutional requirement.
        </p>
      </Section>
    </main>
  );
}
