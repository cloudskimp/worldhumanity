import Link from "next/link";
import Image from "next/image";
import { org, stats, programs, gallery, tickerItems } from "@/lib/content";
import { Eyebrow, SectionHeading, CTABand } from "@/components/Shared";
import { HERO_LOGO_SRC } from "@/lib/logo-data";

function HeroLogo() {
  return (
    <div className="flex items-center justify-center">
      <img src={HERO_LOGO_SRC} alt="World Humanity Inc." className="w-64 sm:w-80 lg:w-96 drop-shadow-lg" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto grid max-w-page items-center gap-10 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:pb-24 lg:pt-20">
          <div>
            <div className="rise-in"><Eyebrow tone="marigold">100% volunteer-run since day one</Eyebrow></div>
            <h1 className="rise-in rise-in-delay-1 mt-5 font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              Well-being for{" "}<span className="text-ocean">all people,</span>{" "}
              <span className="relative inline-block">everywhere.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2 7 Q 100 -2 198 6" stroke="#E8A33D" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="rise-in rise-in-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
              {org.shortName} is a coalition of neighbors who show up — hosting blood drives with Carter BloodCare, packing meals for families, and walking for hearts with the American Heart Association. No paid staff. Just people helping people.
            </p>
            <div className="rise-in rise-in-delay-3 mt-8 flex flex-wrap gap-3">
              <Link href="/get-involved" className="rounded-full bg-ocean px-7 py-3.5 font-bold text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg">Volunteer with us</Link>
              <Link href="/our-work" className="rounded-full border-2 border-ink/15 bg-white px-7 py-3.5 font-bold text-ink transition-colors hover:border-ocean hover:text-ocean">See our work</Link>
            </div>
          </div>
          <div className="hidden lg:block"><HeroLogo /></div>
        </div>
        <div className="border-y border-ink/10 bg-white py-3" aria-hidden="true">
          <div className="ticker-track">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="flex items-center whitespace-nowrap px-6 text-sm font-semibold text-ink/60">
                <span className="mr-6 h-1.5 w-1.5 rounded-full bg-marigold" />{item}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-page px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading eyebrow="Who we are" title="A nonprofit powered entirely by volunteers">{org.mission}</SectionHeading>
          <div className="grid content-start gap-4">
            {stats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-5 rounded-2xl bg-paper p-6">
                <span className="font-display text-4xl font-extrabold text-ocean">{s.value}</span>
                <span className="text-ink/70">{s.label}</span>
              </div>
            ))}
            <p className="px-2 text-xs text-ink/40">Totals across our community activities to date.</p>
          </div>
        </div>
      </section>
      <section className="bg-paper py-16 lg:py-20">
        <div className="mx-auto max-w-page px-4 sm:px-6">
          <SectionHeading eyebrow="Our work" title="Four ways we show up">Hands-on service, alongside partners who share our mission.</SectionHeading>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {programs.map((p) => {
              const accentBar = p.accent === "heart" ? "bg-heart" : p.accent === "marigold" ? "bg-marigold" : "bg-ocean";
              return (
                <Link key={p.slug} href={`/our-work#${p.slug}`} className="group relative overflow-hidden rounded-2xl bg-white p-7 shadow-sm ring-1 ring-ink/5 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <span className={`absolute inset-x-0 top-0 h-1.5 ${accentBar}`} />
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink/50">{p.partner}</p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-ink group-hover:text-ocean">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink/70">{p.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-semibold text-ocean">Learn more
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-page px-4 py-16 sm:px-6 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Our story in pictures" title="The work, in the moment" />
          <Link href="/gallery" className="font-semibold text-ocean hover:underline">View full gallery →</Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {gallery.slice(0, 3).map((g) => (
            <figure key={g.src} className="group overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                <Image src={g.src} alt={g.caption} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 33vw" />
              </div>
              <figcaption className="px-1 pt-3 text-sm text-ink/60">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
