import { Button } from "@/components/ui/Button";
import { HeroImage } from "@/components/ui/HeroImage";
import { imageRegistry } from "@/lib/images";

export function Hero() {
  const hero = imageRegistry["hero-tournament-banner"];

  return (
    <HeroImage imageSrc={hero.src} imageAlt={hero.alt} priority>
      <div className="max-w-3xl space-y-5">
        <p className="inline-block border-l-4 border-[var(--color-teal-line)] pl-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
          The Problem We&apos;re Solving
        </p>
        <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
          Kenya&apos;s prisons are full. But rehabilitation programmes are empty.
        </h1>
        <p className="text-xl font-semibold text-white/95">
          Transformation is possible. Redemption is real. Communities can heal.
        </p>
        <p className="max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
          Ustawi Network runs Kenya&apos;s structured rehabilitation programme
          for men convicted of sexual offences, because safer communities are
          built through accountability, support, and the courage to change.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button href="/impact">See Our Impact →</Button>
          <Button href="/get-involved" variant="hero-secondary">
            Partner With Us
          </Button>
        </div>
        <div className="flex flex-wrap gap-3 pt-3">
          {["80+ enrolled", "3 prisons", "5 yrs sentence prevented"].map((item) => (
            <span
              key={item}
              className="rounded-full bg-white/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-secondary)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </HeroImage>
  );
}
