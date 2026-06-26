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

        <figure className="group relative overflow-hidden rounded-2xl shadow-md">
          <div className="relative aspect-[16/9] min-h-[180px] md:aspect-[21/9] md:min-h-0">
            <Image
              src={featureImage.src}
              alt={featureImage.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="100vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)]/80 via-[var(--color-secondary)]/20 to-transparent" />
          </div>
          <figcaption className="absolute bottom-0 left-0 right-0 px-6 py-5 text-sm font-medium text-white/90">
            {featureImage.caption}
          </figcaption>
        </figure>

        <div className="grid gap-5 sm:grid-cols-2">
          {homePillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="relative overflow-hidden rounded-2xl border border-[var(--color-neutral)] border-l-4 border-l-[var(--color-primary)] bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-4 select-none text-7xl font-black leading-none text-[var(--color-secondary)]/[0.06]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary-dark)]">
                Pillar {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-xl font-bold text-[var(--color-secondary)]">
                {pillar.title}
              </h3>
              <p className="mt-2 leading-relaxed text-[var(--color-text-body)]">
                {pillar.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
