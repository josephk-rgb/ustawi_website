import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/content";

export function Footer() {
  return (
    <footer className="mt-auto bg-[var(--color-secondary)] text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <Image
            src="/ustawilogo.svg"
            alt="Ustawi Network logo"
            width={84}
            height={84}
            className="h-16 w-16 object-contain"
          />
          <p className="text-xl font-extrabold">Ustawi Network</p>
          <p className="text-sm text-white/85">
            Restoring dignity. Strengthening communities. Supporting
            transformation.
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
            Navigate
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:underline">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <p className="font-semibold uppercase tracking-wide text-[var(--color-primary)]">
            Contact
          </p>
          <p>{siteConfig.email}</p>
          <p>{siteConfig.phonePrimary}</p>
          <div className="flex gap-3 pt-1">
            {[
              { href: siteConfig.linkedIn, label: "in" },
              { href: siteConfig.facebook, label: "f" },
              { href: siteConfig.twitter, label: "x" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-sm font-bold text-white transition-colors hover:bg-white/20"
                aria-label={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 py-4 text-center text-xs text-white/80">
        © 2026 Ustawi Network. All rights reserved.
      </div>
    </footer>
  );
}
