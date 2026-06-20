import Image from "next/image";
import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { HeroImage } from "@/components/ui/HeroImage";
import { homePillars, approachValues } from "@/lib/content";
import { imageRegistry } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Ustawi Network was born and how the Sexual Offenders Treatment Programme creates pathways to accountability and safer communities.",
};

export default function AboutPage() {
  const heroImage = imageRegistry["graduation-certificate-presenter"];
  const workshop = imageRegistry["sotp-workshop-session"];
  const launchCutting = imageRegistry["launch-cake-cutting"];
  const launchCake = imageRegistry["launch-cake-kenya-prisons"];

  return (
    <div className="space-y-16 pb-14">
      <HeroImage imageSrc={heroImage.src} imageAlt={heroImage.alt} priority>
        <SectionHeader
          eyebrow="Who We Are"
          title="Born from a gap no one else was filling."
          description="Ustawi Network is a non-profit based in Kisumu County, Kenya, dedicated to transforming lives through accountability, rehabilitation, and community-safe reintegration."
          size="hero"
          dark
        />
      </HeroImage>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-[var(--color-neutral)] bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-[var(--color-secondary)]">
            It started with a question: why is no one doing this?
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--color-text-body)]">
            In Kenya&apos;s correctional system, there was no structured,
            offence-specific programme addressing root causes of sexual
            offending. In 2024, Ustawi piloted SOTP at Kamiti Medium Prison
            with 20 participants over four months. All completed. All received
            certificates. The results proved a scalable rehabilitation model was
            possible.
          </p>
        </article>
        <figure className="overflow-hidden rounded-2xl border border-[var(--color-neutral)] bg-white shadow-sm">
          <div className="relative aspect-[4/3]">
            <Image
              src={workshop.src}
              alt={workshop.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <figcaption className="px-4 py-3 text-sm text-[var(--color-text-body)]">
            {workshop.caption}
          </figcaption>
        </figure>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <article className="rounded-2xl border border-[var(--color-neutral)] bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-[var(--color-secondary)]">
            What is the Sexual Offenders Treatment Programme (SOTP)?
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--color-text-body)]">
            SOTP is an intensive psychosocial programme designed specifically for
            men convicted of sexual offences. Each cohort covers personal
            responsibility, emotional regulation, understanding harm, consent,
            empathy, and reintegration preparation.
          </p>
          <ul className="mt-5 grid gap-3 text-sm font-semibold text-[var(--color-secondary)] md:grid-cols-3">
            <li className="rounded-xl border-l-4 border-l-[var(--color-teal-line)] bg-[var(--color-background)] p-4">
              <p className="text-3xl font-black">288</p>
              hours of intensive psychosocial work
            </li>
            <li className="rounded-xl border-l-4 border-l-[var(--color-teal-line)] bg-[var(--color-background)] p-4">
              <p className="text-3xl font-black">8</p>
              months per full cycle
            </li>
            <li className="rounded-xl border-l-4 border-l-[var(--color-teal-line)] bg-[var(--color-background)] p-4">
              <p className="text-3xl font-black">100%</p>
              completion in the Kamiti pilot
            </li>
          </ul>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Official Launch"
          title="March 2025: Ustawi Network is officially born."
          description="Following pilot success, Ustawi was formally launched at Kamiti Maximum Prison with institutional support and community-centered engagement."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {[launchCutting, launchCake].map((image) => (
            <figure
              key={image.key}
              className="overflow-hidden rounded-2xl border border-[var(--color-neutral)] bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-[var(--color-text-body)]">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-8 px-6">
        <SectionHeader
          eyebrow="Core Pillars"
          title="Our framework combines justice, support, and reintegration."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {homePillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-[var(--color-neutral)] bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[var(--color-secondary)]">
                {pillar.title}
              </h3>
              <p className="mt-2 text-[var(--color-text-body)]">{pillar.text}</p>
            </article>
          ))}
        </div>
        <div className="flex flex-col gap-2 rounded-2xl bg-[var(--color-primary)] px-6 py-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-secondary)] sm:flex-row sm:flex-wrap sm:items-center">
          <span>Values:</span>
          {approachValues.map((value) => (
            <span key={value} className="rounded-full bg-white/20 px-3 py-1 text-xs">
              {value}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl rounded-2xl bg-[var(--color-secondary)] px-6 py-12 text-white">
        <h2 className="text-2xl font-extrabold md:text-3xl">
          We&apos;re just getting started. Will you help us go further?
        </h2>
        <p className="mt-3 max-w-3xl text-white/90">
          Every facility reached and every graduate supported depends on
          people and institutions who believe this work is worth backing.
        </p>
        <div className="mt-6">
          <Button href="/get-involved">Get Involved →</Button>
        </div>
      </section>
    </div>
  );
}
