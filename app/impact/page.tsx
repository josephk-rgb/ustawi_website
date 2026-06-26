import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PrisonTimeline } from "@/components/impact/PrisonTimeline";
import { GraduateQuotes } from "@/components/impact/GraduateQuotes";
import { HeroImage } from "@/components/ui/HeroImage";
import { MediaLinks } from "@/components/ui/MediaLinks";
import { imageRegistry } from "@/lib/images";
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
      <HeroImage imageSrc={heroImage.src} imageAlt={heroImage.alt} priority>
        <SectionHeader
          eyebrow="Proof That It Works"
          title="From one prison to many. From a pilot to a movement."
          description="In less than two years, Ustawi Network has expanded from a single pilot to active implementation across maximum security facilities with institutional support."
          size="hero"
          dark
        />
      </HeroImage>

      <section className="mx-auto max-w-6xl space-y-6 px-6">
        <SectionHeader
          eyebrow="March 2026 Milestone"
          title="SOTP Graduation and One-Year Milestone at Kamiti Main Prison"
          description="Ustawi Network joined the Kenya Prisons Service in marking a significant milestone — the graduation of more than 90 inmates and one year since SOTP was launched at Kamiti Main on 17 March 2025."
        />
        <p className="text-[var(--color-text-body)]">
          Hosted at Kamiti Main Prison, with Naivasha Maximum and Kisumu Maximum
          Prisons joining virtually, the graduation highlighted the growing reach
          of the SOTP and the value of structured rehabilitation within
          correctional settings.
        </p>
        <MediaLinks />
        <Link
          href="/blog/sotp-kamiti-one-year-milestone"
          className="inline-flex text-sm font-semibold text-[var(--color-secondary)] underline"
        >
          Read the full story →
        </Link>
      </section>

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
        <h2 className="text-2xl font-extrabold md:text-3xl">
          These goals are within reach - with the right partners.
        </h2>
        <div className="mt-6">
          <Button href="/get-involved">Help Us Get There →</Button>
        </div>
      </section>
    </div>
  );
}
