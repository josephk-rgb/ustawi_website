import Image from "next/image";
import Link from "next/link";
import { ResourceCta } from "@/components/resources/ResourceCta";
import { RichText } from "@/components/resources/RichText";
import type { Guide } from "@/lib/guides";
import { getGuide } from "@/lib/guides";
import { getTool } from "@/lib/tools";
import { imageRegistry } from "@/lib/images";

export function GuideArticle({ guide }: { guide: Guide }) {
  const headerImage = imageRegistry[guide.headerImageKey];
  const relatedGuides = guide.relatedGuideSlugs
    .map((slug) => getGuide(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const relatedTools = guide.relatedToolSlugs
    .map((slug) => getTool(slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <article className="mx-auto max-w-3xl space-y-8 px-6 py-16">
      <Link
        href="/resources"
        className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-secondary)] underline"
      >
        ← Back to Resources
      </Link>
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--color-neutral)]">
        <Image
          src={headerImage.src}
          alt={headerImage.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
      <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary-dark)]">
        {guide.category} · {guide.date}
      </p>
      <h1 className="text-3xl font-extrabold tracking-tight text-[var(--color-secondary)] md:text-4xl">
        {guide.title}
      </h1>
      <p className="text-lg text-[var(--color-text-body)]">{guide.excerpt}</p>

      <div className="space-y-10 border-t border-[var(--color-neutral)] pt-8">
        {guide.sections.map((section) => (
          <section key={section.heading} className="space-y-4">
            <h2 className="text-2xl font-extrabold text-[var(--color-secondary)]">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-lg leading-relaxed text-[var(--color-text-body)]"
              >
                <RichText text={paragraph} />
              </p>
            ))}
            {section.bullets ? (
              <ul className="space-y-2 pl-1 text-[var(--color-text-body)]">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                    <span className="text-lg leading-relaxed">
                      <RichText text={bullet} />
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      {guide.faq.length ? (
        <section className="space-y-3">
          <h2 className="text-2xl font-extrabold text-[var(--color-secondary)]">
            Questions people ask
          </h2>
          {guide.faq.map((item) => (
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

      {relatedGuides.length || relatedTools.length ? (
        <section className="space-y-3">
          <h2 className="text-2xl font-extrabold text-[var(--color-secondary)]">
            Keep reading
          </h2>
          <ul className="space-y-2">
            {relatedGuides.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/resources/guides/${item.slug}`}
                  className="font-semibold text-[var(--color-secondary)] underline"
                >
                  {item.title}
                </Link>
              </li>
            ))}
            {relatedTools.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/resources/tools/${item.slug}`}
                  className="font-semibold text-[var(--color-secondary)] underline"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <ResourceCta />
    </article>
  );
}
