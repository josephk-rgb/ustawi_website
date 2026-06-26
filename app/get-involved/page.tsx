import Image from "next/image";
import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AudienceCards } from "@/components/get-involved/AudienceCards";
import { HeroImage } from "@/components/ui/HeroImage";
import { imageRegistry } from "@/lib/images";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Partner with Ustawi Network as a donor, corporate organisation, public agency, or individual and invest in safer communities.",
};

export default function GetInvolvedPage() {
  const heroImage = imageRegistry["launch-cake-celebration"];
  const image = imageRegistry["nakuru-tournament-field"];

  return (
    <div className="space-y-14 pb-14">
      <HeroImage imageSrc={heroImage.src} imageAlt={heroImage.alt} priority>
        <SectionHeader
          eyebrow="Join the Movement"
          title="Every partnership brings us closer to a Kenya where communities are truly safe."
          description="Real, lasting change requires resources, commitment, and shared responsibility. Here is how you can be part of it."
          size="hero"
          dark
        />
      </HeroImage>

      <section className="mx-auto max-w-6xl px-6">
        <AudienceCards />
      </section>

      <section className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-[var(--color-secondary)] shadow-sm">
        <div className="relative aspect-[16/9] min-h-[180px] md:aspect-[21/9] md:min-h-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="px-6 py-10 text-center text-white">
          <div className="mx-auto mb-6 h-1 w-28 bg-[var(--color-teal-line)]" />
          <p className="text-2xl font-black md:text-3xl">
            &quot;Restoring dignity. Strengthening communities. Supporting
            transformation.&quot;
          </p>
          <div className="mx-auto mt-6 h-1 w-28 bg-[var(--color-teal-line)]" />
        </div>
      </section>
    </div>
  );
}
