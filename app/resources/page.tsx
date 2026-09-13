import Link from "next/link";
import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HeroImage } from "@/components/ui/HeroImage";
import { ResourceCta } from "@/components/resources/ResourceCta";
import { guides } from "@/lib/guides";
import { imageRegistry } from "@/lib/images";
import { buildPageMetadata } from "@/lib/seo";
import { tools } from "@/lib/tools";

export const metadata: Metadata = buildPageMetadata({
  title: "Resources for prison rehabilitation in Kenya",
  description:
    "Guides and free tools on SOTP, reintegration, restorative justice, and CSR — written for families, donors, and partners in Kenya.",
  path: "/resources/",
});

export default function ResourcesPage() {
  const heroImage = imageRegistry["sotp-workshop-session"];

  return (
    <div className="space-y-14 pb-14">
      <HeroImage imageSrc={heroImage.src} imageAlt={heroImage.alt} priority>
        <SectionHeader
          eyebrow="Resources"
          title="Guides and tools for safer re-entry."
          description="Evergreen explainers and practical tools — separate from news updates — for families, officers, donors, and corporate partners."
          size="hero"
          dark
        />
      </HeroImage>

      <section className="mx-auto max-w-6xl space-y-6 px-6">
        <SectionHeader
          eyebrow="Guides"
          title="Read before you fund, visit, or welcome someone home."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="rounded-2xl border border-[var(--color-neutral)] bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary-dark)]">
                {guide.category}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-[var(--color-secondary)]">
                {guide.title}
              </h2>
              <p className="mt-3 text-[var(--color-text-body)]">{guide.excerpt}</p>
              <Link
                href={`/resources/guides/${guide.slug}`}
                className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-secondary)] underline"
              >
                Read guide →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-6">
        <SectionHeader
          eyebrow="Tools"
          title="Calculators and checklists you can use today."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {tools.map((tool) => (
            <article
              key={tool.slug}
              className="rounded-2xl border border-[var(--color-neutral)] bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary-dark)]">
                {tool.eyebrow}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-[var(--color-secondary)]">
                {tool.title}
              </h2>
              <p className="mt-3 text-[var(--color-text-body)]">{tool.excerpt}</p>
              <Link
                href={`/resources/tools/${tool.slug}`}
                className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-secondary)] underline"
              >
                Open tool →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <ResourceCta />
      </section>
    </div>
  );
}
