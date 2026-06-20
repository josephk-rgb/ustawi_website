type MediaLinksProps = {
  youtubeId?: string;
  articleUrl?: string;
  articleTitle?: string;
  articleSource?: string;
};

export function MediaLinks({
  youtubeId = "QVprVQ17FVE",
  articleUrl = "https://nation.africa/kenya/news/gender/inside-jane-kuria-s-work-with-men-convicted-of-sexual-offences-5401410",
  articleTitle = "Inside Jane Kuria's work with men convicted of sexual offences",
  articleSource = "Nation Africa",
}: MediaLinksProps) {
  return (
    <div className="space-y-6">
      {youtubeId ? (
        <div className="overflow-hidden rounded-2xl border border-[var(--color-neutral)] bg-black shadow-sm">
          <div className="relative aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title="Ustawi Network programme video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      ) : null}

      {articleUrl ? (
        <a
          href={articleUrl}
          target="_blank"
          rel="noreferrer"
          className="block rounded-2xl border border-[var(--color-neutral)] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary-dark)]">
            {articleSource}
          </p>
          <p className="mt-2 text-lg font-bold text-[var(--color-secondary)]">
            {articleTitle}
          </p>
          <p className="mt-2 text-sm text-[var(--color-text-body)]">
            Read the full feature on rehabilitation, accountability, and community
            safety.
          </p>
          <span className="mt-4 inline-flex text-sm font-semibold text-[var(--color-secondary)] underline">
            Read article →
          </span>
        </a>
      ) : null}
    </div>
  );
}
