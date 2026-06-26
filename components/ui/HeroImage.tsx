import Image from "next/image";

type HeroImageProps = {
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
  priority?: boolean;
};

export function HeroImage({
  imageSrc,
  imageAlt,
  children,
  priority = false,
}: HeroImageProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-secondary)] text-white">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-secondary)]/90 via-[var(--color-secondary)]/60 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 lg:py-40">{children}</div>
    </section>
  );
}
