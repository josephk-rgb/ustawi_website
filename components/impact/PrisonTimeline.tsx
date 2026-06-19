import Image from "next/image";
import { timelineEntries } from "@/lib/content";
import { imageRegistry } from "@/lib/images";

export function PrisonTimeline() {
  const icons = ["🎓", "🏁", "🏆", "⭐"];

  return (
    <div className="space-y-10">
      {timelineEntries.map((entry, index) => (
        <div key={`${entry.year}-${entry.title}`} className="grid gap-4 md:grid-cols-[88px_1fr]">
          <div className="relative flex justify-center pt-4">
            <div className="z-10 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-secondary)] text-xl text-white ring-4 ring-white">
              {icons[index] ?? "•"}
            </div>
            {index < timelineEntries.length - 1 ? (
              <div className="absolute left-1/2 top-[4.25rem] bottom-[-2.5rem] w-1 -translate-x-1/2 bg-[var(--color-teal-line)]" />
            ) : null}
          </div>

          <article className="rounded-2xl border border-[var(--color-neutral)] bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">
              {entry.year}
            </p>
            <h3 className="mt-1 text-2xl font-bold text-[var(--color-secondary)]">
              {entry.title}
            </h3>
            <p className="mt-3 text-[var(--color-text-body)]">{entry.description}</p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {entry.images.map((key) => {
                const item = imageRegistry[key];
                if (!item) return null;

                return (
                  <figure
                    key={item.key}
                    className="overflow-hidden rounded-xl border border-[var(--color-neutral)]"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </figure>
                );
              })}
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
