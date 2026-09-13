import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/content";
import { organizationJsonLd } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Ustawi Network | Prison Rehabilitation in Kenya",
    template: "%s | Ustawi Network",
  },
  description:
    "Building accountability, dignity, and safer communities through structured prison rehabilitation and reintegration programmes in Kenya, including SOTP.",
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Ustawi Network | Prison Rehabilitation in Kenya",
    description:
      "Transformation is possible. Redemption is real. Communities can heal.",
    url: siteConfig.siteUrl,
    siteName: "Ustawi Network",
    locale: "en_KE",
    type: "website",
    images: ["/images/hero-tournament-banner.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ustawi Network | Prison Rehabilitation in Kenya",
    description:
      "Transformation is possible. Redemption is real. Communities can heal.",
    images: ["/images/hero-tournament-banner.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} overflow-x-hidden antialiased`}>
      <body className="flex min-h-screen flex-col overflow-x-hidden">
        <JsonLd data={organizationJsonLd()} />
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
