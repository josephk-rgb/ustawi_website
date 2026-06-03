import Image from "next/image";
import { imageRegistry } from "@/lib/images";

type PhotoGridProps = {
  imageKeys: string[];
};

export function PhotoGrid({ imageKeys }: PhotoGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {imageKeys.map((key) => {
        const item = imageRegistry[key];
        if (!item) return null;

        return (
          <figure
            key={item.key}
            className="group overflow-hidden rounded-2xl border border-[var(--color-neutral)] bg-white shadow-sm"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-[var(--color-primary)] opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
            </div>
            <figcaption className="px-4 py-3 text-sm text-[var(--color-text-body)]">
              {item.caption}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
