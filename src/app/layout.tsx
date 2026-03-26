import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AccessibilityModeSelector from "@/components/accessibility/AccessibilityModeSelector";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import ScrollToTop from "@/components/ui/ScrollToTop";
import PageRails from "@/components/ui/PageRails";
import CookieConsent from "@/components/ui/CookieConsent";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Innovative Academics Academy | Windhoek, Namibia",
    template: "%s | Innovative Academics Academy",
  },
  description:
    "IA Academy is a small-class Cambridge school in Windhoek specialising in students with ADHD, ADD, Dyslexia and learning differences. Grade R to Grade 12.",
  keywords: [
    "school Windhoek",
    "ADHD school Namibia",
    "dyslexia school Namibia",
    "Cambridge school Windhoek",
    "small class school Namibia",
    "learning difficulties school",
  ],
  openGraph: {
    type: "website",
    locale: "en_NA",
    siteName: "Innovative Academics Academy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh flex flex-col antialiased">
        {/* Skip to main content — first focusable element for keyboard/screen reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
          style={{ background: "var(--color-gold)", color: "var(--color-on-surface)" }}
        >
          Skip to main content
        </a>
        <Navbar />
        <PageRails />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <ScrollToTop />
        <AccessibilityModeSelector />
        <CookieConsent />
      </body>
    </html>
  );
}
