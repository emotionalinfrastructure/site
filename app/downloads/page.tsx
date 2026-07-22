import type { Metadata } from "next";
import ReleaseStatus from "@/components/ReleaseStatus";
import { tierADownloads } from "@/lib/downloads";

export const metadata: Metadata = {
  title: "Downloads | Emotional Infrastructure",
  description:
    "Tier A public-safe review library for the Emotional Infrastructure portfolio. Every file is hash-checked and mapped from the Master Release Package 8.6 ledger."
};

function formatSize(bytes: number) {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

export default function DownloadsPage() {
  return (
    <main id="main">
      <section className="page-title">
        <div className="container">
          <div className="kicker">Tier A public-safe review library</div>
          <h1>Downloads.</h1>
          <p className="lead">
            This download library is corrected for controlled public staging. It lists Tier A materials only, and
            every listed item resolves to a hash-checked artifact hosted on this site. Tier A means the file may be
            listed publicly as a review-ready artifact when the surrounding page makes clear that Emotional
            Infrastructure is candidate-level and not externally certified, adopted, legally validated, or
            production-certified.
          </p>
          <p className="note">
            Restricted materials are intentionally excluded from this page. Supporting review materials,
            commercial-review materials, private technical source packages, raw logs, archives, superseded drafts,
            and attorney-review materials are not mixed into this library.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pathway">
            {tierADownloads.map((d) => (
              <div className="download" key={d.ledgerId}>
                <div className="label">
                  {d.ledgerId} · {d.section}
                </div>
                <a href={`/downloads/${d.file}`} download>
                  {d.title}
                </a>
                <p>Controlled review-ready · {formatSize(d.sizeBytes)}</p>
                <small style={{ overflowWrap: "anywhere" }}>SHA-256 {d.sha256}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="kicker">Download control rule</div>
          <p className="copy" style={{ maxWidth: 900 }}>
            Every public download retains its status label. If a file is edited, corrected, renamed, or replaced,
            the new file receives a new version marker and a new SHA-256 hash. No public file is silently
            overwritten, because silent replacement breaks release integrity and makes later review unreliable.
          </p>
        </div>
      </section>

      <ReleaseStatus pkg="8.6" />
    </main>
  );
}
