import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  SITE_URL,
  SITE_NAME,
  BOOKING_URL,
  PHONE,
  PHONE_HREF,
  ADDRESS,
  ADDRESS_URL,
} from "@/lib/constants";
import {
  getAllPostSlugs,
  getAllPosts,
  getPost,
  formatDate,
  estimateReadingMinutes,
} from "@/lib/blog";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TerminalKicker } from "@/components/primitives/TerminalKicker";
import { GradientMesh } from "@/components/primitives/GradientMesh";
import { breadcrumbSchema } from "@/components/StructuredData";

/* Pre-render every post's static page at build time. */
export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: `${post.title} | ${SITE_NAME}`,
    description: post.excerpt,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      tags: post.tags,
      images: [post.cover ?? "/og-logo.png"],
    },
  };
}

/* ── BlogPosting JSON-LD — gets the post into Google article carousels ── */
function blogPostingSchema(post: {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  author?: string;
  cover?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author ?? SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-logo.png`,
      },
    },
    image: post.cover ? `${SITE_URL}${post.cover}` : `${SITE_URL}/og-logo.png`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

/* MDX components — style headings, paragraphs, lists to match Angler aesthetic. */
const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl md:text-4xl font-bold text-ink mt-12 mb-5 tracking-tight" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl md:text-3xl font-bold text-ink mt-10 mb-4 tracking-tight" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl md:text-2xl font-bold text-ink mt-8 mb-3 tracking-tight" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-ink-dim text-base md:text-lg leading-relaxed mb-5" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-accent-hi hover:underline" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="space-y-2 my-5 ml-5 list-disc marker:text-accent" {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="space-y-2 my-5 ml-5 list-decimal marker:text-accent marker:font-mono" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-ink-dim text-base md:text-lg leading-relaxed pl-1" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="text-ink font-semibold" {...props} />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-2 border-accent pl-5 my-6 text-ink italic" {...props} />
  ),
  hr: () => <hr className="my-10 border-border" />,
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="font-mono text-sm bg-surface px-1.5 py-0.5 rounded text-accent-hi" {...props} />
  ),
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const minutes = post.readingMinutes ?? estimateReadingMinutes(post.body);

  // Find prev/next posts in chronological order for footer nav.
  const allPosts = getAllPosts();
  const idx = allPosts.findIndex((p) => p.slug === slug);
  const newer = idx > 0 ? allPosts[idx - 1] : null;
  const older = idx < allPosts.length - 1 ? allPosts[idx + 1] : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema(post)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: SITE_URL },
              { name: "Blog", url: `${SITE_URL}/blog` },
              { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
            ])
          ),
        }}
      />

      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16 border-b border-border overflow-hidden">
        <GradientMesh variant="subtle" />
        <div className="relative max-w-3xl mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim hover:text-accent-hi transition-colors mb-6"
          >
            <span>←</span> All Field Notes
          </Link>

          <div className="flex items-center gap-3 mb-5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-dim">
            <span className="text-accent">●</span>
            <span>{formatDate(post.date)}</span>
            <span className="text-ink-mute">·</span>
            <span>{minutes} min read</span>
            {post.tags && post.tags.length > 0 && (
              <>
                <span className="text-ink-mute">·</span>
                <span className="text-accent-hi">{post.tags.join(" / ")}</span>
              </>
            )}
          </div>

          {post.isDraft && (
            <div className="mb-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-warn/10 border border-warn/40 font-mono text-[10px] uppercase tracking-[0.18em] text-warn">
              <span>●</span> Draft preview · not visible in production
            </div>
          )}

          <h1 className="text-3xl md:text-5xl font-bold text-ink leading-[1.05] tracking-tight mb-4">
            {post.title}
          </h1>
          <p className="text-ink-dim text-lg md:text-xl leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* COVER IMAGE */}
      {post.cover && (
        <section className="border-b border-border">
          <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-border">
              <Image
                src={post.cover}
                alt={post.coverAlt ?? post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* BODY */}
      <article className="relative py-12 md:py-16 overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-4">
          <div className="prose-angler">
            <MDXRemote source={post.body} components={mdxComponents} />
          </div>
        </div>
      </article>

      {/* PREV / NEXT NAV */}
      {(newer || older) && (
        <section className="border-t border-border bg-bg-deep">
          <div className="max-w-3xl mx-auto px-4 py-10 grid sm:grid-cols-2 gap-3">
            {older ? (
              <Link
                href={`/blog/${older.slug}`}
                className="group bg-surface/40 border border-border rounded-lg p-5 hover:border-accent/40 transition-colors"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute mb-2">
                  ← Older Post
                </p>
                <p className="text-ink font-semibold leading-snug group-hover:text-accent-hi transition-colors">
                  {older.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {newer ? (
              <Link
                href={`/blog/${newer.slug}`}
                className="group bg-surface/40 border border-border rounded-lg p-5 hover:border-accent/40 transition-colors text-right"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute mb-2">
                  Newer Post →
                </p>
                <p className="text-ink font-semibold leading-snug group-hover:text-accent-hi transition-colors">
                  {newer.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-20 md:py-24 overflow-hidden border-t border-border">
        <GradientMesh variant="subtle" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <TerminalKicker prefix="BOOK" label="THE_RIDE" className="mb-5 justify-center" />
            <h2 className="text-3xl md:text-5xl font-bold text-ink mb-5 tracking-tight leading-[1.05]">
              Ready for the<br />
              <span className="text-accent-hi">real thing?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-8">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-3.5 bg-accent text-bg font-bold rounded-md hover:bg-accent-hi transition-colors shadow-[0_0_40px_rgba(212,160,23,0.2)]"
              >
                Book Online
              </a>
              <a
                href={PHONE_HREF}
                className="px-7 py-3.5 border border-border text-ink font-mono text-sm uppercase tracking-[0.14em] rounded-md hover:border-accent/50 transition-colors"
              >
                <span className="mono-num normal-case text-base">{PHONE}</span>
              </a>
            </div>
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
