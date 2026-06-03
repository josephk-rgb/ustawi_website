import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/content";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Ustawi Network",
    template: "%s | Ustawi Network",
  },
  description:
    "Building accountability, dignity, and safer communities through structured rehabilitation and reintegration programmes in Kenya.",
  openGraph: {
    title: "Ustawi Network",
    description:
      "Transformation is possible. Redemption is real. Communities can heal.",
    url: siteConfig.siteUrl,
    siteName: "Ustawi Network",
    locale: "en_KE",
    type: "website",
    images: ["/images/hero-tournament-banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
      {process.env.NEXT_PUBLIC_GA_ID ? (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      ) : null}
    </html>
  );
}
