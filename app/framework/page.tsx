import type { Metadata } from "next";
import ReleaseStatus from "@/components/ReleaseStatus";

export const metadata: Metadata = {
  title: "Framework | Emotional Infrastructure",
  description:
    "A plain-language explanation of the governance gap created by longitudinal AI interaction and the controlled pipeline Emotional Infrastructure uses to address it."
};

const pipeline = [
  {
    stage: "Consent scope",
    question: "Is this processing authorized, bounded, and understandable to the user or institution?"
  },
  {
    stage: "Longitudinal interaction logging",
    question:
      "What governed event occurred, and what context is necessary for accountability without over-collection?"
  },
  {
    stage: "Trajectory analysis and response",
    question: "What authorized pattern is being evaluated, under which rule, and with what limits?"
  },
  {
    stage: "Personal development and intervention",
    question: "What response is permitted, proportionate, non-manipulative, and reviewable?"
  },
  {
    stage: "Audit record",
    question: "What evidence proves that the system behaved within its declared boundaries?"
  }
];

export default function FrameworkPage() {
  return (
    <main id="main">
      <section className="page-title">
        <div className="container">
          <div className="kicker">Framework</div>
          <h1>Governance for interaction that accumulates.</h1>
          <p className="lead">
            Emotional Infrastructure addresses the governance gap created when AI systems interact with people
            repeatedly over time. In a single interaction, governance may focus on the prompt, output, safety
            filter, disclosure, or immediate user action. In a longitudinal interaction, governance must also
            account for accumulated records, adaptive system behavior, changing user reliance, institutional
            context, derived signals, intervention triggers, and downstream accountability.
          </p>
          <p className="note">
            The system organizes this problem into a controlled pipeline. Consent defines whether a longitudinal
            process is allowed. Logging defines what happened and under what authority. Trajectory analysis defines
            whether authorized patterns may be evaluated. Intervention governance defines what the system may do in
            response. Audit records preserve the evidence chain required for review, correction, oversight, and
            accountability.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">Core pipeline</div>
          <div className="pathway">
            {pipeline.map((p, i) => (
              <div className="row" key={p.stage}>
                <strong>
                  {i + 1}. {p.stage}
                </strong>
                <span>{p.question}</span>
              </div>
            ))}
          </div>
          <p className="note">
            This framework is not a clinical diagnostic system, not a behavioral targeting engine, and not an
            advertising optimization layer. It is a governance architecture for accountability where emotionally
            significant interaction records and system responses must be constrained, explained, reviewed, and
            maintained.
          </p>
        </div>
      </section>

      <ReleaseStatus />
    </main>
  );
}
