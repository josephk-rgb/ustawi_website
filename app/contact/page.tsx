import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HeroImage } from "@/components/ui/HeroImage";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/content";
import { imageRegistry } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ustawi Network to discuss partnerships, donations, volunteering, and programme collaboration.",
};

export default function ContactPage() {
  const heroImage = imageRegistry["official-community-engagement"];

  return (
    <div className="space-y-12 py-14">
      <HeroImage imageSrc={heroImage.src} imageAlt={heroImage.alt}>
        <SectionHeader
          eyebrow="Reach Us"
          title="Let's talk about what's possible."
          description="Whether you want to partner, donate, volunteer, or learn more, we'd love to hear from you."
          size="hero"
          dark
        />
      </HeroImage>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-[var(--color-neutral)] bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-[var(--color-secondary)]">
            Contact Details
          </h2>
          <ul className="mt-4 space-y-3 text-[var(--color-text-body)]">
            <li>
              <strong>Email:</strong> {siteConfig.email}
            </li>
            <li>
              <strong>Phone:</strong> {siteConfig.phoneSecondary}
            </li>
            <li>
              <strong>Location:</strong> {siteConfig.location} (serving
              correctional facilities across Kenya)
            </li>
            <li className="inline-flex rounded-full bg-[var(--color-background)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-secondary)]">
              📍 Kisumu County
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
                className="underline"
                href={siteConfig.linkedIn}
                target="_blank"
                rel="noreferrer"
              >
                Ustawi Network on LinkedIn
              </a>
            </li>
          </ul>
        </article>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-4 rounded-2xl border border-[var(--color-neutral)] bg-white p-7 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-[var(--color-secondary)]">
            Send us a message
          </h2>
          <input
            type="hidden"
            name="access_key"
            value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ""}
          />
          <input type="hidden" name="subject" value="Website Contact Form" />
          <input
            type="hidden"
            name="redirect"
            value={`${siteConfig.siteUrl}/contact/`}
          />
          <label className="block text-sm font-semibold text-[var(--color-secondary)]">
            Name
            <input
              className="mt-1 w-full rounded-xl border border-[var(--color-neutral)] px-4 py-3 outline-none ring-[var(--color-primary)] focus:ring-2"
              type="text"
              name="name"
              required
            />
          </label>
          <label className="block text-sm font-semibold text-[var(--color-secondary)]">
            Email
            <input
              className="mt-1 w-full rounded-xl border border-[var(--color-neutral)] px-4 py-3 outline-none ring-[var(--color-primary)] focus:ring-2"
              type="email"
              name="email"
              required
            />
          </label>
          <label className="block text-sm font-semibold text-[var(--color-secondary)]">
            Organisation (optional)
            <input
              className="mt-1 w-full rounded-xl border border-[var(--color-neutral)] px-4 py-3 outline-none ring-[var(--color-primary)] focus:ring-2"
              type="text"
              name="organization"
            />
          </label>
          <label className="block text-sm font-semibold text-[var(--color-secondary)]">
            Message
            <textarea
              className="mt-1 min-h-32 w-full rounded-xl border border-[var(--color-neutral)] px-4 py-3 outline-none ring-[var(--color-primary)] focus:ring-2"
              name="message"
              required
            />
          </label>
          <Button type="submit" size="lg" className="mt-2">
            Send Message
          </Button>
        </form>
      </section>
    </div>
  );
}
