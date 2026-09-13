import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HeroImage } from "@/components/ui/HeroImage";
import { ProgramShowcase } from "@/components/programs/ProgramShowcase";
import { imageRegistry } from "@/lib/images";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Prison rehabilitation programmes in Kenya",
  description:
    "Explore Ustawi Network's SOTP and other structured prison rehabilitation programmes delivered with Kenya Prisons Service.",
  path: "/programs/",
  image: "/images/sotp-workshop-session.webp",
});

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
