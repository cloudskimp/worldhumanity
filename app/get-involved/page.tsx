import type { Metadata } from "next";
import Link from "next/link";
import { org, upcomingEvents } from "@/lib/content";
import { Eyebrow, SectionHeading } from "@/components/Shared";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Volunteer with World Humanity Inc. — join a blood drive, food packaging event, or heart walk.",
};

const ways = [
  { title: "Join an event", body: "Show up for a blood drive, packing day, or heart walk. Most events need help for just 2–4 hours — no experience required." },
  { title: "Donate blood", body: "Healthy adults can donate every 8 weeks. We'll help you register with Carter BloodCare and make your first donation easy." },
  { title: "Bring your group", body: "Families, school clubs, faith groups, and workplace teams are perfect for packing events. We'll coordinate a slot for your crew." },
  { title: "Lend a skill", body: "Photographer? Organizer? Social media savvy? Volunteer-run means every skill matters. Tell us what you're good at." },
];

export default function GetInvolvedPage() {
  const volunteerHref = org.volunteerFormUrl || `mailto:${org.email}?subject=I want to volunteer with World Humanity`;
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto max-w-page px-4 py-16 sm:px-6 lg:py-20">
          <Eyebrow>Get involved</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">There's a place for you here.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">We're 100% volunteer-run, which means the organization literally is its volunteers. Whether you have two hours or two weekends a month, you can make a difference.</p>
          <a href={volunteerHref} className="mt-8 inline-block rounded-full bg-ocean px-7 py-3.5 font-bold text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg">Sign up to volunteer</a>
        </div>
      </section>
      <section className="mx-auto max-w-page px-4 py-16 sm:px-6">
        <SectionHeading eyebrow="Ways to help" title="Four easy ways to start" tone="marigold" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {ways.map((w, i) => (
            <div key={w.title} className="rounded-2xl bg-paper p-7">
              <span className="font-display text-sm font-bold text-marigold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-1 font-display text-xl font-bold text-ink">{w.title}</h3>
              <p className="mt-2 leading-relaxed text-ink/70">{w.body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-ocean-tint">
        <div className="mx-auto max-w-page px-4 py-16 sm:px-6">
          <SectionHeading eyebrow="Upcoming" title="Upcoming events">Dates are announced on our social channels and by email. Reach out and we'll keep you posted.</SectionHeading>
          <div className="mt-8 grid gap-4">
            {upcomingEvents.map((e) => (
              <div key={e.title} className="flex flex-col gap-2 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink/5 sm:flex-row sm:items-center sm:gap-8">
                <span className="shrink-0 rounded-full bg-marigold-soft px-4 py-1.5 text-sm font-bold text-[#8a5a10]">{e.date}</span>
                <div><h3 className="font-display text-lg font-bold text-ink">{e.title}</h3><p className="text-sm text-ink/60">{e.location} — {e.description}</p></div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-ink/60">Want an email when dates are set? <Link href="/contact" className="font-semibold text-ocean hover:underline">Contact us</Link> and we'll add you to the list.</p>
        </div>
      </section>
    </>
  );
}
