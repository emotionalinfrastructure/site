import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteOrigin = "https://emotionalinfrastructure.org";

export const metadata: Metadata = {
  title: "Brittany Wright | Emotional Infrastructure",
  description:
    "Governance architecture, technical specifications, audit models, and implementation tools for AI-mediated trust environments.",
  metadataBase: new URL(siteOrigin),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Brittany Wright | Emotional Infrastructure",
    description:
      "Governance infrastructure for AI-mediated trust: disclosure, consent, auditability, human review, and longitudinal accountability.",
    url: siteOrigin,
    siteName: "Emotional Infrastructure",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
