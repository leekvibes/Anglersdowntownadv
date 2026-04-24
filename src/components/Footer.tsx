import Link from "next/link";
import Image from "next/image";
import {
  LOGO_URL,
  PHONE,
  PHONE_HREF,
  EMAIL,
  ADDRESS,
  ADDRESS_URL,
  HOURS,
  SOCIAL,
  BOOKING_URL,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative bg-bg-deep text-ink pb-20 md:pb-0 border-t border-border overflow-hidden">
      {/* Ambient top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 py-14 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src={LOGO_URL}
                alt={SITE_NAME}
                width={200}
                height={70}
                className="h-14 w-auto"
              />
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-3">
              &gt; {SITE_TAGLINE}
            </p>
            <p className="text-sm text-ink-dim leading-relaxed">
              Jet ski and pontoon boat rentals in downtown Ocean City, Maryland. Brand-new
              equipment, guided tours on Assateague Bay, and private self-captained cruises.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute mb-5">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/jet-ski", label: "Jet Ski Rentals" },
                { href: "/pontoon", label: "Pontoon Boat Rentals" },
                { href: "/promotions", label: "Deals & Promotions" },
                { href: "/gallery", label: "Photo Gallery" },
                { href: "/faq", label: "FAQ & Policies" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
                { href: "/find-us", label: "Find Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-ink-dim hover:text-accent-hi transition-colors"
                  >
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[10px]">
                      ›
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute mb-5">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-[10px] text-accent mt-1 tracking-widest">TEL</span>
                <a href={PHONE_HREF} className="mono-num text-ink hover:text-accent-hi transition-colors">
                  {PHONE}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-[10px] text-accent mt-1 tracking-widest">@</span>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-ink-dim hover:text-accent-hi transition-colors break-all"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-[10px] text-accent mt-1 tracking-widest">LOC</span>
                <a
                  href={ADDRESS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-dim hover:text-accent-hi transition-colors"
                >
                  {ADDRESS}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-mono text-[10px] text-accent mt-1 tracking-widest">HRS</span>
                <span className="text-ink-dim">{HOURS}</span>
              </li>
              <li className="flex items-center gap-2.5 pt-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-success">
                  Free Parking Onsite
                </span>
              </li>
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute mb-5">
              Follow
            </h3>
            <div className="flex gap-2 mb-6">
              {[
                { href: SOCIAL.instagram, label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                { href: SOCIAL.facebook, label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" },
                { href: SOCIAL.tiktok, label: "TikTok", path: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.98a8.21 8.21 0 004.76 1.52V7.05a4.84 4.84 0 01-1-.36z" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 border border-border rounded-md flex items-center justify-center text-ink-dim hover:text-accent-hi hover:border-accent/50 hover:bg-accent/5 transition-colors"
                >
                  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24" style={{ width: 18, height: 18 }}>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-bg font-bold rounded-md hover:bg-accent-hi transition-colors shadow-[0_0_24px_rgba(212,160,23,0.2)] text-sm"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.14em]">Book</span>
              <span>Your Adventure</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em]">
          <p className="text-ink-mute">
            © {new Date().getFullYear()} {SITE_NAME} · All Rights Reserved
          </p>
          <p className="text-ink-mute">
            307 Dorchester St · Ocean City · MD 21842
          </p>
        </div>
      </div>
    </footer>
  );
}
