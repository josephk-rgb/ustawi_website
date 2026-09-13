import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HeroImage } from "@/components/ui/HeroImage";
import { Button } from "@/components/ui/Button";
import { ResourceCta } from "@/components/resources/ResourceCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { imageRegistry } from "@/lib/images";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Sex Offender Treatment Programme (SOTP) in Kenya",
  description:
    "Kenya's SOTP: 288 hours over 8 months of CBT, accountability, and reintegration for adult men, delivered by Ustawi Network with Kenya Prisons Service.",
  path: "/programs/sotp/",
  image: "/images/sotp-workshop-session.webp",
});

export default function SotpPage() {
  const heroImage = imageRegistry["sotp-workshop-session"];

  return (
    <div className="space-y-14 pb-14">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Programs", path: "/programs/" },
          { name: "SOTP", path: "/programs/sotp/" },
        ])}
      />
      <HeroImage imageSrc={heroImage.src} imageAlt={heroImage.alt} priority>
        <SectionHeader
          eyebrow="Flagship Programme"
          title="Sex Offender Treatment Programme (SOTP)"
          description="Kenya's structured, offence-specific rehabilitation for adult men convicted of sexual offences — 288 hours over eight months, inside prison, with trained facilitators."
          size="hero"
          dark
        />
      </HeroImage>

      <section className="mx-auto max-w-6xl px-6">
        <article className="rounded-2xl border border-[var(--color-neutral)] bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-[var(--color-secondary)]">
            What SOTP is — and is not
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--color-text-body)]">
            SOTP is intensive psychosocial work. Participants take
            responsibility for harm, practise new thinking and emotional skills,
            and prepare for safer return to community. It is not a reduced
            sentence, not general counselling, and not a claim that risk
            disappears at graduation.
          </p>
          <ul className="mt-5 grid gap-3 text-sm font-semibold text-[var(--color-secondary)] md:grid-cols-3">
            <li className="rounded-xl border-l-4 border-l-[var(--color-teal-line)] bg-[var(--color-background)] p-4">
              <p className="text-3xl font-black">288</p>
              hours in a full cycle
            </li>
            <li className="rounded-xl border-l-4 border-l-[var(--color-teal-line)] bg-[var(--color-background)] p-4">
              <p className="text-3xl font-black">8</p>
              months of structured groups
            </li>
            <li className="rounded-xl border-l-4 border-l-[var(--color-teal-line)] bg-[var(--color-background)] p-4">
              <p className="text-3xl font-black">5</p>
              maximum-security prisons
            </li>
          </ul>
        </article>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-6 md:grid-cols-2">
        <article className="rounded-2xl border border-[var(--color-neutral)] bg-white p-7 shadow-sm">
          <h2 className="text-xl font-bold text-[var(--color-secondary)]">
            How a cohort is built
          </h2>
          <ul className="mt-4 space-y-3 text-[var(--color-text-body)]">
            <li>Accountability and personal responsibility</li>
            <li>Cognitive restructuring and emotional regulation</li>
            <li>Consent, relationships, and victim empathy</li>
            <li>Relapse prevention and reintegration planning</li>
            <li>Training-of-Trainers so officers can sustain delivery</li>
          </ul>
        </article>
        <article className="rounded-2xl border border-[var(--color-neutral)] bg-white p-7 shadow-sm">
          <h2 className="text-xl font-bold text-[var(--color-secondary)]">
            Learn more, then act
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--color-text-body)]">
            Read the full explainer, browse terms, or estimate what a gift
            supports. Then talk to the team about a facility, a cohort, or a
            CSR partnership.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/resources/guides/what-is-sotp-kenya">
              What is SOTP? →
            </Button>
            <Button href="/resources/tools/glossary" variant="secondary">
              Glossary
            </Button>
            <Button href="/resources/tools/donation-impact" variant="secondary">
              Donation calculator
            </Button>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <ResourceCta />
      </section>
    </div>
  );
}
