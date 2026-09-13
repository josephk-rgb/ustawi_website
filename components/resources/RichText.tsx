import type { ReactNode } from "react";
import Link from "next/link";

const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;

export function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  const pattern = new RegExp(linkPattern.source, "g");

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    nodes.push(
      <Link
        key={`${href}-${match.index}`}
        href={href}
        className="font-semibold text-[var(--color-secondary)] underline underline-offset-2"
      >
        {label}
      </Link>,
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <>{nodes}</>;
}
