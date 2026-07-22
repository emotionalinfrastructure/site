import type { Metadata } from "next";
import ReleaseStatus from "@/components/ReleaseStatus";

export const metadata: Metadata = {
  title: "Policy | Emotional Infrastructure",
  description:
    "How consent, classification, retention, deletion, user rights, redress, auditability, and accountability obligations operate in a governed AI interaction environment."
};

const coverage = [
  {
    area: "Consent and user control",
    fn: "Defines authorization, withdrawal, scope limits, and user-facing control expectations."
  },
  {
    area: "Classification and sensitivity",
    fn: "Defines emotional data types, sensitivity levels, and handling requirements."
  },
  {
    area: "Risk and escalation",
    fn: "Defines how risk signals are detected, reviewed, escalated, and bounded."
  },
  {
    area: "Retention and deletion",
    fn: "Defines lifecycle requirements, deletion verification, and derived-record handling."
  },
  {
    area: "User rights and redress",
    fn: "Defines access, correction, restriction, deletion, challenge, review, and remedy mechanisms."
  }
];

export default function PolicyPage() {
  return (
    <main id="main">
      <section className="page-title">
        <div className="container">
          <div className="kicker">Policy</div>
          <h1>Obligations designed to be enforceable.</h1>
          <p className="lead">
            The Policy section translates Emotional Infrastructure into institutional obligations. It defines how
            consent, emotional data classification, sensitivity handling, risk escalation, retention, deletion,
            user rights, redress, auditability, public accountability, and third-party responsibility should
            operate in a governed AI interaction environment.
          </p>
          <p className="note">
            The policy materials are designed to be enforceable rather than merely aspirational. A policy
            requirement should map to a technical control, public disclosure, audit record, readiness test,
            incident pathway, or revenue restriction. When a policy cannot be tested, logged, reviewed, or
            enforced, it remains incomplete.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">Policy coverage</div>
          <div className="pathway">
            {coverage.map((c) => (
              <div className="row" key={c.area}>
                <strong>{c.area}</strong>
                <span>{c.fn}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="kicker">Policy claim boundary</div>
          <p className="copy" style={{ maxWidth: 900 }}>
            The accurate claim is that the package contains governance policies and enforceable policy logic. The
            restricted claim is that those policies alone guarantee compliance with any specific legal regime.
            Legal compliance claims require jurisdiction-specific mapping and qualified legal review.
          </p>
        </div>
      </section>

      <ReleaseStatus />
    </main>
  );
}
