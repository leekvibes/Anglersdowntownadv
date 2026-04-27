#!/usr/bin/env node
/* ──────────────────────────────────────────────────────────
   AI BLOG-POST DRAFTER for Angler Watersports

   Usage:  npm run draft "Your topic here"
   Output: src/content/blog/<slug>.mdx with `draft: true`

   The draft will not appear on the live site until you remove
   `draft: true` from the frontmatter (the blog loader filters
   draft posts out). Workflow:

     1. npm run draft "Best time of year to spot wild horses"
     2. Open the new MDX file, review/edit, add first-hand details
     3. Delete the `draft: true` line in frontmatter
     4. git add + commit + push  (Vercel deploys it automatically)

   Cost: ~$0.05–$0.10 per draft via the Claude API (Opus 4.7).
   Requires ANTHROPIC_API_KEY in .env.local.
   ────────────────────────────────────────────────────────── */

/* dotenv/config defaults to .env — Next.js convention is .env.local
   (gitignored by default), so load that explicitly. */
import dotenv from "dotenv";
dotenv.config({ path: ".env.local", quiet: true });
dotenv.config({ path: ".env", quiet: true }); // fallback for plain .env

import Anthropic from "@anthropic-ai/sdk";
import fs from "fs/promises";
import path from "path";

const SYSTEM_PROMPT = `You are a copywriter for Angler Watersports, a jet ski and pontoon rental business in downtown Ocean City, Maryland. You write blog posts for the company's website that help with local SEO and inform real customers.

VOICE & STYLE:
- Confident, polished, direct. No hype, no corporate jargon, no AI clichés.
- Forbidden words/phrases: "discover", "embark on", "unforgettable journey", "delve into", "dive into", "in today's fast-paced world", "navigating the world of", "elevate your experience", "harness the power", "unlock", "vast", "myriad", "plethora", "tapestry", "robust", "leverage", "seamless", "transformative".
- Short sentences. Short paragraphs (1-3 sentences each).
- Specific over generic. Real numbers, place names, actual details. ("50+ sq mi of bay water" beats "vast bay area".)
- First-person plural ("we", "our") when speaking as Angler. Second-person ("you") when addressing the reader.
- Markdown only. Use ## for major sections, ### sparingly.
- 350-550 words. Don't pad to hit length; cut if it's tight.
- DO NOT end with a generic CTA like "Book your adventure today!" or "Contact us to learn more!" — the website already has those everywhere. End on a useful insight, a recommendation, or an interesting note instead.

BRAND FACTS (use only when relevant; never invent details):
- Located at 312 Talbot Street, Ocean City, MD 21842 (downtown, on the bay)
- Phone: (443) 664-6300
- Email: Anglerwatersports@gmail.com
- Brand-new 2026 fleet (jet skis and pontoons)
- Maryland-certified guides on every jet ski tour
- 50+ square miles of Assateague Bay riding area
- Wild horses on Assateague Island's coastline
- Bottlenose dolphins in the bay and inlet
- Pontoons: up to 10 guests, 2-8 hour rentals, BYOB friendly, $329 starting rate, BOOK BY PHONE ONLY (no online booking for pontoons)
- Jet skis: 1-hour guided runs, $129/hr starting rate, ages 5+, up to 3 riders/ski, online booking available
- Free parking at the dock
- Mon-Sun: 8:30 AM – 8:30 PM during the season
- Launching for the 2026 season — no inherited reviews or year-count claims

LOCAL DETAILS YOU CAN REFERENCE:
- Assateague Island National Seashore (37-mile wild horse beach)
- Ocean City inlet and the bay
- Sandbars at low tide
- Sunrise from the eastern bay, sunset over the western bay
- Common species: wild horses, bottlenose dolphins, ospreys, blue herons
- Boating safety practices, weather/wind awareness, sun protection

WHAT NOT TO DO:
- Don't claim "the largest riding area" or any superlative we can't prove. Use specific numbers instead.
- Don't say we've been around for years or have N reviews — Angler is a 2026 launch.
- Don't reference competitor businesses by name.
- Don't use the phrase "Your Bay. Your Rules." (a competitor's tagline).
- Don't promise specific wildlife sightings — say "often", "regularly", "common in summer".

OUTPUT FORMAT:
Return ONLY a JSON object — no markdown fences, no commentary before or after, no explanation. Exactly these keys:

{
  "title": "Post title in sentence case, max 65 chars, no clickbait, no exclamation points",
  "slug": "url-safe-slug-with-hyphens-and-no-stop-words",
  "excerpt": "One-sentence summary used on /blog index and OG share cards. 100-160 chars. No trailing period if it would push it over.",
  "tags": ["tag1", "tag2"],
  "body": "## First section heading\\n\\nMarkdown body here. Use \\\\n for newlines."
}

Tags must be 1-3 items chosen from: news, season-launch, wildlife, route, tips, weather, equipment, location, family, group, photography.`;

interface Draft {
  title: string;
  slug: string;
  excerpt: string;
  tags: string[];
  body: string;
}

function fail(msg: string): never {
  console.error(`Error: ${msg}`);
  process.exit(1);
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function main() {
  const topic = process.argv.slice(2).join(" ").trim();
  if (!topic) {
    console.error('Usage: npm run draft "<topic>"');
    console.error('Example: npm run draft "Best time of year to spot wild horses"');
    process.exit(1);
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    fail(
      "ANTHROPIC_API_KEY is not set.\n" +
        "  Add it to .env.local at the project root:\n" +
        "    ANTHROPIC_API_KEY=sk-ant-...\n" +
        "  Get a key at https://console.anthropic.com/"
    );
  }

  const client = new Anthropic();

  console.error(`> Drafting on topic: "${topic}"`);
  console.error(`  Model: claude-opus-4-7  ·  Adaptive thinking on  ·  Streaming\n`);

  const stream = client.messages.stream({
    model: "claude-opus-4-7",
    max_tokens: 8000,
    thinking: { type: "adaptive" },
    system: [
      {
        type: "text",
        text: SYSTEM_PROMPT,
        // System prompt is stable across drafts — cache it. Min cacheable
        // prefix on Opus 4.7 is 4096 tokens; if our system prompt grows past
        // that this saves money, otherwise it silently no-ops.
        cache_control: { type: "ephemeral" },
      },
    ],
    messages: [
      {
        role: "user",
        content: `Write a blog post for the Angler Watersports website on this topic:\n\n${topic}\n\nReturn JSON only — no markdown fences, no preamble.`,
      },
    ],
  });

  // Show progress dots while streaming.
  for await (const event of stream) {
    if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
      process.stderr.write(".");
    }
  }
  console.error("\n");

  const message = await stream.finalMessage();

  // Reassemble the text content from any text blocks (skip thinking blocks).
  let jsonText = "";
  for (const block of message.content) {
    if (block.type === "text") jsonText += block.text;
  }
  jsonText = jsonText.trim();

  // Strip markdown code fences if the model snuck them in despite the instruction.
  const fenceMatch = jsonText.match(/^```(?:json)?\s*\n?([\s\S]*?)\n?```$/);
  if (fenceMatch) jsonText = fenceMatch[1].trim();

  let draft: Draft;
  try {
    draft = JSON.parse(jsonText);
  } catch {
    console.error("Failed to parse JSON response. Raw output:\n");
    console.error(jsonText);
    fail("Re-run the script. If this happens repeatedly, the topic may be triggering a refusal.");
  }

  // Validate fields.
  for (const key of ["title", "slug", "excerpt", "tags", "body"] as const) {
    if (!draft[key]) {
      console.error("Missing required field:", key);
      console.error(JSON.stringify(draft, null, 2));
      fail("Model returned an incomplete draft.");
    }
  }
  if (!Array.isArray(draft.tags) || draft.tags.length === 0) {
    fail("Tags must be a non-empty array.");
  }

  // Sanitize the slug just in case the model returned something funky.
  const safeSlug = slugify(draft.slug);
  if (safeSlug !== draft.slug) {
    console.error(`(Sanitized slug: "${draft.slug}" → "${safeSlug}")`);
    draft.slug = safeSlug;
  }

  // Build the MDX file body.
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  const tagsYaml = draft.tags.map((t) => `"${t.replace(/"/g, '\\"')}"`).join(", ");

  const escTitle = draft.title.replace(/"/g, '\\"');
  const escExcerpt = draft.excerpt.replace(/"/g, '\\"');

  const mdx = `---
title: "${escTitle}"
date: "${today}"
excerpt: "${escExcerpt}"
tags: [${tagsYaml}]
author: "Angler Watersports"
draft: true
---

${draft.body.trim()}
`;

  // Write to disk — refuse to overwrite an existing post.
  const blogDir = path.resolve("src/content/blog");
  await fs.mkdir(blogDir, { recursive: true });
  const outPath = path.join(blogDir, `${draft.slug}.mdx`);

  try {
    await fs.access(outPath);
    fail(
      `File already exists: ${outPath}\n` +
        "  Either delete it first, or change the topic so the slug differs."
    );
  } catch {
    /* good — file doesn't exist */
  }

  await fs.writeFile(outPath, mdx, "utf8");

  const wordCount = draft.body.split(/\s+/).filter(Boolean).length;
  const usage = message.usage;
  const cacheRead = usage.cache_read_input_tokens ?? 0;
  const cacheWrite = usage.cache_creation_input_tokens ?? 0;

  console.log(`✓ Drafted: ${path.relative(process.cwd(), outPath)}`);
  console.log(`  Title:  ${draft.title}`);
  console.log(`  Tags:   ${draft.tags.join(", ")}`);
  console.log(`  Words:  ~${wordCount}`);
  console.log(
    `  Tokens: ${usage.input_tokens} in / ${usage.output_tokens} out` +
      (cacheRead || cacheWrite ? `  (cache: ${cacheWrite} written, ${cacheRead} read)` : "")
  );
  console.log("");
  console.log("Next:");
  console.log("  1. Open the .mdx file and review");
  console.log("  2. Edit / add first-hand details where it improves authenticity");
  console.log('  3. Remove the "draft: true" line in frontmatter');
  console.log("  4. git add + commit + push");
}

main().catch((err: unknown) => {
  if (err instanceof Anthropic.APIError) {
    console.error(`API error ${err.status}: ${err.message}`);
  } else if (err instanceof Error) {
    console.error("Error:", err.message);
  } else {
    console.error("Unknown error:", err);
  }
  process.exit(1);
});
