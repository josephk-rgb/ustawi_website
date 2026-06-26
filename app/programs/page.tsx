import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HeroImage } from "@/components/ui/HeroImage";
import { ProgramShowcase } from "@/components/programs/ProgramShowcase";
import { imageRegistry } from "@/lib/images";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Ustawi Network rehabilitation programmes including SOTP, Youth Sex Offender Rehabilitation, and Violent Offenders Rehabilitation.",
};

export default function ProgramsPage() {
  const heroImage = imageRegistry["sotp-workshop-session"];

  return (
    <div className="space-y-14 pb-14">
      <HeroImage imageSrc={heroImage.src} imageAlt={heroImage.alt} priority>
        <SectionHeader
          eyebrow="Our Programmes"
          title="Evidence-based rehabilitation for safer communities."
          description="Ustawi Network delivers structured, offence-specific programmes that combine accountability, psychosocial support, and pathways to reintegration."
          size="hero"
          dark
        />
      </HeroImage>

      <ProgramShowcase />
    </div>
  );
}
