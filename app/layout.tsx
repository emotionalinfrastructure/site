import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Emotional Infrastructure | AI Governance for Human Trust",
  description: "Emotional Infrastructure is a governance framework for AI-mediated emotional conditions, behavioral systems, digital trust, and ethical creator infrastructure.",
  metadataBase: new URL("https://emotionalinfrastructure.org"),
  openGraph: {
    title: "Emotional Infrastructure",
    description: "AI does not merely generate content. It generates emotional conditions.",
    url: "https://emotionalinfrastructure.org",
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
