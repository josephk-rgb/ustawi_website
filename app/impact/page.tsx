import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PrisonTimeline } from "@/components/impact/PrisonTimeline";
import { GraduateQuotes } from "@/components/impact/GraduateQuotes";
import { PhotoGrid } from "@/components/ui/PhotoGrid";
import { HeroImage } from "@/components/ui/HeroImage";
import { impactGallery, imageRegistry } from "@/lib/images";
import { goals2026 } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "See Ustawi Network's growth from pilot to multi-prison implementation, with graduation milestones and 2026 goals.",
};

export default function ImpactPage() {
  const heroImage = imageRegistry["tournament-team-group"];

  return (
    <div className="space-y-14 pb-14">
      <HeroImage imageSrc={heroImage.src} imageAlt={heroImage.alt}>
        <SectionHeader
          eyebrow="Proof That It Works"
          title="From one prison to many. From a pilot to a movement."
          description="In less than two years, Ustawi Network has expanded from a single pilot to active implementation across maximum security facilities with institutional support."
          size="hero"
          dark
        />
      </HeroImage>

      <section className="mx-auto max-w-6xl px-6">
        <PrisonTimeline />
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-6">
        <SectionHeader eyebrow="Graduate Voices" title="Transformation in their own words." />
        <GraduateQuotes />
      </section>

      <section className="mx-auto max-w-6xl rounded-2xl border border-[var(--color-neutral)] bg-white px-6 py-10 shadow-sm">
        <SectionHeader
          eyebrow="A Day of Dignity"
          title="When transformation meets recognition."
          description="Picture this: a maximum security prison in Kisumu County. Thirty men in prison uniforms receive certificates of completion while officials applaud not just progress, but courage. It was not just a graduation. It was a declaration that rehabilitation works and communities are safer when we invest in transformation rather than incarceration alone."
        />
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-6">
        <SectionHeader
          eyebrow="On The Ground"
          title="Transformation you can see."
          description="These images capture graduation ceremonies, tournament engagement, and launch milestones across programme sites."
        />
        <PhotoGrid imageKeys={impactGallery} />
      </section>

      <section className="mx-auto max-w-6xl rounded-2xl border border-[var(--color-neutral)] bg-white px-6 py-10 shadow-sm">
        <SectionHeader
          eyebrow="Looking Ahead"
          title="2026 will be our most ambitious year yet."
        />
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {goals2026.map((goal) => (
            <li
              key={goal}
              className="rounded-xl bg-[var(--color-background)] px-4 py-3 text-[var(--color-secondary)]"
            >
              {goal}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl rounded-2xl bg-[var(--color-secondary)] px-6 py-10 text-white">
        <h2 className="text-3xl font-extrabold">
          These goals are within reach - with the right partners.
        </h2>
        <div className="mt-6">
          <Button href="/get-involved">Help Us Get There →</Button>
        </div>
      </section>
    </div>
  );
}
