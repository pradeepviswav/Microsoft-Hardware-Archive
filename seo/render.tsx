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
} from "./urls";
import Directory from "./Directory";

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
    const related = products.filter(
      (other) => other.id !== p.id && productFamily(other) === family,
    );
    const evidence = sources(p);
    const brand = p.name.startsWith("Samsung")
      ? "Samsung"
      : p.name.startsWith("Nokia")
        ? "Nokia"
        : p.name.includes("HTC")
          ? "HTC"
          : "Microsoft";
    pages.push({
      path,
      title: `${p.name}${p.year === null ? "" : ` (${p.year})`} — Specs & History | ${siteName}`,
      description: p.description,
      image: p.imageUrl,
      modified: p.researchedAt || p.addedAt,
      body: shell(
        <article>
          {crumbs(trail)}
          <div className="eyebrow">
            <a href={familyPath(family)}>{family}</a>
          </div>
          <h1>{p.name}</h1>
          <p className="static-intro">{p.description}</p>
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
          <h2>Recorded specifications</h2>
          <table className="record-specs">
            <tbody>
              {Object.entries({
                Year: year(p),
                Category: p.category,
                "Product family": family,
                ...(p.specs || {}),
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
              "Year refers to the model’s introduction or release; availability may differ by region."}
          </p>
          <h2>Research sources</h2>
          {evidence.length ? (
            <ul>
              {evidence.map((s) => (
                <li key={s!.url}>
                  <a href={s!.url}>{s!.title}</a>
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
          {p.researchedAt && (
            <p>
              Research date:{" "}
              <time dateTime={p.researchedAt}>{p.researchedAt}</time>.
            </p>
          )}
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
            brand: { "@type": "Brand", name: brand },
            url: origin + path,
            ...(p.imageUrl ? { image: new URL(p.imageUrl, origin).href } : {}),
            additionalProperty: Object.entries(p.specs || {}).map(
              ([name, value]) => ({ "@type": "PropertyValue", name, value }),
            ),
          },
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
