type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  size?: "hero" | "default";
  dark?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  size = "default",
  dark = false,
}: SectionHeaderProps) {
  const align = centered ? "text-center mx-auto" : "";
  const titleSize =
    size === "hero" ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl";
  const titleColor = dark ? "text-white" : "text-[var(--color-secondary)]";
  const bodyColor = dark ? "text-white/90" : "text-[var(--color-text-body)]";
  const eyebrowColor = dark
    ? "text-[var(--color-primary)]"
    : "text-[var(--color-primary-dark)]";

  return (
    <div className={`max-w-3xl space-y-3 ${align}`}>
      {eyebrow ? (
        <p
          className={`text-sm font-semibold uppercase tracking-[0.18em] ${eyebrowColor}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`${titleSize} font-extrabold tracking-tight ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`text-base leading-relaxed md:text-lg ${bodyColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
