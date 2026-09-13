import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HeroImage } from "@/components/ui/HeroImage";
import { posts } from "@/lib/posts";
import { imageRegistry } from "@/lib/images";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "News and programme updates",
  description:
    "Ustawi Network news from SOTP graduations, prison partnerships, and expansion across Kenya — separate from evergreen resource guides.",
  path: "/blog/",
});

export default function BlogPage() {
  const heroImage = imageRegistry["sotp-workshop-session"];

  return (
    <div className="space-y-10 pb-14">
      <HeroImage imageSrc={heroImage.src} imageAlt={heroImage.alt} priority>
        <SectionHeader
          eyebrow="Updates and Insights"
          title="Stories from the work."
          description="Follow our journey from prison graduations to policy advocacy and community engagement."
          size="hero"
          dark
        />
      </HeroImage>

      <section className="mx-auto max-w-6xl space-y-6 px-6">
        <p className="rounded-2xl border border-[var(--color-neutral)] bg-white px-5 py-4 text-[var(--color-text-body)]">
          Looking for explainers and tools rather than news? Visit{" "}
          <Link
            href="/resources"
            className="font-semibold text-[var(--color-secondary)] underline"
          >
            Resources
          </Link>{" "}
          for SOTP guides, a glossary, and calculators.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post) => {
            const thumbnail =
              imageRegistry[post.headerImageKey ?? "sotp-workshop-session"];

            return (
              <article
                key={post.slug}
                className="rounded-2xl border border-[var(--color-neutral)] bg-white p-6 shadow-sm"
              >
                <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-xl">
                  <Image
                    src={thumbnail.src}
                    alt={thumbnail.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary-dark)]">
                  {post.date}
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-[var(--color-secondary)]">
                  {post.title}
                </h2>
                <p className="mt-3 text-[var(--color-text-body)]">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-secondary)] underline"
                >
                  Read story →
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
