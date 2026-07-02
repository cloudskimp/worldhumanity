import Link from "next/link";
import { org } from "@/lib/content";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-page gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo className="h-9 w-9" />
            <span className="font-display text-lg font-bold">{org.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            {org.tagline}
          </p>
          {org.ein && (
            <p className="mt-3 text-xs text-white/50">
              A 501(c)(3) nonprofit organization · EIN {org.ein}
            </p>
          )}
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-2 text-sm">
          {[
            { href: "/about", label: "About Us" },
            { href: "/our-work", label: "Our Work" },
            { href: "/gallery", label: "Gallery" },
            { href: "/get-involved", label: "Get Involved" },
            { href: "/donate", label: "Donate" },
            { href: "/contact", label: "Contact" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="py-1 text-white/80 hover:text-marigold">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="text-sm">
          <p className="font-display font-semibold text-white">Stay connected</p>
          <p className="mt-2 text-white/70">{org.email}</p>
          <p className="text-white/70"><a href={`tel:${org.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-marigold">{org.phone}</a></p>
          <p className="text-white/70">{org.city}</p>
          <div className="mt-4 flex gap-4">
            <a href={org.social.instagram} className="text-white/80 hover:text-marigold" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={org.social.linkedin} className="text-white/80 hover:text-marigold" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={org.social.x} className="text-white/80 hover:text-marigold" target="_blank" rel="noopener noreferrer">X</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {org.name} All rights reserved. · 100% volunteer-run.
      </div>
    </footer>
  );
}
