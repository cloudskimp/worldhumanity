import type { Metadata } from "next";
import { org } from "@/lib/content";
import { Eyebrow } from "@/components/Shared";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${org.name} — volunteer, partner, or donate.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto max-w-page px-4 py-16 sm:px-6 lg:py-20">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">Say hello — we'd love to hear from you.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">Questions, volunteer sign-ups, partnership ideas, or a cause that needs hands — reach out any time.</p>
        </div>
      </section>
      <section className="mx-auto max-w-page px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <a href={`mailto:${org.email}`} className="rounded-2xl bg-paper p-7 transition-all hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-display text-lg font-bold text-ink">Email us</h2>
            <p className="mt-2 break-all font-semibold text-ocean">{org.email}</p>
            <p className="mt-2 text-sm text-ink/60">Best for volunteering, donations, and partnerships.</p>
          </a>
          <a href={`tel:${org.phone.replace(/[^0-9+]/g, "")}`} className="rounded-2xl bg-paper p-7 transition-all hover:-translate-y-1 hover:shadow-md">
            <h2 className="font-display text-lg font-bold text-ink">Call us</h2>
            <p className="mt-2 font-semibold text-ocean">{org.phone}</p>
            <p className="mt-2 text-sm text-ink/60">Give us a call — we're happy to chat.</p>
          </a>
          <div className="rounded-2xl bg-paper p-7">
            <h2 className="font-display text-lg font-bold text-ink">Follow along</h2>
            <div className="mt-2 flex flex-col gap-1.5 font-semibold text-ocean">
              <a href={org.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
              <a href={org.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
              <a href={org.social.x} target="_blank" rel="noopener noreferrer" className="hover:underline">X (Twitter)</a>
            </div>
            <p className="mt-2 text-sm text-ink/60">Event dates are announced here first.</p>
          </div>
          <div className="rounded-2xl bg-paper p-7">
            <h2 className="font-display text-lg font-bold text-ink">Where we serve</h2>
            <p className="mt-2 font-semibold text-ocean">{org.address}</p>
            <p className="mt-2 text-sm text-ink/60">Our volunteers serve locally, with a heart for people everywhere.</p>
          </div>
        </div>
      </section>
    </>
  );
}
