import type { Metadata } from "next";
import { siteConfig } from "@/lib/content";

export const defaultOgImage = "/images/hero-tournament-banner.webp";

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") {
    return `${siteConfig.siteUrl}/`;
  }
  const isFile = /\.[a-z0-9]+$/i.test(normalized);
  if (isFile) {
    return `${siteConfig.siteUrl}${normalized}`;
  }
  return `${siteConfig.siteUrl}${normalized.endsWith("/") ? normalized : `${normalized}/`}`;
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
};

export function buildPageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  type = "website",
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_KE",
      type,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: siteConfig.name,
    url: absoluteUrl("/"),
    email: siteConfig.email,
    telephone: siteConfig.phonePrimary,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kisumu County",
      addressCountry: "KE",
    },
    sameAs: [siteConfig.linkedIn, siteConfig.twitter, siteConfig.facebook],
    description:
      "Kenyan nonprofit delivering structured prison rehabilitation and reintegration programmes, including the Sex Offender Treatment Programme (SOTP).",
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  date,
  image,
}: {
  title: string;
  description: string;
  path: string;
  date: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    mainEntityOfPage: absoluteUrl(path),
    image: absoluteUrl(image ?? defaultOgImage),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: absoluteUrl("/"),
    },
  };
}

export function faqJsonLd(faq: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function webApplicationJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: absoluteUrl(path),
    applicationCategory: "EducationalApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KES",
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}
