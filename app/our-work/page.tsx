import type { Metadata } from "next";
import Link from "next/link";
import { programs } from "@/lib/content";
import { Eyebrow, CTABand } from "@/components/Shared";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Blood donation drives with Carter BloodCare, food packaging for charitable organizations, Heart Walks with the American Heart Association, and community well-being projects.",
};

const icons: Record<string, JSX.Element> = {
  "blood-drives": <path d="M24 6C24 6 12 20 12 29a12 12 0 0 0 24 0C36 20 24 6 24 6Z" fill="currentColor" opacity="0.9" />,
  "food-packaging": <g fill="currentColor" opacity="0.9"><rect x="8" y="18" width="32" height="22" rx="2" /><path d="M8 18 L14 8 H34 L40 18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /><rect x="20" y="18" width="8" height="10" fill="#fff" opacity="0.35" /></g>,
  "heart-walks": <path d="M24 40S8 29 8 18a8.5 8.5 0 0 1 16-4 8.5 8.5 0 0 1 16 4c0 11-16 22-16 22Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />,
  "community-wellbeing": <g fill="currentColor" opacity="0.9"><circle cx="24" cy="14" r="6" /><path d="M10 40c0-8 6-13 14-13s14 5 14 13" /></g>,
};

const accentText: Record<string, string> = { heart: "text-heart", marigold: "text-[#c07f16]", ocean: "text-ocean" };
const accentBg: Record<string, string> = { heart: "bg-heart-soft", marigold: "bg-marigold-soft", ocean: "bg-ocean-tint" };

export default function OurWorkPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto max-w-page px-4 py-16 sm:px-6 lg:py-20">
          <Eyebrow>Our work</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">Real needs. Real hands. Real impact.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">Everything we do is practical and local: blood for hospital shelves, meals for hungry families, funds and miles for heart health, and help wherever our community needs it.</p>
          <nav className="mt-8 flex flex-wrap gap-2" aria-label="Programs">
            {programs.map((p) => (<a key={p.slug} href={`#${p.slug}`} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink/70 ring-1 ring-ink/10 hover:text-ocean">{p.title}</a>))}
          </nav>
        </div>
      </section>
      <div className="mx-auto max-w-page px-4 sm:px-6">
        {programs.map((p, i) => (
          <section key={p.slug} id={p.slug} className={`grid scroll-mt-24 items-center gap-10 py-16 lg:grid-cols-2 lg:py-20 ${i > 0 ? "border-t border-ink/10" : ""}`}>
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <p className={`text-sm font-bold uppercase tracking-[0.12em] ${accentText[p.accent]}`}>{p.partner}</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">{p.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/70">{p.summary}</p>
              <p className="mt-4 leading-relaxed text-ink/70">{p.details}</p>
              <Link href="/get-involved" className="mt-6 inline-block rounded-full bg-ocean px-6 py-3 font-bold text-white transition-transform hover:-translate-y-0.5">{p.cta}</Link>
            </div>
            <div className={`flex items-center justify-center rounded-3xl p-14 ${accentBg[p.accent]} ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <svg viewBox="0 0 48 48" className={`h-32 w-32 ${accentText[p.accent]}`} aria-hidden="true">{icons[p.slug]}</svg>
            </div>
          </section>
        ))}
      </div>
      <CTABand />
    </>
  );
}
