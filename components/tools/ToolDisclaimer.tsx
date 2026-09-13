import type { ReactNode } from "react";

export function ToolDisclaimer({ children }: { children?: ReactNode }) {
  return (
    <p className="rounded-xl border border-[var(--color-neutral)] bg-[var(--color-background)] px-4 py-3 text-sm leading-relaxed text-[var(--color-text-body)]">
      {children ??
        "Educational tool only. This is not legal, clinical, or financial advice, and it does not enrol anyone in a programme."}
    </p>
  );
}
