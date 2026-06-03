import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/20 bg-white/10 backdrop-blur-xl">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="inline-flex items-center transition-transform hover:scale-[1.02]"
        >
          <Image
            src="/ustawilogo.svg"
            alt="Ustawi Network logo"
            width={104}
            height={104}
            className="h-20 w-20 object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-[var(--color-neutral)] bg-white/90 p-1.5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-[var(--color-secondary)] transition-colors hover:bg-[var(--color-background)] hover:text-[var(--color-primary-dark)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/get-involved" className="shadow-sm">
            Partner With Us
          </Button>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
