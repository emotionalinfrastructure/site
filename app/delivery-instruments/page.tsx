import type { Metadata } from "next";
import Link from "next/link";
import {
  deliveryRegister,
  instrumentName,
  registerFile,
  registerFileBytes,
  registerFileSha256,
  structureOnlyIds,
  structureOnlyNote
} from "@/lib/delivery-instruments";

const email = "brittanywright@emotionalinfrastructure.org";

export const metadata: Metadata = {
  title: "Delivery Instrument Register | Emotional Infrastructure",
  description:
    "The recorded inventory of the 220 templates, registers, matrices, schemas, and curricula that Emotional Infrastructure™ engagements are delivered with, mapped to each service line.",
  alternates: { canonical: "https://emotionalinfrastructure.org/delivery-instruments/" }
};

const { assetCount, registerVersion, recordedOn, formats, phases, workstreams } = deliveryRegister;

const documentCount = formats.find((f) => f.format === "DOCX")?.count ?? 0;
const workbookCount = formats.find((f) => f.format === "XLSX")?.count ?? 0;

const phaseMeaning: Record<string, string> = {
  Sellable: "Required before an engagement can be scoped, qualified, quoted, or contracted.",
  "Delivery-ready": "Used inside an executed engagement to produce the client-held deliverables.",
  "Pilot-ready": "Used when a client moves from design into a bounded implementation or pilot.",
  "Scale-ready": "Used when a control set is extended across additional systems, teams, or cycles."
};

function formatSize(bytes: number) {
  return `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

export default function DeliveryInstrumentsPage() {
  const inquiryHref = `mailto:${email}?subject=${encodeURIComponent("Delivery instrument register")}`;

  return (
    <main id="main">
      <section className="page-title">
        <div className="container">
          <div className="kicker">Delivery instrument register {registerVersion}</div>
          <h1>What an engagement is actually delivered with.</h1>
          <p className="lead">
            Every Emotional Infrastructure™ service line is delivered using a fixed set of versioned instruments:
            intake forms, evidence registers, scoring models, control structures, schemas, curricula, and executive
            outputs. This register records all {assetCount} of them, mapped to the service line and delivery stage
            where each one is used, so a prospective client can see the working method before signing anything.
          </p>
          <div className="boundary-note" style={{ maxWidth: 860, marginTop: 26 }}>
            <strong>What these instruments are:</strong> they supply structure, not findings. An instrument defines
            the fields, control questions, evidence references, and scoring logic that a stage of the engagement has
            to produce — and it is populated during that engagement, against the executed scope, from the client&rsquo;s
            own evidence and from current authoritative sources. A register that arrived pre-filled would be
            asserting conclusions about a system nobody had looked at yet.
          </div>
          <p className="note">
            Recorded {recordedOn}. The register lists instruments; it does not publish them. Several require qualified
            legal or specialist review before external use.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-4">
            <article className="stat">
              <strong>{assetCount}</strong>
              <span>Recorded delivery instruments across six workstreams</span>
            </article>
            <article className="stat">
              <strong className="blue">{workbookCount}</strong>
              <span>Workbooks: registers, matrices, scoring models, and trackers</span>
            </article>
            <article className="stat">
              <strong className="gold">{documentCount}</strong>
              <span>Documents: standards, protocols, memoranda, and reports</span>
            </article>
            <article className="stat">
              <strong className="green">{phases.length}</strong>
              <span>Delivery stages, from qualification through scaled operation</span>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container two">
          <div>
            <div className="kicker">How to read the register</div>
            <h2>Each instrument carries a stage.</h2>
            <p className="lead">
              Stage tells you when an instrument is used, not how important it is. An engagement never uses the whole
              library; it uses the instruments the scope, consequence profile, and available evidence call for.
            </p>
          </div>
          <div className="pathway">
            {phases.map(({ phase, count }) => (
              <div className="row" key={phase}>
                <strong>
                  {phase} · {count}
                </strong>
                <span>{phaseMeaning[phase] ?? "Used at the corresponding stage of delivery."}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {workstreams.map((ws) => (
        <section className="section" id={ws.slug} key={ws.slug}>
          <div className="container">
            <div className="kicker">
              {ws.number} · {ws.name}
            </div>
            <h2 style={{ maxWidth: 920, marginBottom: 14 }}>{ws.service}</h2>
            <p className="copy" style={{ maxWidth: 900, marginBottom: 26 }}>
              {ws.assetCount} recorded instruments across {ws.categories.length}{" "}
              {ws.categories.length === 1 ? "stage" : "stages"} of this workstream:{" "}
              {ws.categories.map((c) => c.name).join(", ")}.
            </p>

            {ws.slug === "regulatory-crosswalk" && (
              <p className="note" style={{ maxWidth: 900, marginTop: 0, marginBottom: 26 }}>
                The framework modules below are mapping registers, not cached copies of the frameworks themselves.
                Each supplies the clause structure, response fields, and evidence references for its framework;
                requirement text is drawn from the current authoritative source when the crosswalk is scoped, because
                regulatory and standards material moves and a stale local copy would be worse than none. Five of these
                instruments are published here under corrected names — the manifest names implied that the requirement
                text ships with the instrument. The original manifest names are retained in the register file.
              </p>
            )}

            {ws.categories.map((category) => (
              <details key={`${ws.slug}-${category.name}`} style={{ marginBottom: 12 }}>
                <summary
                  style={{
                    cursor: "pointer",
                    padding: "16px",
                    border: "1px solid var(--line)",
                    background: "var(--panel2)",
                    borderRadius: 12,
                    color: "var(--navy)",
                    fontWeight: 700
                  }}
                >
                  {category.name} — {category.assets.length} instruments
                </summary>
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Instrument</th>
                      <th>Format</th>
                      <th>Purpose</th>
                      <th>Stage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.assets.map((asset) => (
                      <tr key={asset.id}>
                        <td>{asset.id}</td>
                        <td>
                          <strong style={{ color: "var(--navy)" }}>{instrumentName(asset.id, asset.name)}</strong>
                          <br />
                          <small style={{ color: "var(--muted)" }}>{asset.type}</small>
                          {structureOnlyIds.includes(asset.id) && (
                            <>
                              <br />
                              <small style={{ color: "var(--gold)" }}>{structureOnlyNote}</small>
                            </>
                          )}
                        </td>
                        <td>{asset.format}</td>
                        <td>{asset.purpose}</td>
                        <td>{asset.phase}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </details>
            ))}
          </div>
        </section>
      ))}

      <section className="section alt">
        <div className="container">
          <div className="kicker">Register file</div>
          <h2 style={{ maxWidth: 880, marginBottom: 26 }}>Download the register.</h2>
          <div className="download" style={{ maxWidth: 720 }}>
            <div className="label">Delivery instrument register · {registerVersion}</div>
            <a href={`/services/${registerFile}`} download>
              Emotional Infrastructure™ Delivery Instrument Register (CSV)
            </a>
            <p>
              Inventory ID, workstream, stage, instrument name, original manifest name where the register corrects it,
              type, format, purpose, review requirement, and register note for all {assetCount} instruments ·{" "}
              {formatSize(registerFileBytes)}
            </p>
            <small style={{ overflowWrap: "anywhere" }}>SHA-256 {registerFileSha256}</small>
          </div>
          <p className="note">
            This file follows the same control rule as the{" "}
            <Link href="/downloads" style={{ color: "var(--cyan)" }}>
              Tier A download library
            </Link>
            : a corrected or extended register is published under a new version marker and a new SHA-256 rather than
            silently replacing this one.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="boundary-note" style={{ maxWidth: 980 }}>
            <strong>Controlled-use boundary:</strong> These instruments are implementation-ready base templates, not
            completed client findings, legal instruments, or evidence of any organization&rsquo;s governance posture.
            Each one is completed against the executed scope using current evidence, named owners, and approved
            sources. Legal documents, legal interpretations, regulated-sector requirements, security claims,
            accessibility claims, and certification language require qualified specialist review. Regulatory crosswalk
            instruments are populated from current authoritative sources at the start of each engagement. No
            instrument represents legal advice, regulatory certification, conformity assessment, audit opinion,
            penetration test, or a guarantee of compliance or outcome.
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="card">
            <div className="card-inner">
              <div className="kicker">Next step</div>
              <h2 style={{ maxWidth: 820 }}>Ask which instruments your engagement would actually use.</h2>
              <p className="lead">
                Describe the system, the affected users, and the governance decision in front of you. The response
                identifies the service line, the instruments that scope calls for, and the evidence you would need to
                make available.
              </p>
              <div className="actions">
                <a className="btn primary" href={inquiryHref}>
                  Email Brittany →
                </a>
                <Link className="btn secondary" href="/services">
                  Review service lines
                </Link>
                <Link className="btn secondary" href="/governance-register">
                  Governance register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
