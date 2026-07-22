export default function ReleaseStatus({ pkg = "8.5" }: { pkg?: string }) {
  return (
    <section className="section alt">
      <div className="container">
        <div className="kicker">Release status</div>
        <p className="copy" style={{ maxWidth: 900 }}>
          This page belongs to Emotional Infrastructure Master Release Package {pkg}, version 0.1.0, dated
          2026-05-02. The language is approved for controlled public portfolio staging because it describes the
          work as candidate-level, review-ready, and development-oriented. It does not claim external
          certification, legal validation, production deployment, formal standards-body adoption, regulatory
          approval, or peer-reviewed acceptance.
        </p>
      </div>
    </section>
  );
}
