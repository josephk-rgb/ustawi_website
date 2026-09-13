import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { ResourceCta } from "@/components/resources/ResourceCta";
import { CsrPlanner } from "@/components/tools/CsrPlanner";
import { DonationCalculator } from "@/components/tools/DonationCalculator";
import { GlossarySearch } from "@/components/tools/GlossarySearch";
import { ReintegrationChecklist } from "@/components/tools/ReintegrationChecklist";
import { getGuide } from "@/lib/guides";
import { imageRegistry } from "@/lib/images";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  faqJsonLd,
  webApplicationJsonLd,
} from "@/lib/seo";
import { getTool, tools, type ToolSlug } from "@/lib/tools";

type Params = {
  slug: string;
};

const toolViews: Record<ToolSlug, ReactNode> = {
  glossary: <GlossarySearch />,
  "donation-impact": <DonationCalculator />,
  "family-reintegration-checklist": <ReintegrationChecklist />,
  "csr-partnership-planner": <CsrPlanner />,
};

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) {
    return { title: "Tool not found" };
  }

  return buildPageMetadata({
    title: tool.title,
    description: tool.metaDescription,
    path: `/resources/tools/${tool.slug}/`,
    image: imageRegistry[tool.headerImageKey]?.src,
  });
}

export default async function ToolPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const relatedGuides = tool.relatedGuideSlugs
    .map((guideSlug) => getGuide(guideSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <>
      <JsonLd
        data={[
          webApplicationJsonLd({
            name: tool.title,
            description: tool.metaDescription,
            path: `/resources/tools/${tool.slug}/`,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources/" },
            { name: tool.title, path: `/resources/tools/${tool.slug}/` },
          ]),
          faqJsonLd(tool.faq),
        ]}
      />
      <article className="mx-auto max-w-3xl space-y-8 px-6 py-16">
        <Link
          href="/resources"
          className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-secondary)] underline"
        >
          ← Back to Resources
        </Link>
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary-dark)]">
          {tool.eyebrow}
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-[var(--color-secondary)] md:text-4xl">
          {tool.title}
        </h1>
        <p className="text-lg text-[var(--color-text-body)]">{tool.excerpt}</p>
        {toolViews[tool.slug]}
        {tool.faq.length ? (
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-[var(--color-secondary)]">
              Questions people ask
            </h2>
            {tool.faq.map((item) => (
              <details
                key={item.question}
                className="rounded-2xl border border-[var(--color-neutral)] bg-white px-5 py-4"
              >
                <summary className="cursor-pointer text-lg font-semibold text-[var(--color-secondary)]">
                  {item.question}
                </summary>
                <p className="mt-3 leading-relaxed text-[var(--color-text-body)]">
                  {item.answer}
                </p>
              </details>
            ))}
          </section>
        ) : null}
        {relatedGuides.length ? (
          <section className="space-y-3">
            <h2 className="text-2xl font-extrabold text-[var(--color-secondary)]">
              Related guides
            </h2>
            <ul className="space-y-2">
              {relatedGuides.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={`/resources/guides/${guide.slug}`}
                    className="font-semibold text-[var(--color-secondary)] underline"
                  >
                    {guide.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        <ResourceCta />
      </article>
    </>
  );
}
