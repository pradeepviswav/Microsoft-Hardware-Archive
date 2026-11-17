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

## Live crawl diagnostics (17 November 2026)

The v11 deployment (`1aa6d64`) includes 239 indexable pages, including all 163
products, plus `robots.txt`, `sitemap.xml` and the custom 404 page. The deployment
completed successfully; its diagnostics are empty. Spacefast reports a public
`/**` view grant, no traffic rules and no team/Space noindex policy.

Unauthenticated requests from this workspace using browser and curl user agents
return 200 for the homepage, robots, sitemap, the reported Surface Laptop device
and IntelliMouse family URLs, and sampled category/era pages. A nonexistent URL
returns 404 with the noindex error page. These findings do not reproduce the
reported blanket denial of all non-root paths. A full unauthenticated sweep of
all 239 sitemap URLs also returned 200, with 239 unique titles/descriptions,
self-referencing canonicals and breadcrumbs on all non-home pages.

A request from this workspace with a Googlebot user-agent string returns 403,
including on the homepage and robots. Its response is an edge HTML challenge
called “Checking search engine crawler...” with `/__challenge/` scripts, rather
than the archive HTML or a `PERMISSION_DENIED` application response. Changing a
user-agent does not make a request originate from Google; this check cannot
establish whether genuine Googlebot requests succeed or fail. Available
Spacefast documentation does not explain this challenge or identify a supported
crawler-verification setting. Do not disable protections based only on this test.

Use Search Console → URL Inspection → Test live URL for the homepage and an
actual device URL to check Google's access. If Google's live test reports a 403,
provide Spacefast support with the URL, test timestamp, response status and
current deployment ID `ver_78ee624e7efb4c85afa7ba202eee45e7`; ask them to check
verified Google crawler handling at the edge. An audit tool's request failure
alone is not evidence of a Search Console indexing error.

The homepage already contains product names and image tags in its pre-rendered
HTML. Card headings now link directly to product pages, while Quick view opens
the dialog. Regression checks explicitly inspect these without JavaScript and
verify unique titles/descriptions, self-canonicals and breadcrumbs across every
sitemap page.

## Shareable browsing and reference exports

The homepage stores category, family, decade, support-diagram, store, saved,
search, sort and view selections in URL parameters. Saved-device IDs remain
private to browser storage; a shared `saved=1` link uses the recipient's saved
collection. Browser Back/Forward restores the URL state. Escape clears search
and facets when a modal is not open; `/` focuses search outside input controls.

Unfiltered pagination has generated `/browse/page/2/` through page 7 URLs, each
with its own HTML, metadata and canonical. Every product is reachable through
ordinary links with JavaScript disabled. Filtered links use query parameters and
are applied by the interactive app; category/family/era hubs and `/catalogue/`
provide fully static alternatives. Query URLs retain the underlying page's
canonical rather than creating indexable pages for every filter combination.

The spec table shares the filters and sort controls with grid/list views, adds
Device and Year sort buttons, and supports the same three-device comparison.
Pagination shows 24 records per page. The directory is expanded, with header
links to category, family and decade indexes.

Build-time exports are generated from the same product records:

- `/llms.txt`: curated map of the catalogue and every family.
- `/llms-full.txt`: all entries, recorded specs, source links, research dates and
  image attribution in one Markdown document.
- `/devices/<existing-device-slug>.md`: the individual Markdown entry, linked
  from the corresponding HTML page and its alternate-format head tag.

Device pages put overview and recorded specifications first, with stable
`#overview`, `#specifications`, `#diagrams`, `#sources` and `#citation` anchors.
Markdown and BibTeX citations are readable without JavaScript; small progressive
enhancements add copy buttons and keyboard navigation through the family.
Chronological neighbors are explicitly not labelled direct predecessors or
successors. Copy failures select the citation and offer manual-copy instructions.

Dataset and TechArticle structured data supplement the existing Product and
BreadcrumbList entities. Research dates are not assigned as product release
dates or source publication dates. Source publication dates are shown only when
recorded (the four tabletop references already identify their publication dates).
No blanket dataset license is declared, and none is invented in the schema.
`llms.txt` is an optional discovery aid, not a web standard that guarantees AI
citations or search rankings. robots.txt explicitly permits the named search
crawlers as well as all other crawlers; it cannot override an edge challenge.

Changes follow the GitHub PR approval workflow in AGENTS.md. The user approves
the PR before Spacefast syncs the source; this work does not modify the live
Space or its access policies directly.
