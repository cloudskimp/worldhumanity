import type { Metadata } from "next";
import { org } from "@/lib/content";
import { Eyebrow } from "@/components/Shared";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support World Humanity Inc. — 100% volunteer-run, so your gift goes straight to the work.",
};

const impacts = [
  { amount: "Any gift", what: "helps cover supplies for blood drives and packing events" },
  { amount: "Your time", what: "is a donation too — volunteer hours power everything we do" },
  { amount: "In-kind gifts", what: "snacks, water, and materials for events are always welcome" },
];

export default function DonatePage() {
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto max-w-page px-4 py-16 sm:px-6 lg:py-20">
          <Eyebrow tone="heart">Give today</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
            Every dollar goes to the work — because nobody here takes a salary.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
            {org.name} is fully volunteer-run. Your donation funds event supplies, outreach, and
            support for the communities we serve — not overhead.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-page px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-ocean p-8 text-white sm:p-10">
            <h2 className="font-display text-2xl font-bold">Make a donation</h2>
            <p className="mt-3 text-white/80">We're setting up online giving. In the meantime, contact us directly — check, Zelle, or in-kind.</p>
            <a href={`mailto:${org.email}?subject=I'd like to donate to World Humanity`} className="mt-6 inline-block rounded-full bg-marigold px-7 py-3.5 font-bold text-ink transition-transform hover:-translate-y-0.5">Email us to give</a>
            <p className="mt-6 text-xs text-white/60">Please consult your tax advisor about deductibility of contributions.</p>
          </div>
          <div className="grid content-start gap-4">
            <h2 className="font-display text-2xl font-bold text-ink">What your support does</h2>
            {impacts.map((im) => (
              <div key={im.amount} className="flex items-baseline gap-4 rounded-2xl bg-paper p-6">
                <span className="font-display text-lg font-extrabold text-heart">{im.amount}</span>
                <span className="text-ink/70">{im.what}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
