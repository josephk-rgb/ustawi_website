"use client";

import { useMemo, useState } from "react";
import { siteConfig } from "@/lib/content";
import { donationImpactConfig } from "@/lib/tools";
import { ToolDisclaimer } from "@/components/tools/ToolDisclaimer";

function formatKes(value: number) {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(value);
}

export function CsrPlanner() {
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState("250000");
  const [placements, setPlacements] = useState("2");
  const [volunteerHours, setVolunteerHours] = useState("40");
  const [focus, setFocus] = useState("funding");

  const numericBudget = Number(budget.replace(/[^\d.]/g, "")) || 0;
  const numericPlacements = Number(placements.replace(/[^\d.]/g, "")) || 0;
  const numericHours = Number(volunteerHours.replace(/[^\d.]/g, "")) || 0;

  const sketch = useMemo(() => {
    const programmeHours =
      numericBudget / donationImpactConfig.costPerProgrammeHourKes;
    const cycles = programmeHours / donationImpactConfig.hoursPerFullCycle;
    const facilitators =
      programmeHours / donationImpactConfig.facilitatorTrainingHours;

    return {
      programmeHours,
      cycles,
      facilitators,
      body: [
        `Organisation: ${company || "[your company]"}`,
        `Proposed CSR budget: ${formatKes(numericBudget)}`,
        `Focus: ${focus}`,
        `Estimated programme hours (illustrative): ${programmeHours.toFixed(1)}`,
        `Share of a 288-hour SOTP cycle: ${cycles.toFixed(2)}`,
        `Equivalent facilitator-training blocks: ${facilitators.toFixed(1)}`,
        `Vocational placements offered: ${numericPlacements}`,
        `Staff volunteer hours: ${numericHours}`,
        "",
        "We would like to explore a partnership with Ustawi Network on prison rehabilitation and reintegration in Kenya.",
      ].join("\n"),
    };
  }, [company, focus, numericBudget, numericHours, numericPlacements]);

  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent("CSR partnership outline")}&body=${encodeURIComponent(sketch.body)}`;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-semibold text-[var(--color-secondary)]">
          Company name
          <input
            type="text"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            className="mt-2 w-full rounded-xl border border-[var(--color-neutral)] bg-white px-4 py-3 outline-none ring-[var(--color-primary)] focus:ring-2"
          />
        </label>
        <label className="block text-sm font-semibold text-[var(--color-secondary)]">
          Partnership focus
          <select
            value={focus}
            onChange={(event) => setFocus(event.target.value)}
            className="mt-2 w-full rounded-xl border border-[var(--color-neutral)] bg-white px-4 py-3 outline-none ring-[var(--color-primary)] focus:ring-2"
          >
            <option value="funding">Programme funding</option>
            <option value="training">Facilitator training</option>
            <option value="vocational">Vocational placements</option>
            <option value="mixed">Mixed partnership</option>
          </select>
        </label>
        <label className="block text-sm font-semibold text-[var(--color-secondary)]">
          Annual CSR budget (KES)
          <input
            type="number"
            min={0}
            value={budget}
            onChange={(event) => setBudget(event.target.value)}
            className="mt-2 w-full rounded-xl border border-[var(--color-neutral)] bg-white px-4 py-3 outline-none ring-[var(--color-primary)] focus:ring-2"
          />
        </label>
        <label className="block text-sm font-semibold text-[var(--color-secondary)]">
          Vocational placements you could offer
          <input
            type="number"
            min={0}
            value={placements}
            onChange={(event) => setPlacements(event.target.value)}
            className="mt-2 w-full rounded-xl border border-[var(--color-neutral)] bg-white px-4 py-3 outline-none ring-[var(--color-primary)] focus:ring-2"
          />
        </label>
        <label className="block text-sm font-semibold text-[var(--color-secondary)] md:col-span-2">
          Staff volunteer hours in a year
          <input
            type="number"
            min={0}
            value={volunteerHours}
            onChange={(event) => setVolunteerHours(event.target.value)}
            className="mt-2 w-full rounded-xl border border-[var(--color-neutral)] bg-white px-4 py-3 outline-none ring-[var(--color-primary)] focus:ring-2"
          />
        </label>
      </div>

      <article className="rounded-2xl border border-[var(--color-neutral)] bg-white p-6 shadow-sm">
        <h2 className="text-xl font-extrabold text-[var(--color-secondary)]">
          Partnership sketch
        </h2>
        <pre className="mt-4 whitespace-pre-wrap font-[inherit] text-sm leading-relaxed text-[var(--color-text-body)]">
          {sketch.body}
        </pre>
      </article>

      <a
        href={mailto}
        className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-secondary)] hover:bg-[var(--color-primary-dark)]"
      >
        Email this outline to Ustawi
      </a>

      <ToolDisclaimer>
        Illustrative only — not a quote, grant agreement, or employment offer.
        Confirm figures and placements with Ustawi and your own legal or HR
        teams.
      </ToolDisclaimer>
    </div>
  );
}
