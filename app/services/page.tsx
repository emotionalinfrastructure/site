import type { Metadata } from "next";
import Link from "next/link";

const email = "brittanywright@emotionalinfrastructure.org";

export const metadata: Metadata = {
  title: "AI Governance Services | Emotional Infrastructure",
  description:
    "Founder-led AI governance assessments, AI Trust Receipt implementation workshops, regulatory crosswalks, staff training, and monthly advisory for trust-sensitive AI systems."
};

const services = [
  {
    number: "01",
    title: "AI Governance Assessment",
    price: "$5,000–$15,000",
    status: "Available",
    summary:
      "A structured assessment of one or more AI systems across disclosure, consent, human review, accountability records, longitudinal governance, user remedy, and governance authority.",
    bestFor:
      "Organizations that need an evidence-bound view of where their current controls are mature, fragmented, undocumented, or absent before committing to a larger implementation program.",
    outputs: [
      "Completed 35-control Governance Gap Matrix",
      "Priority Risk Register with evidence status and remediation ownership",
      "Board-ready Executive Findings Report",
      "Sequenced 30/90/180-day Implementation Roadmap"
    ]
  },
  {
    number: "02",
    title: "AI Trust Receipt™ Implementation Workshop",
    price: "$7,500–$20,000",
    status: "Available",
    summary:
      "A two-day working engagement that maps consequential AI actions, classifies consequence, defines authority and human-review controls, and designs user-legible accountability receipts and remedy pathways.",
    bestFor:
      "Product, engineering, legal, compliance, safety, and risk teams preparing to operationalize pre-execution authority gates and durable records for consequential agentic actions.",
    outputs: [
      "Classified action map and authority-control matrix",
      "Client-specific receipt field specification",
      "Three worked receipts drawn from the client system",
      "Review-trigger matrix, remedy pathway, and implementation backlog"
    ]
  },
  {
    number: "03",
    title: "Custom Regulatory Crosswalk",
    price: "$10,000–$30,000",
    status: "Available",
    summary:
      "A control-to-requirement mapping that connects the client’s implemented governance controls and evidence artifacts to selected regulatory, standards, provenance, and internal-policy frameworks.",
    bestFor:
      "Organizations that need one coherent implementation view across frameworks such as the EU AI Act, NIST AI RMF, ISO/IEC 42001, IEEE 7014.1, C2PA, state requirements, or internal policies.",
    outputs: [
      "Versioned framework register and applicability record",
      "Control-level crosswalk with mapped, partial, gap, and not-applicable findings",
      "Evidence Requirements Ledger",
      "Executive briefing memo and counsel-handoff questions"
    ]
  },
  {
    number: "04",
    title: "Staff Capability Development",
    price: "$1,000–$2,500 per participant",
    status: "Custom cohort",
    summary:
      "Role-based training that develops shared governance vocabulary and then advances selected participants from foundational literacy into implementation, evidence operations, and governance-program ownership.",
    bestFor:
      "Cross-functional teams that need product, engineering, support, risk, compliance, legal operations, and leadership to work from the same accountability model.",
    outputs: [
      "Foundation, Practitioner, or Governance Lead pathway",
      "Client-relevant classification and receipt exercises",
      "Assessment or practicum review",
      "Completion attestation that does not represent professional certification"
    ]
  },
  {
    number: "05",
    title: "Monthly Governance Advisory",
    price: "$4,000–$10,000 per month",
    status: "Three-month minimum",
    summary:
      "A recurring governance operating layer for roadmap movement, artifact review, decision documentation, risk-register maintenance, regulatory developments, and quarterly trajectory review.",
    bestFor:
      "Organizations that need sustained governance support while internal teams build controls, maintain evidence, and make consequential decisions about AI system authority and user accountability.",
    outputs: [
      "Monthly governance briefing and roadmap tracking",
      "Versioned decision log and artifact-review record",
      "Risk-register and regulatory-posture updates",
      "Quarterly trajectory review and evidence-retrieval test"
    ]
  }
];

const sequence = [
  ["Assess", "Establish the evidence base, control posture, and priority risks."],
  ["Design", "Define authority, receipt, review, and remedy controls for the actual system."],
  ["Align", "Map implemented controls and evidence to applicable frameworks and internal policies."],
  ["Train", "Build the organizational capability required to operate the controls consistently."],
  ["Sustain", "Maintain decisions, evidence, roadmap movement, and longitudinal accountability over time."]
];

const evidenceRules = [
  ["Observed", "Directly witnessed during a walkthrough, demonstration, or controlled review."],
  ["Documented", "Supported by a dated, versioned, and retrievable client artifact."],
  ["Asserted", "Reported by a client stakeholder but not independently verified during the engagement."],
  ["Unresolved", "Material information is unavailable, inconsistent, or requires additional review."]
];

export default function ServicesPage() {
  const inquiryHref = `mailto:${email}?subject=${encodeURIComponent("Emotional Infrastructure service inquiry")}`;

  return (
    <main id="main">
      <section className="page-title services-hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Founder-led governance engagements · Versioned delivery instruments</div>
            <h1>Governance services for AI systems that shape trust.</h1>
            <p className="lead">
              Emotional Infrastructure™ helps organizations move from general AI principles to inspectable controls,
              user-legible accountability records, documented decision authority, human-review pathways, and evidence
              that can survive internal scrutiny.
            </p>
            <div className="actions">
              <a className="btn primary" href={inquiryHref}>Discuss an engagement →</a>
              <a className="btn secondary" href="#services">Review service lines</a>
            </div>
            <p className="note">
              Current delivery posture: founder-led professional services. Engagements provide governance analysis,
              design, implementation guidance, and capability development. They do not provide legal advice,
              regulatory certification, security testing, or representations of compliance.
            </p>
          </div>
          <aside className="card service-principles">
            <div className="card-inner">
              <div className="card-title">
                <div>
                  <div className="small">Operating standard</div>
                  <h3>Evidence before conclusion.</h3>
                </div>
                <span className="pill">Claim-disciplined</span>
              </div>
              <div className="steps">
                <div className="step">
                  <div className="num">1</div>
                  <div><h4>Scope the system</h4><p>Define the actions, users, jurisdictions, authority boundaries, and evidence actually available.</p></div>
                </div>
                <div className="step">
                  <div className="num">2</div>
                  <div><h4>Separate fact from assertion</h4><p>Every material finding is labeled observed, documented, asserted, or unresolved.</p></div>
                </div>
                <div className="step">
                  <div className="num">3</div>
                  <div><h4>Build the control end-state</h4><p>Recommendations specify what must become operational, reviewable, and provable.</p></div>
                </div>
                <div className="step">
                  <div className="num">4</div>
                  <div><h4>Leave durable artifacts</h4><p>The client keeps versioned matrices, registers, decisions, specifications, and roadmaps.</p></div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="service-section-heading">
            <div>
              <div className="kicker">Professional services</div>
              <h2>Five engagement lines, one accountable delivery sequence.</h2>
            </div>
            <p className="copy">
              Engagements are scoped around the system, consequence profile, available evidence, jurisdictions, and
              internal decision authority. Published ranges establish the commercial boundary; the proposal identifies
              the exact scope variables that determine the final investment.
            </p>
          </div>

          <div className="service-stack">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-card-top">
                  <div className="service-index">{service.number}</div>
                  <div className="service-title-block">
                    <span className="status-pill">{service.status}</span>
                    <h3>{service.title}</h3>
                  </div>
                  <div className="service-price">{service.price}</div>
                </div>
                <div className="service-card-grid">
                  <div>
                    <div className="label">Engagement purpose</div>
                    <p className="service-summary">{service.summary}</p>
                    <div className="label service-label-spaced">Best fit</div>
                    <p className="service-fit">{service.bestFor}</p>
                  </div>
                  <div>
                    <div className="label">Client-held outputs</div>
                    <ul className="service-output-list">
                      {service.outputs.map((output) => <li key={output}>{output}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="service-card-footer">
                  <a href={`${inquiryHref}&body=${encodeURIComponent(`I am interested in the ${service.title}. Please send the qualification and scoping questions.`)}`}>
                    Request scoping questions →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt" id="delivery-sequence">
        <div className="container two">
          <div>
            <div className="kicker">Delivery architecture</div>
            <h2>Assess → Design → Align → Train → Sustain</h2>
            <p className="lead">
              The sequence is modular. A client may begin with a single bounded engagement, but each service is designed
              to produce the evidence and decisions required for the next stage without forcing a larger program.
            </p>
          </div>
          <div className="pathway">
            {sequence.map(([stage, description], index) => (
              <div className="row" key={stage}>
                <strong>{String(index + 1).padStart(2, "0")} · {stage}</strong>
                <span>{description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-section-heading">
            <div>
              <div className="kicker">Evidence discipline</div>
              <h2>Findings carry a visible basis.</h2>
            </div>
            <p className="copy">
              The engagement record distinguishes what was directly observed, what the client can document, what was
              only asserted, and what remains unresolved. This prevents preliminary statements from hardening into
              unsupported conclusions.
            </p>
          </div>
          <div className="grid-4">
            {evidenceRules.map(([label, description]) => (
              <article className="stat evidence-card" key={label}>
                <strong>{label}</strong>
                <span>{description}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container two">
          <div>
            <div className="kicker">Qualification gate</div>
            <h2>A serious engagement requires access and authority.</h2>
          </div>
          <div className="copy">
            <p>
              Before a proposal is issued, the engagement must have a named executive sponsor with decision authority,
              realistic access to the relevant system and documentation, a confirmed budget range, and a delivery
              timeline that permits defensible work. When those conditions are absent, the appropriate next step is a
              scoping conversation rather than a premature proposal.
            </p>
            <p>
              Fixed engagements are generally invoiced 50 percent at signature and 50 percent at delivery. Advisory is
              invoiced monthly in advance. On-site work, additional systems, higher-consequence actions, multi-
              jurisdiction scope, and extended implementation support are priced explicitly rather than absorbed through
              ambiguous scope.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="boundary-note services-boundary">
            <strong>Engagement boundary:</strong> Emotional Infrastructure™ services support governance analysis,
            control design, evidence architecture, implementation planning, and organizational capability. Crosswalks
            record preliminary implementation mappings and questions for counsel; they do not declare legal
            classifications or certify compliance. Training attestations document completion only. Client decisions
            remain attributable to the client authority who made them.
          </div>
        </div>
      </section>

      <section className="section services-cta-section">
        <div className="container">
          <div className="services-cta card">
            <div className="card-inner">
              <div>
                <div className="kicker">Start with the decision</div>
                <h2>What must your organization be able to see, stop, prove, or remedy?</h2>
                <p className="lead">
                  Send a brief description of the system, the affected users, and the governance decision you are trying
                  to make. The response will identify the appropriate service line or recommend a smaller scoping step.
                </p>
              </div>
              <div className="actions">
                <a className="btn primary" href={inquiryHref}>Email Brittany →</a>
                <Link className="btn secondary" href="/implementation">Review implementation work</Link>
                <Link className="btn secondary" href="/standards">View standards &amp; tools</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
