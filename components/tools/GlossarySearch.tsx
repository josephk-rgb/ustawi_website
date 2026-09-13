"use client";

import { useMemo, useState } from "react";
import { glossaryTerms } from "@/lib/glossary";
import { ToolDisclaimer } from "@/components/tools/ToolDisclaimer";

export function GlossarySearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return glossaryTerms;
    return glossaryTerms.filter((item) => {
      const haystack = `${item.term} ${item.definition}`.toLowerCase();
      return haystack.includes(normalized);
    });
  }, [query]);

  return (
    <div className="space-y-6">
      <label className="block text-sm font-semibold text-[var(--color-secondary)]">
        Search terms
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try SOTP, desistance, or Ubuntu"
          className="mt-2 w-full rounded-xl border border-[var(--color-neutral)] bg-white px-4 py-3 outline-none ring-[var(--color-primary)] focus:ring-2"
        />
      </label>
      <p className="text-sm text-[var(--color-text-body)]">
        {results.length} {results.length === 1 ? "term" : "terms"}
      </p>
      <div className="space-y-4">
        {results.map((item) => (
          <article
            key={item.shortTitle}
            id={item.shortTitle}
            className="rounded-2xl border border-[var(--color-neutral)] bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-extrabold text-[var(--color-secondary)]">
              {item.term}
            </h2>
            <p className="mt-2 leading-relaxed text-[var(--color-text-body)]">
              {item.definition}
            </p>
            {item.relatedSlugs?.length ? (
              <p className="mt-3 text-sm text-[var(--color-text-body)]">
                Related:{" "}
                {item.relatedSlugs.map((slug, index) => {
                  const related = glossaryTerms.find((term) => term.shortTitle === slug);
                  if (!related) return null;
                  return (
                    <span key={slug}>
                      <a
                        href={`#${slug}`}
                        className="font-semibold text-[var(--color-secondary)] underline"
                      >
                        {related.term}
                      </a>
                      {index < item.relatedSlugs!.length - 1 ? ", " : ""}
                    </span>
                  );
                })}
              </p>
            ) : null}
          </article>
        ))}
        {results.length === 0 ? (
          <p className="text-[var(--color-text-body)]">
            No terms match that search. Try a shorter word.
          </p>
        ) : null}
      </div>
      <ToolDisclaimer />
    </div>
  );
}
