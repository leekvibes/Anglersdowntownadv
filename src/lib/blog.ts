/* ──────────────────────────────────────────────────────────
   BLOG CONTENT LOADER
   Reads MDX files from src/content/blog/, parses frontmatter,
   exposes typed Post objects to the /blog routes. All file I/O
   happens at build time (server components only — never ship
   `fs` to the client).
   ────────────────────────────────────────────────────────── */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export interface BlogPostFrontmatter {
  title: string;
  date: string;            // ISO 8601, e.g. "2026-04-26"
  excerpt: string;
  cover?: string;          // path under /public, e.g. "/photos/blog/foo.jpg"
  coverAlt?: string;
  author?: string;
  tags?: string[];
  readingMinutes?: number;
  /* Set draft: true to keep the post out of /blog index, /blog/[slug]
     dynamic routing, and the sitemap. The MDX file lives in the repo
     so you can edit it; the post simply doesn't render until you
     remove this line from the frontmatter. */
  draft?: boolean;
}

export interface BlogPost extends BlogPostFrontmatter {
  slug: string;
  body: string;            // MDX source — render with <MDXRemote source={body} />
}

function readFileSafe(filepath: string): string | null {
  try {
    return fs.readFileSync(filepath, "utf8");
  } catch {
    return null;
  }
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getPost(slug: string): BlogPost | null {
  for (const ext of [".mdx", ".md"]) {
    const raw = readFileSafe(path.join(BLOG_DIR, `${slug}${ext}`));
    if (!raw) continue;
    const { data, content } = matter(raw);
    const fm = data as BlogPostFrontmatter;
    if (!fm.title || !fm.date || !fm.excerpt) {
      // Bad frontmatter — skip rather than crash the build.
      console.warn(`[blog] ${slug}${ext} missing required frontmatter`);
      return null;
    }
    // Drafts are filtered out of the live site. They stay on disk so
    // they can be edited; remove `draft: true` from the frontmatter
    // when ready to publish.
    if (fm.draft === true) return null;
    return {
      slug,
      title: fm.title,
      date: fm.date,
      excerpt: fm.excerpt,
      cover: fm.cover,
      coverAlt: fm.coverAlt,
      author: fm.author ?? "Angler Watersports",
      tags: fm.tags ?? [],
      readingMinutes: fm.readingMinutes,
      body: content,
    };
  }
  return null;
}

export function getAllPosts(): BlogPost[] {
  return getAllPostSlugs()
    .map(getPost)
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/* Format an ISO date as "Apr 26, 2026" — used in post listings + headers. */
export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

/* Estimate reading time at ~225 wpm if the post doesn't override it. */
export function estimateReadingMinutes(body: string): number {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 225));
}
