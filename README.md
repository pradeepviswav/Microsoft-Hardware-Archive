# Microsoft Hardware Archive

An independent, responsive collection of Microsoft devices and selected Windows Phone partner hardware, spanning 1980–2026, with 161 records across 20 product families.

## Run locally

Requires Node.js 22 or later.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. No API key or account is required.

```sh
npm run check    # TypeScript
npm run build    # Production output in dist/
npm run preview # Preview production output
npm test        # Browser regression tests
```

The Playwright configuration uses `/usr/bin/chromium`. Set `CHROMIUM_PATH` to your local Chrome/Chromium executable if it is installed elsewhere. Tests start Vite automatically when needed.

## Explore

Search device names, descriptions, families, or years. Combine family and era filters, sort chronologically or alphabetically, and switch between grid and list views. Search covers the full catalogue; use “Show more” to browse beyond the first 24 records. The Microsoft Store selection filter shows accessories from the researched Store page, without making stock claims. Use the heart button to save devices in this browser. Compare two to four devices; fields without recorded specifications are explicitly marked. Press `/` to focus search. Dialogs support Escape, keyboard focus containment, and focus restoration.

Saved devices and theme preferences use local storage when available. Nothing is sent to a server. There are no seeded user reviews or placeholder shopping links.

## Content and provenance

- `data/products.ts`: original historical collection, with targeted corrections to Xbox Live, Arc Touch naming, and Natural Keyboard Elite identification.
- `data/catalogue.ts`: 136 researched additions with specifications, primary/secondary source links, local image attribution, and explicit missing-photo states. See [collection expansion notes](docs/COLLECTION_EXPANSION.md) and `data/catalogue-provenance.json`.
- `data/recent.ts`: five sourced 2026 additions, researched on 9 November 2026. Source announcements and introduction dates are displayed in product details. This is a selection, not a complete or automatically updated catalog.
- `data/images.ts` and `IMAGE_SOURCES.md`: image attribution and original source links. Images are stored locally, resized, and optimized. Wikimedia attribution and license links are shown in device details; Microsoft editorial photographs retain their source links.

Historical descriptions without an announcement link are labeled as historical entries rather than newly verified content. Models and availability vary by region. To add an entry, include a stable ID, a supported model year (or `null` when unconfirmed), recorded specifications, and source links. Add a photo or diagram only when its exact model and image credit can be established. Add recorded specifications only when supported by that source.

## Design

The interface uses locally built CSS, sage and forest accents, editorial typography, visible comparison and save controls, responsive family navigation, reduced-motion support, dark mode, and native accessible dialogs. It does not require a CSS CDN or a generative API at runtime.

This project is not affiliated with Microsoft. Product names and images remain the property of their respective owners.
