"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-neutral)] bg-white text-[var(--color-secondary)] shadow-sm"
      >
        <span className="text-lg">{open ? "✕" : "☰"}</span>
      </button>

      {open ? (
        <div className="absolute left-0 right-0 top-full z-30 border-b border-[var(--color-neutral)] bg-white/95 px-6 py-5 backdrop-blur-xl shadow-lg">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-[var(--color-secondary)] hover:bg-[var(--color-background)]"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button href="/get-involved" size="sm">
                Partner With Us
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
