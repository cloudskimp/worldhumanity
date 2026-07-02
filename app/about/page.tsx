import type { Metadata } from "next";
import Link from "next/link";
import { org } from "@/lib/content";
import { Eyebrow, SectionHeading, CTABand } from "@/components/Shared";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${org.name} — a 100% volunteer-run nonprofit striving for the well-being of all people, everywhere.`,
};

const values = [
  { title: "Dignity for every person", body: "We believe all individuals deserve dignity, health, and opportunity. Every project we take on starts with that conviction." },
  { title: "Hands-on, not hands-off", body: "We don't just fundraise from a distance. We roll up our sleeves — at donor tables, packing lines, and walk routes." },
  { title: "Powered by volunteers", body: "There is no paid staff. Every hour of work is donated by neighbors who care, which means support goes where it's needed." },
  { title: "Better together", body: "We partner with trusted organizations — Carter BloodCare, the American Heart Association, and local charities — to multiply our impact." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto max-w-page px-4 py-16 sm:px-6 lg:py-20">
          <Eyebrow>About us</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">Ordinary people, showing up for one another.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">{org.mission}</p>
        </div>
      </section>
      <section className="mx-auto max-w-page px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading eyebrow="Our story" title="How we began" tone="marigold">
            World Humanity, Inc. started the way most good things do — with a small group of neighbors who wanted to help and decided not to wait. What began as showing up for a single community event grew into regular blood drives, food packaging days, and heart walks. Today we remain what we were on day one: fully volunteer-run, and open to anyone who wants to make a difference.
          </SectionHeading>
          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-paper p-6">
                <h3 className="font-display text-lg font-bold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-ocean-tint">
        <div className="mx-auto max-w-page px-4 py-16 sm:px-6">
          <SectionHeading eyebrow="Our partners" title="Who we work alongside">
            Impact is a team sport. We're grateful to organize and volunteer alongside these organizations and the many local charities who welcome our crew.
          </SectionHeading>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Carter BloodCare", "American Heart Association", "Local food charities & community partners"].map((p) => (
              <span key={p} className="rounded-full bg-white px-5 py-2.5 font-semibold text-ink shadow-sm ring-1 ring-ink/5">{p}</span>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-sm text-ink/60">Partner names are listed to describe the events our volunteers have participated in and do not imply endorsement. <Link href="/contact" className="font-semibold text-ocean hover:underline">Partner with us →</Link></p>
        </div>
      </section>
      <CTABand />
    </>
  );
}
