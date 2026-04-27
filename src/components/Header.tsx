"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BOOKING_URL,
  LOGO_URL,
  PHONE,
  PHONE_HREF,
  SITE_NAME,
} from "@/lib/constants";

const MENU_LINKS = [
  { href: "/", label: "Home" },
  { href: "/jet-ski", label: "Jet Ski Rentals" },
  { href: "/pontoon", label: "Pontoon Boats" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/find-us", label: "Find Us" },
  { href: "/partners", label: "Partners" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/gift-cards", label: "Gift Cards" },
];

const DESKTOP_LINKS = [
  { href: "/jet-ski", label: "Jet Ski" },
  { href: "/pontoon", label: "Pontoon" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/find-us", label: "Find Us" },
  { href: "/gallery", label: "Gallery" },
];

function closeMenu() {
  const cb = document.getElementById("menu-cb") as HTMLInputElement | null;
  if (cb) cb.checked = false;
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <input type="checkbox" id="menu-cb" className="hidden" aria-hidden="true" />

      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-bg/85 backdrop-blur-xl border-b border-border"
            : "bg-gradient-to-b from-bg-deep/70 to-transparent"
        }`}
      >
        {/* Thin top bar, only visible when scrolled */}
        <div
          className={`hidden md:block overflow-hidden transition-all duration-300 ${
            scrolled ? "max-h-9 border-b border-border/60" : "max-h-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-1.5 flex justify-between items-center font-mono text-[11px] uppercase tracking-[0.14em]">
            <span className="text-ink-dim">
              <span className="text-accent">●</span> Mon–Sun · 8:30 AM — 8:30 PM · Free Parking
            </span>
            <a
              href={PHONE_HREF}
              className="text-ink hover:text-accent-hi transition-colors"
            >
              {PHONE}
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-24">
            {/* Logo — transparent PNG, sized for presence without dominating the bar */}
            <Link href="/" className="flex-shrink-0 -my-2">
              <Image
                src={LOGO_URL}
                alt={SITE_NAME}
                width={320}
                height={213}
                className="h-14 md:h-20 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {DESKTOP_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-dim hover:text-ink transition-colors"
                >
                  {link.label}
                  <span className="absolute left-3 right-3 bottom-1 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              ))}
              <Link
                href="/blog"
                className="ml-2 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-hi border border-accent/40 rounded-md hover:bg-accent/10 transition-colors"
              >
                Blog
              </Link>
            </nav>

            {/* Desktop Book CTA */}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center px-5 py-2.5 bg-accent text-bg font-bold text-sm rounded-md hover:bg-accent-hi transition-colors shadow-[0_0_20px_rgba(212,160,23,0.2)]"
            >
              Book Now
            </a>

            {/* Mobile right side */}
            <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
              <Link
                href="/blog"
                className="px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-hi border border-accent/40 rounded-md"
              >
                Blog
              </Link>

              <label
                htmlFor="menu-cb"
                className="flex items-center justify-center w-10 h-10 rounded-md border border-border bg-surface/60 text-ink cursor-pointer transition-colors hover:border-accent/40"
                role="button"
                aria-label="Open menu"
              >
                <svg className="w-5 h-5 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <label
        htmlFor="menu-cb"
        className="mobile-backdrop fixed inset-0 bg-bg-deep/70 backdrop-blur-sm z-[9998] lg:hidden opacity-0 pointer-events-none transition-opacity duration-300 cursor-default"
        aria-hidden="true"
      />

      {/* Slide-out menu */}
      <div className="mobile-menu fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-bg z-[9999] lg:hidden shadow-2xl overflow-y-auto transition-transform duration-300 ease-in-out translate-x-full border-l border-border">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            &gt; Menu
          </span>
          <label
            htmlFor="menu-cb"
            className="p-2 text-ink-dim hover:text-ink rounded-md cursor-pointer border border-border hover:border-accent/40 transition-colors"
            role="button"
            aria-label="Close menu"
          >
            <svg className="w-4 h-4 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
        </div>

        <nav className="p-3 space-y-0.5">
          {MENU_LINKS.map((link) =>
            link.label === "Blog" ? (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center justify-between px-3 py-3 text-sm font-semibold text-accent-hi border border-accent/40 bg-accent/5 rounded-md mt-2"
              >
                <span>Blog &amp; Field Notes</span>
                <span className="font-mono text-[10px] uppercase tracking-widest">NEW</span>
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex items-center justify-between px-3 py-3 text-[15px] text-ink hover:bg-surface rounded-md transition-colors group"
              >
                <span>{link.label}</span>
                <span className="font-mono text-[10px] text-ink-mute group-hover:text-accent transition-colors">
                  →
                </span>
              </Link>
            )
          )}

          <div className="pt-6 space-y-2 border-t border-border mt-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3.5 bg-accent text-bg font-bold text-center rounded-md hover:bg-accent-hi transition-colors"
            >
              Book Now
            </a>
            <a
              href={PHONE_HREF}
              className="block px-4 py-3 border border-border text-ink font-mono text-[12px] uppercase tracking-[0.14em] text-center rounded-md hover:border-accent/40 transition-colors"
            >
              Call {PHONE}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
