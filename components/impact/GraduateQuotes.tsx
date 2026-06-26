const quotes = [
  {
    text: "For the first time, I understand the pain I caused. I can't undo it, but I can commit to being different.",
    source: "Graduate, Kibos Maximum Prison",
  },
  {
    text: "This programme gave me tools I never had — to manage my emotions, to understand consent, to see victims as real people with real pain.",
    source: "Graduate, Kibos Maximum Prison",
  },
];

export function GraduateQuotes() {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {quotes.map((quote) => (
        <blockquote
          key={quote.text}
          className="relative overflow-hidden rounded-2xl border border-[var(--color-neutral)] bg-white p-6 shadow-sm"
        >
          <span className="pointer-events-none absolute -left-2 -top-14 text-[5rem] font-black leading-none text-[var(--color-primary)]/20 md:text-[10rem]">
            &ldquo;
          </span>
          <p className="relative text-xl font-semibold leading-relaxed text-[var(--color-secondary)] md:text-2xl">
            &ldquo;{quote.text}&rdquo;
          </p>
          <footer className="mt-3 text-sm text-[var(--color-text-body)]">
            {quote.source}
          </footer>
        </blockquote>
      ))}
    </section>
  );
}
