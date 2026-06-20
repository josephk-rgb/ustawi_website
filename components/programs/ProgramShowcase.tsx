import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { programs, statusStyles } from "@/lib/programs";
import { imageRegistry } from "@/lib/images";

export function ProgramShowcase() {
  const [activeProgram, ...upcomingPrograms] = programs;
  const activeImage = imageRegistry[activeProgram.imageKey ?? "sotp-workshop-session"];

  return (
    <section className="mx-auto max-w-6xl space-y-12 px-6">
      <article className="overflow-hidden rounded-2xl bg-[var(--color-secondary)] shadow-lg lg:grid lg:grid-cols-[1.1fr_1fr]">
        <div className="relative aspect-[4/3] min-h-[240px] lg:aspect-auto lg:min-h-full">
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-secondary)]/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[var(--color-secondary)]/30" />
        </div>

        <div className="flex flex-col justify-center px-6 py-8 text-white md:px-10 md:py-12">
          <span
            className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${statusStyles[activeProgram.status]}`}
          >
            {activeProgram.status}
          </span>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
            Flagship Programme
          </p>
          <h2 className="mt-2 text-2xl font-extrabold leading-tight md:text-3xl">
            {activeProgram.title}
          </h2>
          <p className="mt-4 leading-relaxed text-white/90">{activeProgram.summary}</p>

          <dl className="mt-8 grid gap-4 border-t border-white/15 pt-8 sm:grid-cols-3">
            {activeProgram.details.map((detail) => (
              <div key={detail}>
                <dd className="text-sm font-semibold leading-snug text-white">{detail}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/impact"
              className="inline-flex min-h-11 items-center rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--color-secondary)] transition-colors hover:bg-[var(--color-primary-dark)]"
            >
              See our impact →
            </Link>
            <Link
              href="/moments"
              className="inline-flex min-h-11 items-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              View moments →
            </Link>
          </div>
        </div>
      </article>

      <div className="space-y-6">
        <SectionHeader
          eyebrow="On the Horizon"
          title="Building on what works."
          description="Two additional programmes are in development — extending structured rehabilitation to more offence types and age groups."
        />

        <div className="space-y-5">
          {upcomingPrograms.map((program, index) => {
            const image = imageRegistry[program.imageKey ?? "sotp-workshop-session"];

            return (
              <article
                key={program.title}
                className="overflow-hidden rounded-2xl border border-[var(--color-neutral)] bg-white shadow-sm lg:grid lg:grid-cols-[220px_1fr_auto] lg:items-center"
              >
                <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-[180px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="220px"
                  />
                </div>

                <div className="p-6 lg:py-8 lg:pr-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary-dark)]">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${statusStyles[program.status]}`}
                    >
                      {program.status}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-[var(--color-secondary)] md:text-2xl">
                    {program.title}
                  </h3>
                  <p className="mt-2 max-w-2xl leading-relaxed text-[var(--color-text-body)]">
                    {program.summary}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--color-secondary)]">
                    {program.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-[var(--color-neutral)] px-6 py-5 lg:border-l lg:border-t-0 lg:px-8">
                  <Button href="/get-involved" size="sm">
                    Partner with us →
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
