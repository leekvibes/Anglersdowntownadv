"use client";

import Image from "next/image";
import { IMAGES } from "@/lib/constants";

export function OceanBanner() {
  return (
    <section className="relative overflow-hidden select-none h-16 md:h-20">
      {/* Background: blurred still from the adventure photos */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.scenery2}
          alt=""
          fill
          sizes="100vw"
          className="object-cover scale-110 blur-[2px]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      {/* Scrolling ticker */}
      <div className="absolute inset-0 flex items-center overflow-hidden">
        <div className="flex whitespace-nowrap animate-[ticker_35s_linear_infinite]">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center shrink-0">
              {[
                "Brand New 2026 Fleet",
                "Jet Ski Rentals From $129/hr",
                "Wild Horses on Assateague",
                "Daily Dolphin Sightings",
                "Free Parking",
                "5-Star Google Rated",
                "Sunset Rides Available",
                "Family Owned & Operated",
                "Buy 3 Get 4th Free",
                "Pontoon Boats From $329",
                "Open Daily 8:30 AM \u2013 8:30 PM",
              ].map((text) => (
                <span key={`${copy}-${text}`} className="flex items-center gap-6 md:gap-8 mx-6 md:mx-8">
                  <span className="text-white/95 text-xs md:text-sm font-semibold uppercase tracking-[0.15em]">
                    {text}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-brand shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
