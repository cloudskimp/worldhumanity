import type { Metadata } from "next";
import Image from "next/image";
import { gallery } from "@/lib/content";
import { Eyebrow, CTABand } from "@/components/Shared";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Our story in pictures — blood drives, food packaging events, heart walks, and community moments.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto max-w-page px-4 py-16 sm:px-6 lg:py-20">
          <Eyebrow tone="marigold">Our story in pictures</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">Moments from the work</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">Donor tables, packing lines, walk routes, and the volunteers who make it all happen.</p>
        </div>
      </section>
      <section className="mx-auto max-w-page px-4 py-14 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g) => (
            <figure key={g.src} className="group">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-paper">
                <Image src={g.src} alt={g.caption} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>
              <figcaption className="px-1 pt-3">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-ocean">{g.event}</p>
                <p className="mt-1 text-sm text-ink/70">{g.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
