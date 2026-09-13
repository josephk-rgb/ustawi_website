"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ToolDisclaimer } from "@/components/tools/ToolDisclaimer";
import { checklistGroups } from "@/lib/tools";

const storageKey = "ustawi-reintegration-checklist";

export function ReintegrationChecklist() {
  const allIds = useMemo(
    () => checklistGroups.flatMap((group) => group.items.map((item) => item.id)),
    [],
  );
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) {
        setChecked(JSON.parse(stored) as Record<string, boolean>);
      }
    } catch {
      // Ignore unreadable storage.
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(storageKey, JSON.stringify(checked));
  }, [checked, ready]);

  const doneCount = allIds.filter((id) => checked[id]).length;
  const progress = Math.round((doneCount / allIds.length) * 100);

  function toggle(id: string) {
    setChecked((current) => ({ ...current, [id]: !current[id] }));
  }

  function reset() {
    setChecked({});
  }

  return (
    <div className="space-y-6 print:space-y-4">
      <div className="rounded-2xl border border-[var(--color-neutral)] bg-white p-5 shadow-sm print:shadow-none">
        <p className="text-sm font-semibold text-[var(--color-secondary)]">
          {doneCount} of {allIds.length} items ready
        </p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[var(--color-neutral)]">
          <div
            className="h-full rounded-full bg-[var(--color-primary)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {checklistGroups.map((group) => (
        <section
          key={group.id}
          className="rounded-2xl border border-[var(--color-neutral)] bg-white p-5 shadow-sm print:shadow-none"
        >
          <h2 className="text-xl font-extrabold text-[var(--color-secondary)]">
            {group.title}
          </h2>
          <ul className="mt-4 space-y-3">
            {group.items.map((item) => (
              <li key={item.id}>
                <label className="flex cursor-pointer items-start gap-3 text-[var(--color-text-body)]">
                  <input
                    type="checkbox"
                    checked={Boolean(checked[item.id])}
                    onChange={() => toggle(item.id)}
                    className="mt-1 h-4 w-4 accent-[var(--color-secondary)]"
                  />
                  <span className={checked[item.id] ? "line-through opacity-70" : ""}>
                    {item.label}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <div className="flex flex-wrap gap-3 print:hidden">
        <Button type="button" onClick={() => window.print()} variant="secondary">
          Print checklist
        </Button>
        <Button type="button" onClick={reset} variant="secondary">
          Reset
        </Button>
        <Button href="/contact">Ask Ustawi for support</Button>
      </div>

      <ToolDisclaimer>
        A planning aid for families, not a court, probation, or clinical form.
        Progress is stored only in this browser.
      </ToolDisclaimer>
    </div>
  );
}
