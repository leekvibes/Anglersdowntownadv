"use client";

import { useState } from "react";
import Image from "next/image";
import { BOOKING_URL, IMAGES, ADDRESS, ADDRESS_URL, PHONE, PHONE_HREF } from "@/lib/constants";
import { TerminalKicker } from "@/components/primitives/TerminalKicker";
import { GradientMesh } from "@/components/primitives/GradientMesh";

const categories = ["All", "Jet Ski", "Pontoon", "Scenery"] as const;
type Category = (typeof categories)[number];

const photos: { src: string; category: Category; alt: string }[] = [
  { src: IMAGES.jetski1, category: "Jet Ski", alt: "Jet ski riders on Assateague Bay Ocean City MD" },
  { src: IMAGES.jetski2, category: "Jet Ski", alt: "Jet ski rental action shot on open water Ocean City" },
  { src: IMAGES.jetski3, category: "Jet Ski", alt: "Guided jet ski tour in motion Ocean City Maryland" },
  { src: IMAGES.jetski4, category: "Jet Ski", alt: "Jet ski adventure near Assateague Island" },
  { src: IMAGES.jetski5, category: "Jet Ski", alt: "Brand-new jet ski rental on open bay water Ocean City" },
  { src: IMAGES.jetski6, category: "Jet Ski", alt: "Jet ski riding through waves Ocean City MD" },
  { src: IMAGES.jetski7, category: "Jet Ski", alt: "Group jet ski tour on Assateague Bay" },
  { src: IMAGES.jetski8, category: "Jet Ski", alt: "Thrilling jet ski experience Ocean City Maryland" },
  { src: IMAGES.pontoon1, category: "Pontoon", alt: "Group pontoon boat rental cruise Ocean City MD" },
  { src: IMAGES.pontoon2, category: "Pontoon", alt: "Pontoon boat cruise on Assateague Bay" },
  { src: IMAGES.pontoon3, category: "Pontoon", alt: "Pontoon boat near Assateague Island wild horses" },
  { src: IMAGES.pontoon4, category: "Pontoon", alt: "Pontoon boat rental docked in Ocean City Maryland" },
  { src: IMAGES.pontoon5, category: "Pontoon", alt: "Family pontoon boat rental on the bay" },
  { src: IMAGES.pontoon6, category: "Pontoon", alt: "Sunset pontoon boat cruise Ocean City MD" },
  { src: IMAGES.scenery1, category: "Scenery", alt: "Sunset over Assateague Bay Ocean City Maryland" },
  { src: IMAGES.scenery2, category: "Scenery", alt: "Ocean City MD waterfront golden sunset" },
  { src: IMAGES.scenery3, category: "Scenery", alt: "Dolphins in Assateague Bay near boat rentals" },
  { src: IMAGES.scenery4, category: "Scenery", alt: "Wild horses on Assateague Island from the water" },
  { src: IMAGES.scenery5, category: "Scenery", alt: "Panoramic view of Assateague Bay riding area" },
  { src: IMAGES.group1, category: "Jet Ski", alt: "Group jet ski outing with Angler Watersports" },
  { src: IMAGES.group2, category: "Pontoon", alt: "Group enjoying pontoon boat rental Ocean City" },
  { src: IMAGES.group3, category: "Jet Ski", alt: "Friends on jet ski guided tour Ocean City MD" },
  { src: IMAGES.group4, category: "Pontoon", alt: "Family pontoon boat ride on Assateague Bay" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? photos : photos.filter((p) => p.category === filter);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[55vh] min-h-[400px] max-h-[560px] flex items-center justify-center overflow-hidden">
        <Image src={IMAGES.scenery2} alt="Ocean City MD bay jet ski and pontoon boat rental area" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/70 via-bg/60 to-bg" />
        <GradientMesh variant="hero" />
        <div className="relative z-10 text-center text-ink px-4 max-w-4xl mx-auto">
          <TerminalKicker prefix="FEED" label="GALLERY" className="mb-5 justify-center" />
          <h1 className="text-4xl md:text-6xl font-bold leading-[0.95] mb-5 tracking-tight">
            Life on<br />
            <span className="text-accent-hi">the water.</span>
          </h1>
          <p className="text-base md:text-lg text-ink-dim max-w-2xl mx-auto">
            Real photos from real runs. Filter by category, click any image to expand.
          </p>
        </div>
      </section>

      {/* FILTERS + GRID */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <GradientMesh variant="subtle" grid={false} />
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Filter tabs */}
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
                  filter === cat
                    ? "bg-accent text-bg border border-accent"
                    : "bg-surface/60 text-ink-dim border border-border hover:text-ink hover:border-accent/50"
                }`}
              >
                {cat}
              </button>
            ))}
            <div className="ml-2 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute border border-border rounded-full">
              <span className="mono-num text-accent-hi">{filtered.length}</span> · photos
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((photo, i) => (
              <button
                key={`${photo.src}-${i}`}
                onClick={() => setLightbox(i)}
                className="relative aspect-square rounded-lg overflow-hidden border border-border group cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-[1.06] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-bg-deep/0 group-hover:bg-bg-deep/30 transition-colors" />
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] bg-bg/80 backdrop-blur-md border border-accent/40 rounded px-2 py-0.5 text-accent-hi">
                    {photo.category}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-bg-deep/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-ink-dim hover:text-ink z-10 p-2 rounded-md border border-border bg-bg/80 backdrop-blur-md"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(Math.max(0, lightbox - 1));
            }}
            className="absolute left-4 text-ink-dim hover:text-ink p-3 rounded-md border border-border bg-bg/80 backdrop-blur-md disabled:opacity-40"
            aria-label="Previous"
            disabled={lightbox === 0}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(Math.min(filtered.length - 1, lightbox + 1));
            }}
            className="absolute right-4 text-ink-dim hover:text-ink p-3 rounded-md border border-border bg-bg/80 backdrop-blur-md disabled:opacity-40"
            aria-label="Next"
            disabled={lightbox === filtered.length - 1}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div
            className="relative w-full max-w-5xl aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-bg/80 backdrop-blur-md border border-border rounded-md font-mono text-[10px] uppercase tracking-[0.16em] text-ink-dim">
            <span className="mono-num text-accent-hi">{lightbox + 1}</span> / {filtered.length} · {filtered[lightbox].category}
          </div>
        </div>
      )}

      {/* FINAL CTA */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <Image src={IMAGES.scenery1} alt="Assateague Bay scenery from boat rental Ocean City MD" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/90 via-bg-deep/85 to-bg-deep" />
        <GradientMesh variant="hero" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <TerminalKicker prefix="BOOK" label="YOUR_TURN" className="mb-5 justify-center" />
          <h2 className="text-4xl md:text-6xl font-bold text-ink mb-6 tracking-tight leading-[1.02]">
            Your turn in<br />
            <span className="text-accent-hi">the next photo.</span>
          </h2>
          <p className="text-base md:text-lg text-ink-dim mb-10 max-w-xl mx-auto">
            Book your adventure and make memories on the water.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-4 bg-accent text-bg font-bold text-lg rounded-md hover:bg-accent-hi transition-all shadow-[0_0_60px_rgba(212,160,23,0.3)]"
            >
              Book Now
            </a>
            <a
              href={PHONE_HREF}
              className="px-8 py-4 border border-border text-ink font-mono text-sm uppercase tracking-[0.14em] rounded-md hover:border-accent/50 transition-colors"
            >
              <span className="mono-num normal-case text-base">{PHONE}</span>
            </a>
          </div>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-mute">
            <a href={ADDRESS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent-hi transition-colors">
              ◆ {ADDRESS}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
