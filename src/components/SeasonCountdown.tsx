"use client";

import { useEffect, useState } from "react";
import { BOOKING_URL } from "@/lib/constants";

const SEASON_OPEN = new Date("June 1, 2026 08:30:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

function getTimeLeft(): TimeLeft | null {
  const diff = SEASON_OPEN.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
  };
}

export function SeasonCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => {
      const tl = getTimeLeft();
      if (!tl) {
        clearInterval(interval);
        setTimeLeft(null);
      } else {
        setTimeLeft(tl);
      }
    }, 60_000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted || !timeLeft || dismissed) return null;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[90] group hidden md:block"
    >
      <div className="relative bg-bg/90 backdrop-blur-xl text-ink pl-4 pr-10 py-3 rounded-md border border-border shadow-2xl flex items-center gap-3 hover:border-accent/60 hover:bg-surface transition-all animate-[fadeInUp_0.5s_ease-out]">
        {/* Pulse dot */}
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
        </span>

        <div className="flex flex-col leading-tight">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent">
            Season Opens
          </span>
          <span className="mono-num text-sm font-bold whitespace-nowrap">
            {pad(timeLeft.days)}d · {pad(timeLeft.hours)}h · {pad(timeLeft.minutes)}m
          </span>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDismissed(true);
          }}
          className="absolute top-1/2 -translate-y-1/2 right-2 w-5 h-5 flex items-center justify-center rounded text-ink-mute hover:text-ink hover:bg-surface-2 transition-colors"
          aria-label="Dismiss countdown"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </a>
  );
}
