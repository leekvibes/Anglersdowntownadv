"use client";

import { useState } from "react";
import Image from "next/image";
import { BOOKING_URL, IMAGES } from "@/lib/constants";

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
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[320px] max-h-[500px] flex items-end justify-center overflow-hidden">
        <Image src={IMAGES.scenery2} alt="Ocean City MD bay jet ski and pontoon boat rental area" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />
        <div className="relative z-10 text-center text-white px-4 pb-10 md:pb-14 w-full max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-yellow-brand text-dark text-xs font-bold uppercase tracking-widest rounded-full mb-4">Photo Gallery</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-3 drop-shadow-lg tracking-tight">Our Adventures</h1>
          <p className="text-lg md:text-xl text-white/90">Real photos from real adventures on the water</p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter tabs */}
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  filter === cat
                    ? "bg-blue-brand text-white"
                    : "bg-gray-light text-gray-text hover:bg-blue-light hover:text-blue-brand"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((photo, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="relative aspect-square rounded-xl overflow-hidden shadow-md group cursor-pointer"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(Math.max(0, lightbox - 1)); }}
            className="absolute left-4 text-white/80 hover:text-white"
            aria-label="Previous"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(Math.min(filtered.length - 1, lightbox + 1)); }}
            className="absolute right-4 text-white/80 hover:text-white"
            aria-label="Next"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="relative w-full max-w-4xl aspect-[4/3]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <Image src={IMAGES.scenery1} alt="Assateague Bay scenery from boat rental Ocean City MD" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-blue-dark/85" />
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Want to Be in Our Next Photo?</h2>
          <p className="text-white/90 text-lg mb-8">Book your adventure and make memories on the water!</p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-yellow-brand text-dark font-bold text-lg rounded-lg hover:bg-yellow-hover transition-colors shadow-xl inline-block">Book Now</a>
        </div>
      </section>
    </>
  );
}
