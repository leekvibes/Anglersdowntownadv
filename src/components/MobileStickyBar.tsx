"use client";

import { BOOKING_URL, PHONE_HREF } from "@/lib/constants";

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-bg/95 backdrop-blur-xl border-t border-border shadow-[0_-8px_24px_rgba(0,0,0,0.4)]">
      <div className="flex">
        <a
          href={PHONE_HREF}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-ink font-mono text-[11px] uppercase tracking-[0.14em] border-r border-border active:bg-surface transition-colors"
        >
          <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          Call
        </a>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-accent text-bg font-bold text-sm active:bg-accent-hi transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
          Book Now
        </a>
      </div>
    </div>
  );
}
