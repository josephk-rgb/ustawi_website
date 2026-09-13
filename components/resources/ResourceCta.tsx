import { Button } from "@/components/ui/Button";

export function ResourceCta() {
  return (
    <section className="rounded-2xl bg-[var(--color-secondary)] px-6 py-10 text-white">
      <h2 className="text-2xl font-extrabold md:text-3xl">
        This work grows when people fund it, staff it, and receive graduates home.
      </h2>
      <p className="mt-3 max-w-3xl text-white/90">
        Give, partner, or volunteer. Every conversation helps keep structured
        rehabilitation moving through Kenya&apos;s prisons.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href="/get-involved">Get involved →</Button>
        <Button href="/contact" variant="hero-secondary">
          Contact the team
        </Button>
      </div>
    </section>
  );
}
