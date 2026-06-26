import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { posts } from "@/lib/posts";
import { imageRegistry } from "@/lib/images";
import { MediaLinks } from "@/components/ui/MediaLinks";

type Params = {
  slug: string;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = posts.find((item) => item.slug === resolvedParams.slug);
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const resolvedParams = await params;
  const post = posts.find((item) => item.slug === resolvedParams.slug);
  if (!post) notFound();

  const headerImage =
    imageRegistry[post.headerImageKey ?? "graduation-certificate-group"];

  return (
    <article className="mx-auto max-w-3xl space-y-6 px-6 py-16">
      <Link
        href="/blog"
        className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-secondary)] underline"
      >
        ← Back to Blog
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
        {post.date}
      </p>
      <h1 className="text-3xl font-extrabold tracking-tight text-[var(--color-secondary)] md:text-4xl">
        {post.title}
      </h1>
      <p className="text-lg text-[var(--color-text-body)]">{post.excerpt}</p>
      <div className="space-y-6 border-t border-[var(--color-neutral)] pt-6 text-lg leading-relaxed text-[var(--color-text-body)]">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {post.showMedia ? <MediaLinks /> : null}
    </article>
  );
}
