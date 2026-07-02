"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { org } from "@/lib/content";
import Logo from "./Logo";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-work", label: "Our Work" },
  { href: "/gallery", label: "Gallery" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Logo className="h-9 w-9" />
          <span className="font-display text-lg font-bold leading-tight text-ink">
            World Humanity
            <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-ocean">Volunteer-run nonprofit</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className={`text-sm font-semibold transition-colors hover:text-ocean ${pathname === item.href ? "text-ocean" : "text-ink/80"}`}>{item.label}</Link>
          ))}
          <Link href={org.donateUrl} className="rounded-full bg-marigold px-5 py-2.5 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5 hover:shadow-md">Donate</Link>
        </nav>
        <button className="rounded-md p-2 lg:hidden" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="border-t border-ink/10 bg-white px-4 pb-5 pt-2 lg:hidden" aria-label="Mobile">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={`block py-2.5 text-base font-semibold ${pathname === item.href ? "text-ocean" : "text-ink/80"}`}>{item.label}</Link>
          ))}
          <Link href={org.donateUrl} onClick={() => setOpen(false)} className="mt-3 block rounded-full bg-marigold px-5 py-3 text-center text-base font-bold text-ink">Donate</Link>
        </nav>
      )}
    </header>
  );
}
