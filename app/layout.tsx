import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteOrigin = process.env.PAGES_CUSTOM_DOMAIN
  ? `https://${process.env.PAGES_CUSTOM_DOMAIN}`
  : "https://emotionalinfrastructure.github.io/site";

export const metadata: Metadata = {
  title: "Brittany Wright | Emotional Infrastructure",
  description: "Master landing page for Brittany Wright's Emotional Infrastructure AI governance, cybersecurity, standards, SDK, and reference implementation portfolio.",
  metadataBase: new URL(siteOrigin),
  openGraph: {
    title: "Brittany Wright | Emotional Infrastructure",
    description: "Infrastructure for the human-impact layer of AI: governance frameworks, technical specifications, audit models, and implementation-ready artifacts.",
    url: "https://emotionalinfrastructure.github.io/site",
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
