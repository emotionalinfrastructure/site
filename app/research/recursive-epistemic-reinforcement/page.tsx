import type { Metadata } from "next";
import Link from "next/link";

const canonicalUrl = "https://emotionalinfrastructure.org/research/recursive-epistemic-reinforcement/";
const pdfFilename = "recursive-epistemic-reinforcement-working-paper-v1.0.pdf";
const pdfSha256 = "2c808a6749cdd53f759f7975dff0fc7773359932dbeecc1f8f451d581d62d80a";

export const metadata: Metadata = {
  title: "Recursive Epistemic Reinforcement in Conversational AI — Working Paper | Emotional Infrastructure",
  description:
    "A longitudinal archival case study examining how unsupported interpretations can be repeated, elaborated, and normalized across extended AI conversations. Corpus: 1,714 conversations and 57,307 message nodes.",
  alternates: { canonical: canonicalUrl }
};

const apa = `Wright, B. (2026). Recursive epistemic reinforcement in conversational AI: A longitudinal
archival case study (Version 1.0) [Working paper]. Emotional Infrastructure.
${canonicalUrl}`;

const bibtex = `@techreport{wright2026rer,
  author      = {Wright, Brittany},
  title       = {Recursive Epistemic Reinforcement in Conversational AI:
                 A Longitudinal Archival Case Study},
  institution = {Emotional Infrastructure},
  year        = {2026},
  number      = {v1.0},
  type        = {Working paper},
  url         = {${canonicalUrl}}
}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline: "Recursive Epistemic Reinforcement in Conversational AI: A Longitudinal Archival Case Study",
  author: { "@type": "Person", name: "Brittany Wright" },
  publisher: { "@type": "Organization", name: "Emotional Infrastructure", url: "https://emotionalinfrastructure.org" },
  datePublished: "2026",
  version: "1.0",
  url: canonicalUrl,
  creativeWorkStatus: "Working paper",
  description:
    "A longitudinal archival case study examining how unsupported interpretations can be repeated, elaborated, and normalized across extended AI conversations."
};

export default function RerWorkingPaperPage() {
  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-title">
        <div className="container">
          <div className="kicker">Featured working paper · Version 1.0 · 2026</div>
          <h1>Recursive Epistemic Reinforcement in Conversational AI.</h1>
          <p className="lead">
            A longitudinal archival case study examining how unsupported interpretations can be repeated,
            elaborated, and normalized across extended AI conversations.
          </p>
          <p className="note">
            Corpus: 1,714 conversations and 57,307 message nodes, August 2024–August 2025. Status: retrospective
            single-participant working paper; external validation pending.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two">
          <div>
            <div className="kicker">Research question</div>
            <h2>How do uncertain interpretations become settled?</h2>
          </div>
          <div className="copy">
            <p>
              Across an extended history of conversations with an AI system, by what mechanisms can an unsupported
              or uncertain interpretation be repeated, elaborated, and progressively normalized until it functions
              as an accepted premise—and what correction controls would interrupt that reinforcement?
            </p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container two">
          <div>
            <div className="kicker">Abstract</div>
            <h2>A longitudinal archival case study.</h2>
          </div>
          <div className="copy">
            <p>
              This working paper examines recursive epistemic reinforcement: the process by which conversational AI
              systems can repeat, elaborate, and normalize unsupported interpretations across extended interaction
              histories. Using a retrospective archival corpus of 1,714 conversations comprising 57,307 message
              nodes recorded between August 2024 and August 2025, the study traces how candidate interpretations
              introduced in one conversation can reappear, accumulate supporting elaboration, and shift from
              hypothesis to premise across subsequent sessions. The analysis develops a descriptive account of the
              reinforcement pathway and proposes correction controls—provenance marking, confidence carryover
              limits, revalidation triggers, and contestability points—that governance layers could apply where
              longitudinal conversational context is retained.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="methods">
        <div className="container">
          <div className="kicker">Methods and limitations</div>
          <h2 style={{ maxWidth: 880, marginBottom: 26 }}>What the study is, and what it is not.</h2>
          <div className="grid-2">
            <article className="tile">
              <div className="label">Method</div>
              <p>
                Retrospective archival analysis of a single participant&rsquo;s complete conversation corpus:
                corpus profiling, message-node segmentation, longitudinal tracing of interpretive claims across
                conversations, and qualitative coding of reinforcement and correction events.
              </p>
            </article>
            <article className="tile">
              <div className="label">Corpus</div>
              <p>
                1,714 conversations; 57,307 message nodes; August 2024–August 2025. The underlying conversations
                contain personal information and remain restricted; the paper reports aggregate structure and
                redacted illustrative exhibits.
              </p>
            </article>
            <article className="tile">
              <div className="label">Limitations</div>
              <p>
                Single-participant retrospective design: findings describe mechanisms observed in one longitudinal
                record and do not establish prevalence across users, systems, or platforms. Coding was performed by
                the author; independent recoding and external validation are pending.
              </p>
            </article>
            <article className="tile">
              <div className="label">Claim boundaries</div>
              <p>
                The paper does not claim institutional validation, internal platform access, surveillance,
                compromise, targeting, or hidden intent by any system operator. It is an archival case study of
                interaction records, presented for review.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container two">
          <div>
            <div className="kicker">Data availability</div>
            <h2>Restricted corpus, inspectable structure.</h2>
          </div>
          <div className="copy">
            <p>
              The underlying conversation corpus contains sensitive personal information and is not publicly
              available. The paper publishes the corpus profile, the evidence hierarchy, redacted exhibits, and the
              archive hash so the analysis can be reviewed without exposing restricted records. Qualified
              researchers may request access to additional sanitized aggregates under a restricted-data agreement.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">Artifact</div>
          <h2 style={{ maxWidth: 880, marginBottom: 26 }}>The working paper.</h2>
          <div className="pathway">
            <div className="download">
              <div className="label">Working paper · v1.0 · 19 pages</div>
              <span style={{ fontWeight: 700, color: "var(--navy)" }}>{pdfFilename}</span>
              <p>
                Canonical distribution file. The PDF is being staged at this stable URL; until it is attached, the
                integrity hash below identifies the canonical document.
              </p>
              <small style={{ overflowWrap: "anywhere" }}>SHA-256 {pdfSha256}</small>
            </div>
            <div className="download">
              <Link href="/research/trajectory-governance">Trajectory Governance research program →</Link>
              <p>The governance model this study informs: longitudinal accountability for accumulated influence.</p>
            </div>
            <div className="download">
              <Link href="/governance-register">Governance Register →</Link>
              <p>Canonical terminology, version register, and change history for all published artifacts.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt" id="cite">
        <div className="container">
          <div className="kicker">Cite this work</div>
          <h2 style={{ marginBottom: 20 }}>Citation.</h2>
          <div className="grid-2">
            <div className="tile">
              <div className="label">APA</div>
              <pre style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere", fontSize: 13, lineHeight: 1.6, color: "var(--soft)" }}>{apa}</pre>
            </div>
            <div className="tile">
              <div className="label">BibTeX</div>
              <div style={{ overflowX: "auto" }}>
                <pre style={{ fontSize: 12.5, lineHeight: 1.6, color: "var(--soft)" }}>{bibtex}</pre>
              </div>
            </div>
          </div>
          <p className="note" style={{ marginTop: 20 }}>
            Version 1.0 · Published 2026 · Status: retrospective single-participant working paper; external
            validation pending.
          </p>
        </div>
      </section>
    </main>
  );
}
