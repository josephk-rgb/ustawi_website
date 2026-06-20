import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PhotoGrid } from "@/components/ui/PhotoGrid";
import { HeroImage } from "@/components/ui/HeroImage";
import { impactGallery, imageRegistry } from "@/lib/images";

export const metadata: Metadata = {
  title: "Moments",
  description:
    "Graduation ceremonies, tournament engagement, and launch celebrations from Ustawi Network programme sites across Kenya.",
};

export default function MomentsPage() {
  const heroImage = imageRegistry["graduation-certificate-group"];

  return (
    <div className="space-y-14 pb-14">
      <HeroImage imageSrc={heroImage.src} imageAlt={heroImage.alt} priority>
        <SectionHeader
          eyebrow="Programme Moments"
          title="Transformation you can see."
          description="These images capture graduation ceremonies, tournament engagement, and launch milestones across programme sites — moments of dignity, recognition, and hope."
          size="hero"
          dark
        />
      </HeroImage>

      <section className="mx-auto max-w-6xl space-y-6 px-6">
        <PhotoGrid imageKeys={impactGallery} />
      </section>
    </div>
  );
}
