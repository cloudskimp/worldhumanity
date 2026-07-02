import Link from "next/link";

export function Eyebrow({ children, tone = "ocean" }: { children: React.ReactNode; tone?: "ocean" | "heart" | "marigold" }) {
  const tones = { ocean: "bg-ocean-tint text-ocean", heart: "bg-heart-soft text-heart", marigold: "bg-marigold-soft text-[#8a5a10]" };
  return <span className={`inline-block rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-[0.12em] ${tones[tone]}`}>{children}</span>;
}

export function SectionHeading({ eyebrow, title, tone, children }: { eyebrow?: string; title: string; tone?: "ocean" | "heart" | "marigold"; children?: React.ReactNode }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-lg leading-relaxed text-ink/70">{children}</p>}
    </div>
  );
}

export function CTABand() {
  return (
    <section className="bg-ocean">
      <div className="mx-auto flex max-w-page flex-col items-start gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Your two hands can change a life.</h2>
          <p className="mt-2 max-w-xl text-white/80">Join a drive, pack a meal, walk a mile, or give what you can.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/get-involved" className="rounded-full bg-marigold px-6 py-3 font-bold text-ink transition-transform hover:-translate-y-0.5">Volunteer with us</Link>
          <Link href="/donate" className="rounded-full border-2 border-white/60 px-6 py-3 font-bold text-white transition-colors hover:bg-white hover:text-ocean">Donate</Link>
        </div>
      </div>
    </section>
  );
}
