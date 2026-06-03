import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { homePillars } from "@/lib/content";
import { imageRegistry } from "@/lib/images";

export function ApproachPillars() {
  const featureImage = imageRegistry["official-community-engagement"];

  return (
    <section className="bg-[var(--color-background)] py-16">
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <SectionHeader
          eyebrow="Our Approach"
          title="We believe in accountability WITH support. Justice WITH compassion. Safety WITH dignity."
          description="Our model combines restorative justice, psychosocial rehabilitation, and community-centered reintegration."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-5">
            {homePillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className={`rounded-2xl border border-[var(--color-neutral)] p-6 shadow-sm ${
                  index % 2 === 0
                    ? "bg-white"
                    : "bg-[var(--color-secondary)] text-white"
                }`}
              >
                <span className="mb-3 inline-flex rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs font-bold text-[var(--color-secondary)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3
                  className={`text-xl font-bold ${
                    index % 2 === 0 ? "text-[var(--color-secondary)]" : "text-white"
                  }`}
                >
                  {pillar.title}
                </h3>
                <p
                  className={`mt-2 ${
                    index % 2 === 0 ? "text-[var(--color-text-body)]" : "text-white/90"
                  }`}
                >
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>

          <figure className="self-start overflow-hidden rounded-2xl border border-[var(--color-neutral)] bg-white shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src={featureImage.src}
                alt={featureImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <figcaption className="px-4 py-3 text-sm text-[var(--color-text-body)]">
              {featureImage.caption}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
