import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { SITE_URL, IMAGES, BOOKING_URL, ADDRESS, ADDRESS_URL } from "@/lib/constants";
import { getAllPosts, formatDate, estimateReadingMinutes } from "@/lib/blog";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TerminalKicker } from "@/components/primitives/TerminalKicker";
import { GradientMesh } from "@/components/primitives/GradientMesh";

export const metadata: Metadata = {
  title: "Field Notes | Blog | Angler Watersports Ocean City MD",
  description:
    "Bay conditions, wildlife sightings, route notes, and stories from Angler Watersports in Ocean City, Maryland. Updated through the season.",
  keywords: [
    "Angler Watersports blog",
    "ocean city md jet ski blog",
    "assateague bay conditions",
    "ocean city watersports news",
    "wild horses assateague sighting",
  ],
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    images: ["/og-logo.png"],
    title: "Field Notes — Angler Watersports Blog",
    description:
      "Bay conditions, wildlife sightings, route notes from Angler Watersports.",
    url: `${SITE_URL}/blog`,
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* HERO */}
      <section className="relative h-[50vh] min-h-[380px] max-h-[540px] flex items-center justify-center overflow-hidden">
        <Image
          src={IMAGES.scenery3}
          alt="Assateague Bay — Angler Watersports field notes"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/70 via-bg/60 to-bg" />
        <GradientMesh variant="hero" />
        <div className="relative z-10 text-center text-ink px-4 max-w-4xl mx-auto">
          <TerminalKicker prefix="JOURNAL" label="FIELD_NOTES" className="mb-5 justify-center" />
          <h1 className="text-4xl md:text-6xl font-bold leading-[0.95] mb-5 tracking-tight">
            Field<br />
            <span className="text-accent-hi">Notes.</span>
          </h1>
          <p className="text-base md:text-lg text-ink-dim max-w-2xl mx-auto">
            Bay conditions, wildlife sightings, route notes, and stories from the dock.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <GradientMesh variant="subtle" grid={false} />
        <div className="relative max-w-5xl mx-auto px-4">
          {posts.length === 0 ? (
            <ScrollReveal className="text-center py-16">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-3">
                &gt; NO_POSTS_YET
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-ink tracking-tight mb-3">
                First post landing soon.
              </h2>
              <p className="text-ink-dim max-w-md mx-auto">
                Check back through the season for bay updates and ride-day stories.
              </p>
            </ScrollReveal>
          ) : (
            <div className="space-y-4">
              {posts.map((post, i) => {
                const minutes = post.readingMinutes ?? estimateReadingMinutes(post.body);
                return (
                  <ScrollReveal key={post.slug} delay={i * 60}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group block bg-surface/40 border border-border rounded-xl overflow-hidden hover:border-accent/40 transition-colors"
                    >
                      <div className="grid md:grid-cols-[280px_1fr] gap-0">
                        {post.cover && (
                          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[200px] border-b md:border-b-0 md:border-r border-border">
                            <Image
                              src={post.cover}
                              alt={post.coverAlt ?? post.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 280px"
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/30 to-transparent" />
                          </div>
                        )}
                        <div className="p-6 md:p-8 flex flex-col">
                          <div className="flex items-center gap-3 mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-dim">
                            <span className="text-accent">●</span>
                            <span>{formatDate(post.date)}</span>
                            <span className="text-ink-mute">·</span>
                            <span>{minutes} min read</span>
                            {post.tags && post.tags.length > 0 && (
                              <>
                                <span className="text-ink-mute">·</span>
                                <span className="text-accent-hi">
                                  {post.tags.slice(0, 2).join(" / ")}
                                </span>
                              </>
                            )}
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-3 tracking-tight group-hover:text-accent-hi transition-colors">
                            {post.title}
                          </h2>
                          <p className="text-ink-dim text-base leading-relaxed flex-1">
                            {post.excerpt}
                          </p>
                          <div className="mt-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent group-hover:gap-3 transition-all">
                            Read post
                            <span className="mono-num">→</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <Image
          src={IMAGES.scenery2}
          alt="Sunset on Assateague Bay"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/90 via-bg-deep/85 to-bg-deep" />
        <GradientMesh variant="hero" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <ScrollReveal>
            <TerminalKicker prefix="BOOK" label="THE_RIDE" className="mb-5 justify-center" />
            <h2 className="text-4xl md:text-6xl font-bold text-ink mb-6 tracking-tight leading-[1.02]">
              Done reading?<br />
              <span className="text-accent-hi">Get on the water.</span>
            </h2>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-4 bg-accent text-bg font-bold text-lg rounded-md hover:bg-accent-hi transition-all shadow-[0_0_60px_rgba(212,160,23,0.3)]"
            >
              Book Your Adventure
            </a>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-mute">
              <a href={ADDRESS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent-hi transition-colors">
                ◆ {ADDRESS}
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
