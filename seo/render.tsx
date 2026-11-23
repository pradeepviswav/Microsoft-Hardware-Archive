import TimeCorridor from "../components/TimeCorridor";
import React from "react";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import App from "../App";
import { products, categories } from "../data/products";
import { productFamily } from "../data/families";
import { Product } from "../types";
import {
  siteName,
  productPath,
  categoryPath,
  familyPath,
  eraPath,
  corridorPath,
} from "./urls";
import Directory from "./Directory";
import { inventory } from "../data/inventory";
import { recordedSpecifications } from "../data/metadata";
import {
  defaults,
  PAGE_SIZE,
  filterProducts,
  browsePagePath,
  allFamilies,
} from "../data/browse";
import {
  citations,
  productMarkdown,
  markdownPath,
  researchDate,
} from "./reference";

type Page = {
  path: string;
  title: string;
  description: string;
  body: string;
  schema: object[];
  image?: string;
  modified?: string;
  interactive?: boolean;
  noindex?: boolean;
  record?: boolean;
};
const year = (p: Product) =>
  p.year === null ? "Introduction year unconfirmed" : String(p.year);
const sources = (p: Product) =>
  [p.source, ...(p.additionalSources || [])].filter(Boolean);
const image = (p: Product, eager = false) =>
  p.imageUrl ? (
    <img
      src={p.imageUrl}
      alt={`${p.name}${p.imageKind === "diagram" ? " — manufacturer hardware diagram" : ""}`}
      width="800"
      height="650"
      loading={eager ? "eager" : "lazy"}
    />
  ) : (
    <p className="photo-note">Photo not yet catalogued.</p>
  );
const shell = (children: React.ReactNode) =>
  renderToStaticMarkup(
    <>
      <a className="skip-link" href="#record-content">
        Skip to content
      </a>
      <header className="site-header">
        <a className="brand" href="/">
          {siteName}
        </a>
        <nav aria-label="Main navigation">
          <a href="/#collection">Interactive collection</a>
          <a href="/catalogue/">All devices</a>
          <a href={corridorPath}>Time Corridor</a>
          <a href="/catalogue/#categories">Categories</a>
          <a href="/catalogue/#families">Families</a>
          <a href="/catalogue/#decades">Decades</a>
        </nav>
      </header>
      <main id="record-content" className="static-content">
        {children}
      </main>
      <footer>
        <p>
          Independent hardware history project. Not affiliated with Microsoft.
        </p>
        <a href="/">Back to the archive</a>
      </footer>
    </>,
  );
const crumbs = (items: { name: string; path: string }[]) => (
  <nav className="breadcrumbs" aria-label="Breadcrumb">
    {items.map((c, i) => (
      <React.Fragment key={c.path}>
        {i > 0 && <span aria-hidden="true"> / </span>}
        <a href={c.path}>{c.name}</a>
      </React.Fragment>
    ))}
  </nav>
);
const breadcrumbSchema = (
  origin: string,
  items: { name: string; path: string }[],
) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: origin + c.path,
  })),
});
const listing = (items: Product[]) => (
  <ul className="static-grid">
    {items.map((p) => (
      <li key={p.id}>
        <a href={productPath(p)} aria-label={p.name}>
          {image(p)}
          <h2>{p.name}</h2>
        </a>
        <p className="eyebrow">
          {year(p)} ·{" "}
          <a href={familyPath(productFamily(p))}>{productFamily(p)}</a>
        </p>
        <p>{p.description}</p>
      </li>
    ))}
  </ul>
);
export function renderPages(origin: string): Page[] {
  const pages: Page[] = [];
  const range = products.flatMap((p) => (p.year === null ? [] : [p.year]));
  const homeTitle = `${siteName} — Devices, Specs & History (${Math.min(...range)}–${Math.max(...range)})`;
  pages.push({
    path: "/",
    title: homeTitle,
    description: `Explore ${products.length} Microsoft hardware records: Surface, Xbox, mice, keyboards, phones and more. Browse recorded specifications, history, photographs and original sources.`,
    body: renderToString(<App />),
    interactive: true,
    schema: [
      {
        "@type": "WebSite",
        "@id": origin + "/#website",
        name: siteName,
        url: origin + "/",
        description: "An independent archive of Microsoft hardware history.",
      },
    ],
  });
  pages[0].schema.push({
    "@type": "Dataset",
    "@id": origin + "/#dataset",
    name: siteName,
    description: `An independent catalogue of ${products.length} hardware records, with recorded specifications, source references and image attribution.`,
    url: origin + "/catalogue/",
    temporalCoverage: `${Math.min(...range)}/${Math.max(...range)}`,
    creator: {
      "@type": "Organization",
      name: "Microsoft Hardware Archive",
      url: "https://github.com/pradeepviswav/Microsoft-Hardware-Archive",
    },
    distribution: [
      {
        "@type": "DataDownload",
        contentUrl: origin + "/llms-full.txt",
        encodingFormat: "text/markdown",
      },
      {
        "@type": "DataDownload",
        contentUrl: origin + "/catalogue.json",
        encodingFormat: "application/json",
      },
    ],
    variableMeasured: [
      "Product name",
      "Introduction or release year",
      "Category",
      "Product family",
      "Recorded specifications",
    ],
  });
  const corridorTitle = `Time Corridor — Hardware across the decades | ${siteName}`;
  const corridorDescription = "Explore Microsoft hardware by year across Compute, Mobile, Play and Input, with archive photos and links to complete device records.";
  pages.push({
    path: corridorPath,
    title: corridorTitle,
    description: corridorDescription,
    body: renderToString(<TimeCorridor />),
    interactive: true,
    schema: [
      { "@type": "WebPage", name: corridorTitle, url: origin + corridorPath, description: corridorDescription },
      breadcrumbSchema(origin, [{ name: siteName, path: "/" }, { name: "Time Corridor", path: corridorPath }]),
    ],
  });
  const count = Math.ceil(products.length / PAGE_SIZE);
  for (let page = 2; page <= count; page++)
    pages.push({
      path: browsePagePath(page),
      title: `Hardware Collection — Page ${page} | ${siteName}`,
      description: `Browse page ${page} of ${count} of the Microsoft hardware collection, with device photographs, introduction years and links to recorded specifications.`,
      body: renderToString(<App initialBrowse={{ ...defaults, page }} />),
      interactive: true,
      schema: [
        {
          "@type": "CollectionPage",
          name: `Hardware collection, page ${page}`,
          url: origin + browsePagePath(page),
          mainEntity: {
            "@type": "ItemList",
            itemListElement: filterProducts(defaults)
              .slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
              .map((p, i) => ({
                "@type": "ListItem",
                position: (page - 1) * PAGE_SIZE + i + 1,
                name: p.name,
                url: origin + productPath(p),
              })),
          },
        },
        breadcrumbSchema(origin, [
          { name: "Home", path: "/" },
          { name: `Page ${page}`, path: browsePagePath(page) },
        ]),
      ],
    });
  const collection = (
    path: string,
    title: string,
    description: string,
    items: Product[],
    parent?: { name: string; path: string },
  ) => {
    const trail = [
      { name: "Home", path: "/" },
      ...(parent ? [parent] : []),
      { name: title, path },
    ];
    pages.push({
      path,
      title: `${title}${path.startsWith("/families/") ? " Family" : path.startsWith("/categories/") ? " Category" : ""} — Specs & History | ${siteName}`,
      description,
      body: shell(
        <>
          {crumbs(trail)}
          <h1>{title}</h1>
          <p className="static-intro">{description}</p>
          <p>
            {items.length} recorded {items.length === 1 ? "device" : "devices"}.
          </p>
          {listing(items)}
          <Directory />
        </>,
      ),
      schema: [
        {
          "@type": "CollectionPage",
          name: title,
          url: origin + path,
          description,
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: items.length,
            itemListElement: items.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.name,
              url: origin + productPath(p),
            })),
          },
        },
        breadcrumbSchema(origin, trail),
      ],
    });
  };
  collection(
    "/catalogue/",
    "Complete Microsoft hardware catalogue",
    `Browse all ${products.length} archived devices, with release-year context, recorded specifications, photographs where available, and research sources.`,
    products,
  );
  for (const category of categories.filter((c) => c !== "All"))
    collection(
      categoryPath(category),
      category,
      `Explore the ${category} collection: Microsoft hardware models, recorded specifications, release history and original documentation.`,
      products.filter((p) => p.category === category),
      { name: "All devices", path: "/catalogue/" },
    );
  for (const family of [...new Set(products.map(productFamily))].sort())
    collection(
      familyPath(family),
      family,
      `Explore ${family} models and generations. Compare recorded specifications, introduction years, historical notes and linked research sources.`,
      products.filter((p) => productFamily(p) === family),
      { name: "All devices", path: "/catalogue/" },
    );
  for (const decade of [
    ...new Set(range.map((y) => Math.floor(y / 10) * 10)),
  ].sort())
    collection(
      eraPath(decade),
      `${decade}s Microsoft hardware`,
      `Explore Microsoft hardware introduced or released during ${decade}–${decade + 9}, including recorded model details and historical sources.`,
      products.filter(
        (p) => p.year !== null && p.year >= decade && p.year < decade + 10,
      ),
    );
  for (const p of products) {
    const path = productPath(p),
      family = productFamily(p),
      trail = [
        { name: "Home", path: "/" },
        { name: p.category, path: categoryPath(p.category) },
        { name: p.name, path },
      ];
    const lineage = products
      .filter((other) => productFamily(other) === family)
      .sort(
        (a, b) => (a.year ?? Infinity) - (b.year ?? Infinity) || a.id - b.id,
      );
    const position = lineage.findIndex((other) => other.id === p.id);
    const previous = lineage[position - 1],
      next = lineage[position + 1];
    const related = lineage.filter((other) => other.id !== p.id);
    const cite = citations(p, origin);
    const evidence = sources(p);
    const brand =
      p.manufacturer ||
      (p.name.startsWith("Samsung")
        ? "Samsung"
        : p.name.startsWith("Nokia")
          ? "Nokia"
          : p.name.includes("HTC")
            ? "HTC"
            : "Microsoft");
    pages.push({
      path,
      title: `${p.name}${p.year === null ? "" : ` (${p.year})`} — Specs & History | ${siteName}`,
      description: p.description,
      image: p.imageUrl,
      modified: p.researchedAt || p.addedAt,
      record: true,
      body: shell(
        <article>
          {crumbs(trail)}
          <div className="eyebrow">
            <a href={familyPath(family)}>{family}</a>
          </div>
          <section id="overview">
            <h1>
              {p.name}
              {p.year !== null && (
                <span className="record-year"> ({p.year})</span>
              )}
            </h1>
            <p className="static-intro">{p.description}</p>
            {p.dateLabel && <p>{p.dateLabel}</p>}
            <p>
              <a href={markdownPath(p)}>Read this entry as Markdown</a>
            </p>
          </section>
          <nav className="record-sections" aria-label="Entry sections">
            <a href="#overview">Overview</a>
            <a href="#specifications">Specifications</a>
            <a href="#diagrams">Images &amp; diagrams</a>
            <a href="#sources">Sources</a>
            <a href="#citation">Cite this entry</a>
          </nav>
          <section id="specifications">
            <h2>Recorded specifications</h2>
            <table className="record-specs">
              <tbody>
                {Object.entries({
                  "Introduction / release year": year(p),
                  Category: p.category,
                  "Product family": family,
                  ...recordedSpecifications(p),
                }).map(([label, value]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>
              {p.dateLabel ||
                "Exact release date has not been recorded; the year refers to introduction or release and may vary by region."}
            </p>
          </section>
          <section id="diagrams">
            <h2>Images &amp; diagrams</h2>
            <figure className="record-photo">
              {image(p, true)}
              {p.imageUrl && (
                <figcaption>
                  {p.imageNote}
                  {p.imageCredit && ` Image: ${p.imageCredit}. `}
                  {p.imageSource && (
                    <a href={p.imageSource}>Original image source</a>
                  )}{" "}
                  {p.imageLicense && <a href={p.imageLicense}>Image license</a>}
                </figcaption>
              )}
            </figure>
          </section>
          <section id="sources">
            <h2>Research sources</h2>
            {evidence.length ? (
              <ul>
                {evidence.map((s) => (
                  <li key={s!.url}>
                    <a href={s!.url}>{s!.title}</a>
                    {s!.kind && <span> · {s!.kind}</span>}
                    {s!.publishedAt && (
                      <span>
                        {" "}
                        · Published{" "}
                        <time dateTime={s!.publishedAt}>{s!.publishedAt}</time>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                This historical description comes from the original archive and
                has not been independently reverified. Additional specifications
                have not been recorded.
              </p>
            )}
            {researchDate(p) && (
              <p>
                Research date:{" "}
                <time dateTime={researchDate(p)!}>{researchDate(p)}</time>.
              </p>
            )}
          </section>
          <section id="citation">
            <h2>Cite this entry</h2>
            <p>
              Research date: {researchDate(p) || "Not recorded"}. Research dates
              are not release dates or source publication dates.
            </p>
            <details open>
              <summary>Markdown citation</summary>
              <pre id="citation-markdown">
                <code>{cite.markdown}</code>
              </pre>
              <button hidden data-copy="citation-markdown">
                Copy Markdown citation
              </button>
            </details>
            <details>
              <summary>BibTeX citation</summary>
              <pre id="citation-bibtex">
                <code>{cite.bibtex}</code>
              </pre>
              <button hidden data-copy="citation-bibtex">
                Copy BibTeX citation
              </button>
            </details>
            <p id="citation-status" role="status" aria-live="polite" />
          </section>
          {(p.predecessor || p.successor) && (
            <section aria-label="Documented model relationships">
              <h2>Documented model relationships</h2>
              {[
                ["Predecessor", p.predecessor],
                ["Successor", p.successor],
              ].map(([label, id]) => {
                const other = products.find((other) => other.id === id);
                return other ? (
                  <p key={String(label)}>
                    {label}: <a href={productPath(other)}>{other.name}</a>
                  </p>
                ) : null;
              })}
            </section>
          )}
          <nav
            className="family-navigation"
            aria-label="Browse this product family"
          >
            <p>
              Chronological browsing within {family}. Records with unknown years
              appear last. Adjacent entries are not necessarily direct
              predecessors or successors.
            </p>
            {previous && (
              <a rel="prev" href={productPath(previous)}>
                ← {previous.name} ({year(previous)})
              </a>
            )}
            {next && (
              <a rel="next" href={productPath(next)}>
                {next.name} ({year(next)}) →
              </a>
            )}
            <small>Use ← / → keys when focus is outside controls.</small>
          </nav>
          <p>
            This is a historical reference, not a current availability or
            support guarantee.
          </p>
          <p>
            <a href={categoryPath(p.category)}>Browse all {p.category}</a> ·{" "}
            <a href={familyPath(family)}>Explore the {family} family</a>
            {p.year !== null && (
              <>
                {" "}
                ·{" "}
                <a href={eraPath(Math.floor(p.year / 10) * 10)}>
                  More {Math.floor(p.year / 10) * 10}s hardware
                </a>
              </>
            )}
          </p>
          {related.length > 0 && (
            <section>
              <h2>Related {family} devices</h2>
              <ul>
                {related.map((other) => (
                  <li key={other.id}>
                    <a href={productPath(other)}>{other.name}</a> ·{" "}
                    {year(other)}
                  </li>
                ))}
              </ul>
            </section>
          )}
          <p>
            <a className="primary" href="/#collection">
              Search and compare in the interactive collection
            </a>
          </p>
        </article>,
      ),
      schema: [
        {
          "@type": "WebPage",
          "@id": origin + path,
          name: p.name,
          url: origin + path,
          description: p.description,
          ...(p.researchedAt ? { dateModified: p.researchedAt } : {}),
          mainEntity: {
            "@type": "Product",
            name: p.name,
            description: p.description,
            category: p.category,
            model: p.name,
            ...(p.launchDate ? { releaseDate: p.launchDate } : {}),
            brand: { "@type": "Brand", name: brand },
            url: origin + path,
            ...(p.imageUrl ? { image: new URL(p.imageUrl, origin).href } : {}),
            additionalProperty: Object.entries(recordedSpecifications(p)).map(
              ([name, value]) => ({ "@type": "PropertyValue", name, value }),
            ),
          },
        },
        {
          "@type": "TechArticle",
          "@id": origin + path + "#article",
          headline: p.name,
          description: p.description,
          url: origin + path,
          ...(p.researchedAt ? { dateModified: p.researchedAt } : {}),
          citation: evidence.map((source) => source!.url),
          about: { "@type": "Product", name: p.name },
        },
        breadcrumbSchema(origin, trail),
      ],
    });
  }
  pages.push({
    path: "/404.html",
    title: `Page not found | ${siteName}`,
    description:
      "This archive page does not exist. Browse the catalogue to find a device.",
    body: shell(
      <>
        <h1>Page not found</h1>
        <p>The requested archive record could not be found.</p>
        <a href="/catalogue/">Browse all devices</a>
      </>,
    ),
    schema: [],
    noindex: true,
  });
  return pages;
}

export function renderExports(origin: string) {
  const references = [...products]
    .sort((a, b) => a.id - b.id)
    .map((p) => productMarkdown(p, origin));
  const llms = `# ${siteName}\n\n> Independent historical catalogue of ${products.length} hardware records. Specifications and dates may be incomplete; consult each entry's original sources.\n\n## Complete reference export\n- [All hardware records in Markdown](${origin}/llms-full.txt)\n- [Complete structured JSON inventory](${origin}/catalogue.json)\n- [Complete HTML catalogue](${origin}/catalogue/)\n- [Sitemap](${origin}/sitemap.xml)\n\n## Product families\n${allFamilies.map((f) => `- [${f}](${origin + familyPath(f)})`).join("\n")}\n\n## Research and attribution\nResearch dates describe archive review, not exact release dates or source publication dates. The archive is a curated selection, not an exhaustive product database. No blanket data or image license is declared; preserve linked source attribution and verify reuse rights with original owners.\n`;
  return [
    {
      path: "/catalogue.json",
      body: JSON.stringify(
        {
          schemaVersion: 1,
          recordCount: inventory.length,
          records: inventory.map((p) => ({
            ...p,
            url: origin + productPath(p),
          })),
        },
        null,
        2,
      ),
    },
    { path: "/llms.txt", body: llms },
    {
      path: "/llms-full.txt",
      body:
        `# ${siteName} — Complete reference\n\n${products.length} records. Original image and product rights remain with their respective owners. No blanket dataset license is declared.\n\n` +
        references.join("\n---\n\n"),
    },
    ...products.map((p) => ({
      path: markdownPath(p),
      body: productMarkdown(p, origin),
    })),
  ];
}
