"use client";

import { useState } from "react";

const filters = ["All", "Framework", "Specification", "Implementation", "Research"];

const artifacts = [
  {
    category: "Framework",
    label: "Authorization Boundary",
    title: "Authorization Boundary Framework",
    desc: "Defines where inference becomes influence and what consent, purpose limits, and traceability the crossing requires.",
    tags: ["Consent", "Influence", "Traceability"]
  },
  {
    category: "Specification",
    label: "EI-Spec",
    title: "Emotional Infrastructure Specification",
    desc: "Control language organizing risk classes, prohibited behaviors, audit requirements, user rights, and cessation thresholds.",
    tags: ["Risk tiers", "Rights", "Audit"]
  },
  {
    category: "Framework",
    label: "Trajectory Governance",
    title: "Trajectory Governance Model",
    desc: "Reframes safety as a longitudinal property: cumulative influence, authority formation, contestability, and proportionality.",
    tags: ["Longitudinal", "Agency", "Legitimacy"]
  },
  {
    category: "Implementation",
    label: "EIT v1.2",
    title: "EIT Full-Stack Reference Implementation",
    desc: "Schemas, API, tests, docs, diagrams, Docker, and certification materials. Recorded test result: 20 passed across 75 files.",
    tags: ["Schemas", "API", "Docker"]
  },
  {
    category: "Research",
    label: "EIS SDK",
    title: "Emotional Infrastructure SDK Materials",
    desc: "Developer-facing materials for instrumenting decision bases, notices, and contestability into adaptive systems.",
    tags: ["SDK", "Instrumentation", "Notices"]
  },
  {
    category: "Research",
    label: "LIL · TAR · PDEV",
    title: "Longitudinal Method Instruments",
    desc: "Working methods for tracking influence accumulation, reconstructing adaptive decision bases, and distinguishing support from dependency.",
    tags: ["Method", "Trajectory", "Audit"]
  }
];

export default function ArtifactsPage() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? artifacts : artifacts.filter((a) => a.category === active);

  return (
    <main id="main">
      <section className="page-title">
        <div className="container">
          <div className="kicker">Artifact library</div>
          <h1>The portfolio, organized for review.</h1>
          <p className="lead">
            Frameworks, specifications, implementation packages, and research instruments, each prepared as a
            review-ready artifact with a defined claim boundary.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filterbar">
            {filters.map((f) => (
              <button
                key={f}
                className={active === f ? "active" : ""}
                onClick={() => setActive(f)}
                type="button"
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid-3">
            {shown.map((a) => (
              <article className="project" key={a.title}>
                <div className="label">{a.label}</div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <div className="tags">
                  {a.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="note">
            Access to full artifacts is provided for review, critique, and collaboration. Materials are not described as
            externally certified or production-proven without separate evidence.
          </p>
        </div>
      </section>
    </main>
  );
}
