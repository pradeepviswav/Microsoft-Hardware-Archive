import { build } from "vite";
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { resolve, dirname } from "node:path";
const configured =
  process.env.SITE_URL || "https://microsoft-hardware-archive.space.fast";
const url = new URL(configured);
if (
  url.protocol !== "https:" ||
  url.pathname !== "/" ||
  url.search ||
  url.hash ||
  url.username ||
  url.password
)
  throw new Error(
    "SITE_URL must be an HTTPS origin without a path, credentials, query or fragment.",
  );
const origin = url.origin;
const temporary = resolve(".prerender");
try {
  await build({
    build: { ssr: "seo/render.tsx", outDir: temporary, emptyOutDir: true },
  });
  const { renderPages, renderExports } = await import(
    resolve(temporary, "render.js")
  );
  const template = await readFile("dist/index.html", "utf8");
  const styles = [...template.matchAll(/<link[^>]+rel="stylesheet"[^>]*>/g)]
    .map((m) => m[0])
    .join("\n");
  const scripts = [
    ...template.matchAll(/<script[^>]*type="module"[^>]*><\/script>/g),
  ]
    .map((m) => m[0])
    .join("\n");
  const escape = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  const pages = renderPages(origin);
  if (new Set(pages.map((p) => p.path)).size !== pages.length)
    throw new Error("Duplicate canonical routes");
  for (const page of pages) {
    const canonical = origin + page.path;
    const image = page.image ? new URL(page.image, origin).href : null;
    const schema = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": page.schema,
    }).replace(/</g, "\\u003c");
    const html = `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon.svg"><link rel="llms-txt" href="/llms.txt">${page.record ? `<link rel="alternate" type="text/markdown" href="${escape(page.path.replace(/\/$/, ".md"))}">` : ""}<title>${escape(page.title)}</title><meta name="description" content="${escape(page.description)}">${page.noindex ? '<meta name="robots" content="noindex,follow">' : `<link rel="canonical" href="${escape(canonical)}">`}<meta property="og:type" content="website"><meta property="og:site_name" content="Microsoft Hardware Archive"><meta property="og:title" content="${escape(page.title)}"><meta property="og:description" content="${escape(page.description)}"><meta property="og:url" content="${escape(canonical)}">${image ? `<meta property="og:image" content="${escape(image)}"><meta property="og:image:alt" content="${escape(page.title)}">` : ""}<meta name="twitter:card" content="${image ? "summary_large_image" : "summary"}">${styles}${page.schema.length ? `<script type="application/ld+json">${schema}</script>` : ""}</head><body><div id="root">${page.body}</div>${page.interactive ? scripts : ""}${page.record ? '<script src="/record.js" defer></script>' : ""}</body></html>`;
    const target = resolve(
      "dist",
      page.path === "/404.html" ? "404.html" : "." + page.path + "index.html",
    );
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, html);
  }
  for (const file of renderExports(origin)) {
    const target = resolve("dist", "." + file.path);
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, file.body);
  }
  await writeFile(
    "dist/robots.txt",
    `User-agent: *\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: PerplexityBot\nAllow: /\n\nUser-agent: Claude-SearchBot\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`,
  );
  await writeFile(
    "dist/sitemap.xml",
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages
      .filter((p) => !p.noindex)
      .map(
        (p) =>
          `<url><loc>${escape(origin + p.path)}</loc>${p.modified ? `<lastmod>${escape(p.modified)}</lastmod>` : ""}</url>`,
      )
      .join("")}</urlset>`,
  );
  console.log(
    `Pre-rendered ${pages.length - 1} indexable pages plus a noindex 404 page.`,
  );
} finally {
  await rm(temporary, { recursive: true, force: true });
}
