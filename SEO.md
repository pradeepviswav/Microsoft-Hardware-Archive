# Search visibility and static hosting

`npm run build` writes the interactive homepage and pre-rendered device, family,
category, decade and catalogue pages into `dist`. Routes derive from the same
product data as the app; new records appear on the next build. Keep existing
product IDs stable because they form part of permanent device URLs.

Every indexable page has a unique title, description, canonical URL, social
metadata and JSON-LD. Product facts and source links are available without
JavaScript. Structured data describes the archive's recorded information; it
contains no invented prices, reviews or availability. Product markup without
commercial fields does not promise a Google product rich result.

## Build and verify

```sh
npm ci
npm run check
npm run build
npm test
npx playwright test --config playwright.seo.config.ts
```

The default canonical origin is `https://microsoft-hardware-archive.space.fast`.
For a permanent domain change, build with `SITE_URL=https://your-domain.example`.
This changes canonicals, sitemap URLs and structured data together. Preview
builds should retain the production canonical origin. Restrict private previews
at the hosting layer if they must not be crawled.

## Deployment requirements

Publish the **entire `dist` directory**, including nested `index.html` files,
`robots.txt`, `sitemap.xml`, images and assets. Configure the host to serve
`/devices/example-1/` from its directory index. Do not rewrite every route to the
homepage. Unknown routes must return HTTP 404 (optionally with `404.html` as the
body); returning a homepage with HTTP 200 creates a soft 404. Vite preview uses
multi-page mode so the production test checks real 404 responses.

Before rollout, verify direct requests and refreshes on a device, family and
category URL, and inspect View Source for the correct heading and canonical.
Check that the hosting platform does not inject duplicate canonical or metadata
tags. Use permanent redirects for any future URL/domain migration and retain old
URLs in a redirect map. No existing public product URLs were replaced by this
change; the archive previously used dialogs on the homepage.

## After deployment

Verify the production property in Google Search Console, submit `/sitemap.xml`,
and inspect the homepage plus a few product URLs using URL Inspection. Monitor
indexing, crawl errors, search queries and Core Web Vitals over time. Sitemap
submission and structured data do not guarantee indexing or rankings. The
existing subdomain can be indexed; a custom domain is an optional branding choice.

Editorial work remains essential: improve original historical summaries and
verified specifications, retain source citations and image credits, and update
research dates only when information is actually reviewed. The sitemap uses
recorded research/addition dates where available rather than marking every page
fresh on each build.
