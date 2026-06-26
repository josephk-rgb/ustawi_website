import { audienceCards, siteConfig } from "@/lib/content";

export function AudienceCards() {
  const icons = ["❤", "💼", "🏛", "👤"];

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {audienceCards.map((card, index) => (
        <article
          key={card.title}
          className="rounded-2xl border border-[var(--color-neutral)] border-l-4 border-l-[var(--color-primary)] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-background)] text-lg">
            {icons[index] ?? "•"}
          </span>
          <h3 className="text-xl font-bold text-[var(--color-secondary)]">
            {card.title}
          </h3>
          <p className="mt-3 text-[var(--color-text-body)]">{card.body}</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-5 inline-flex min-h-11 items-center rounded-full bg-[var(--color-primary)] px-4 py-3 text-sm font-semibold text-[var(--color-secondary)] transition-colors hover:bg-[var(--color-primary-dark)]"
          >
            {card.cta} →
          </a>
        </article>
      ))}
    </div>
  );
}
