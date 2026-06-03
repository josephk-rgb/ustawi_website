import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Hero } from "@/components/home/Hero";
import { ApproachPillars } from "@/components/home/ApproachPillars";
import { ImpactNumbers } from "@/components/home/ImpactNumbers";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-2 lg:items-center">
          <SectionHeader
            eyebrow="Our Mission"
            title="Building Accountability, Dignity & Safer Communities."
            description="Incarceration rates for sexual offences have risen while structured offence-specific rehabilitation has remained scarce. Ustawi Network exists to break that cycle through evidence-based support, accountability, and transformation."
          />
          <div className="rounded-2xl border border-[var(--color-neutral)] bg-[var(--color-secondary)] p-8 text-white">
            <h3 className="text-2xl font-bold">Partner with us in this work.</h3>
            <p className="mt-3 leading-relaxed text-white/90">
              Real change requires resources, commitment, and collective action.
              Whether you are a donor, agency, organisation, or individual,
              there is a role for you.
            </p>
            <div className="mt-6">
              <Button href="/get-involved">Find Your Role →</Button>
            </div>
          </div>
        </div>
      </section>
      <ApproachPillars />
      <ImpactNumbers />
    </div>
  );
}
