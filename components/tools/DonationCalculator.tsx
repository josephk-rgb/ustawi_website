"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ToolDisclaimer } from "@/components/tools/ToolDisclaimer";
import { donationImpactConfig } from "@/lib/tools";

function formatKes(value: number) {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  }).format(value);
}

export function DonationCalculator() {
  const [amount, setAmount] = useState("10000");
  const numericAmount = Number(amount.replace(/[^\d.]/g, "")) || 0;

  const impact = useMemo(() => {
    const hours = numericAmount / donationImpactConfig.costPerProgrammeHourKes;
    return {
      hours,
      cycles: hours / donationImpactConfig.hoursPerFullCycle,
      facilitators: hours / donationImpactConfig.facilitatorTrainingHours,
    };
  }, [numericAmount]);

  return (
    <div className="space-y-6">
      <label className="block text-sm font-semibold text-[var(--color-secondary)]">
        Gift amount (KES)
        <input
          type="number"
          min={0}
          inputMode="decimal"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          className="mt-2 w-full rounded-xl border border-[var(--color-neutral)] bg-white px-4 py-3 outline-none ring-[var(--color-primary)] focus:ring-2"
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-3">
        <article className="rounded-2xl border-l-4 border-l-[var(--color-teal-line)] bg-white p-5 shadow-sm">
          <p className="text-3xl font-black text-[var(--color-secondary)]">
            {impact.hours.toLocaleString("en-KE", { maximumFractionDigits: 1 })}
          </p>
          <p className="mt-1 text-sm text-[var(--color-text-body)]">
            estimated programme hours
          </p>
        </article>
        <article className="rounded-2xl border-l-4 border-l-[var(--color-teal-line)] bg-white p-5 shadow-sm">
          <p className="text-3xl font-black text-[var(--color-secondary)]">
            {impact.cycles.toLocaleString("en-KE", { maximumFractionDigits: 2 })}
          </p>
          <p className="mt-1 text-sm text-[var(--color-text-body)]">
            share of a 288-hour SOTP cycle
          </p>
        </article>
        <article className="rounded-2xl border-l-4 border-l-[var(--color-teal-line)] bg-white p-5 shadow-sm">
          <p className="text-3xl font-black text-[var(--color-secondary)]">
            {impact.facilitators.toLocaleString("en-KE", {
              maximumFractionDigits: 1,
            })}
          </p>
          <p className="mt-1 text-sm text-[var(--color-text-body)]">
            equivalent facilitator-training blocks
          </p>
        </article>
      </div>

      <p className="text-sm text-[var(--color-text-body)]">
        {formatKes(numericAmount)} at an illustrative {formatKes(donationImpactConfig.costPerProgrammeHourKes)}{" "}
        per programme hour. A full cycle is {donationImpactConfig.hoursPerFullCycle} hours over{" "}
        {donationImpactConfig.monthsPerFullCycle} months.
      </p>

      <ToolDisclaimer>
        These figures are educational estimates, not audited costs or a pledge
        amount. Talk to the team before treating any number as a quote.
      </ToolDisclaimer>

      <div className="flex flex-wrap gap-3">
        <Button href="/get-involved">Discuss a gift →</Button>
        <Button href="/contact" variant="secondary">
          Email Ustawi
        </Button>
      </div>
    </div>
  );
}
