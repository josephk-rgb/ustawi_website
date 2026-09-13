import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { posts } from "@/lib/posts";
import { absoluteUrl } from "@/lib/seo";
import { tools } from "@/lib/tools";

export const dynamic = "force-static";

const staticPaths = [
  "/",
  "/about/",
  "/programs/",
  "/programs/sotp/",
  "/impact/",
  "/moments/",
  "/get-involved/",
  "/blog/",
  "/contact/",
  "/resources/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = staticPaths.map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.includes("programs") || path === "/resources/" ? 0.9 : 0.7,
  })) satisfies MetadataRoute.Sitemap;

  const guideEntries = guides.map((guide) => ({
    url: absoluteUrl(`/resources/guides/${guide.slug}/`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const toolEntries = tools.map((tool) => ({
    url: absoluteUrl(`/resources/tools/${tool.slug}/`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const postEntries = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}/`),
    lastModified,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...guideEntries, ...toolEntries, ...postEntries];
}
