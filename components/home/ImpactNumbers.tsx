import Image from "next/image";
import { impactStats } from "@/lib/content";
import { imageRegistry } from "@/lib/images";

export function ImpactNumbers() {
  const quoteImage = imageRegistry["graduation-certificate-handshake"];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl space-y-10 px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {impactStats.map((stat) => (
            <article key={stat.label} className="p-2 text-center">
              <p className="text-6xl font-black text-[var(--color-secondary)] md:text-7xl">
                {stat.value}
              </p>
              <div className="mx-auto mt-3 h-1 w-16 bg-[var(--color-teal-line)]" />
              <p className="mt-3 text-sm text-[var(--color-text-body)]">{stat.label}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-8 rounded-2xl bg-[var(--color-secondary)] p-8 text-white md:grid-cols-2 md:items-center md:p-10">
          <div className="relative space-y-4 overflow-hidden">
            <span className="pointer-events-none absolute -left-3 -top-16 text-[5rem] font-black leading-none text-[var(--color-primary)]/25 md:text-[10rem]">
              &ldquo;
            </span>
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-primary)]">
              Graduate Reflection
            </p>
            <blockquote className="text-xl font-semibold leading-relaxed md:text-2xl">
              &quot;For the first time, I understand the pain I caused. I can&apos;t
              undo it, but I can commit to being different.&quot;
            </blockquote>
            <p className="text-sm text-white/85">
              Graduate, Kibos Maximum Prison - December 2025
            </p>
          </div>

          <figure className="overflow-hidden rounded-xl border border-white/20">
            <div className="relative aspect-[4/3]">
              <Image
                src={quoteImage.src}
                alt={quoteImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
