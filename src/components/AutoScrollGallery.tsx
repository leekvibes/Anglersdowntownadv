"use client";

import Image from "next/image";

interface AutoScrollGalleryProps {
  images: { src: string; alt: string }[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
}

export function AutoScrollGallery({
  images,
  direction = "left",
  speed = "normal",
}: AutoScrollGalleryProps) {
  const speedClass =
    speed === "slow"
      ? "[animation-duration:60s]"
      : speed === "fast"
        ? "[animation-duration:25s]"
        : "";

  const animClass =
    direction === "left"
      ? `auto-scroll-left ${speedClass}`
      : `auto-scroll-right ${speedClass}`;

  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden">
      <div className={`flex gap-3 w-max ${animClass}`}>
        {doubled.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="flex-shrink-0 w-72 h-52 md:w-80 md:h-60 relative rounded-md overflow-hidden border border-border group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="320px"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/30 via-transparent to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}
