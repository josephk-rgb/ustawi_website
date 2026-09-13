import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { GuideArticle } from "@/components/guides/GuideArticle";
import { JsonLd } from "@/components/seo/JsonLd";
import { getGuide, guides } from "@/lib/guides";
import { imageRegistry } from "@/lib/images";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  buildPageMetadata,
  faqJsonLd,
} from "@/lib/seo";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) {
    return { title: "Guide not found" };
  }

  const image = imageRegistry[guide.headerImageKey]?.src;

  return buildPageMetadata({
    title: guide.title,
    description: guide.metaDescription,
    path: `/resources/guides/${guide.slug}/`,
    image,
    type: "article",
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const image = imageRegistry[guide.headerImageKey]?.src;

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            title: guide.title,
            description: guide.metaDescription,
            path: `/resources/guides/${guide.slug}/`,
            date: guide.date,
            image,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources/" },
            { name: guide.title, path: `/resources/guides/${guide.slug}/` },
          ]),
          faqJsonLd(guide.faq),
        ]}
      />
      <GuideArticle guide={guide} />
    </>
  );
}
