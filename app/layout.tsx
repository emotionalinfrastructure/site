import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteOrigin = "https://emotionalinfrastructure.org";

export const metadata: Metadata = {
  title: "Brittany Wright | Emotional Infrastructure",
  description:
    "Governance framework, research materials, technical specifications, audit models, and implementation tools for AI-mediated trust environments.",
  metadataBase: new URL(siteOrigin),
  openGraph: {
    title: "Brittany Wright | Emotional Infrastructure",
    description:
      "Governance tools for AI-mediated trust: disclosure, consent, auditability, human review, and longitudinal accountability.",
    url: siteOrigin,
    siteName: "Emotional Infrastructure",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Emotional Infrastructure",
            "url": siteOrigin,
            "founder": {
              "@type": "Person",
              "name": "Brittany Wright"
            },
            "description": "Governance framework for AI-mediated trust environments, including disclosure, consent, human review, auditability, contestability, and longitudinal accountability. Public materials are presented for review and development; no institutional appointment, sponsorship, endorsement, or adoption is asserted."
          })}
        </script>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
