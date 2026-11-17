import { recordedSpecifications } from "./data/metadata";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { products, categories } from "./data/products";
import { Product, Theme } from "./types";
import "./styles.css";
import { productFamily } from "./data/families";
import { Arrow, Picture, Modal } from "./components/ArchiveUI";

import Directory from "./seo/Directory";
import { productPath } from "./seo/urls";
import {
  BrowseState,
  defaults,
  PAGE_SIZE,
  eras,
  filterProducts,
  browseHref,
} from "./data/browse";
import { useBrowseState } from "./hooks/useBrowseState";

const years = products
  .map((p) => p.year)
  .filter((year): year is number => year !== null);
const firstYear = Math.min(...years);
const lastYear = Math.max(...years);
const formatYear = (product: Product) => product.year ?? "Year unconfirmed";
function readSaved<T>(key: string, fallback: T): T {
  try {
    return JSON.parse(localStorage.getItem(key) || "null") ?? fallback;
  } catch {
    return fallback;
  }
}
export default function App({
  initialBrowse = defaults,
}: { initialBrowse?: BrowseState } = {}) {
  const [browse, updateBrowse] = useBrowseState(initialBrowse);
  const {
    query,
    category,
    era,
    sort,
    view,
    savedOnly,
    storeOnly,
    family,
    diagramOnly,
  } = browse;
  const setQuery = (query: string) => updateBrowse({ query });
  const setCategory = (category: string) =>
    updateBrowse({ category, family: defaults.family });
  const setEra = (era: string) => updateBrowse({ era });
  const setSort = (sort: string) =>
    updateBrowse({ sort: sort as BrowseState["sort"] });
  const setView = (view: BrowseState["view"]) =>
    updateBrowse({ view, page: browse.page });
  const setSavedOnly = (savedOnly: boolean) => updateBrowse({ savedOnly });
  const setStoreOnly = (storeOnly: boolean) => updateBrowse({ storeOnly });
  const setFamily = (family: string) => updateBrowse({ family });
  const families = [
    ...new Set(
      products
        .filter((p) => category === "All" || p.category === category)
        .map(productFamily),
    ),
  ].sort();
  const [saved, setSaved] = useState<number[]>(() =>
    readSaved<unknown>("archive-saved", []) instanceof Array
      ? readSaved<unknown[]>("archive-saved", []).filter(
          (id): id is number => typeof id === "number",
        )
      : [],
  );
  const [compare, setCompare] = useState<number[]>([]);
  const [detail, setDetail] = useState<Product | null>(null);
  const [comparisonOpen, setComparisonOpen] = useState(false);
  const [about, setAbout] = useState(false);
  const [message, setMessage] = useState("");
  const [theme, setTheme] = useState<Theme>(() => {
    const value = readSaved<Theme>("archive-theme", "light");
    return value === "dark" ? "dark" : "light";
  });
  const searchRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("archive-theme", JSON.stringify(theme));
    } catch {}
  }, [theme]);
  useEffect(() => {
    try {
      localStorage.setItem("archive-saved", JSON.stringify(saved));
    } catch {}
  }, [saved]);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (
        e.key === "/" &&
        !["INPUT", "TEXTAREA", "SELECT"].includes(
          (e.target as HTMLElement).tagName,
        ) &&
        !(e.target as HTMLElement).isContentEditable &&
        !document.querySelector("dialog[open]")
      ) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => setMessage(""), 4000);
    return () => clearTimeout(timer);
  }, [message]);
  const filtered = useMemo(
    () => filterProducts(browse, saved),
    [browse, saved],
  );
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(browse.page, pageCount);
  useEffect(() => {
    if (browse.page !== currentPage) updateBrowse({ page: currentPage });
  }, [browse.page, currentPage]);
  const visibleProducts = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );
  const toggleSaved = (id: number) =>
    setSaved((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  const toggleCompare = (id: number) =>
    setCompare((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length === 3) {
        setMessage("Your comparison is full. Remove a device to add another.");
        return prev;
      }
      return [...prev, id];
    });
  const reset = () => updateBrowse({ ...defaults, view: browse.view });
  useEffect(() => {
    const clear = (event: KeyboardEvent) => {
      if (
        event.key === "Escape" &&
        !document.querySelector("dialog[open]") &&
        !(event.target as HTMLElement).isContentEditable
      )
        reset();
    };
    window.addEventListener("keydown", clear);
    return () => window.removeEventListener("keydown", clear);
  }, [browse.view]);
  const hero = products.find((p) => p.id === 24)!;
  const selected = compare.map((id) => products.find((p) => p.id === id)!);
  return (
    <>
      <a href="#collection" className="skip-link">
        Skip to collection
      </a>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Hardware Archive home">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span>
            Microsoft
            <br />
            <strong>Hardware Archive</strong>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#collection" className="nav-active" onClick={reset}>
            Collection
          </a>
          <button
            onClick={() => {
              setSavedOnly(true);
              document.getElementById("collection")?.scrollIntoView();
            }}
          >
            Saved <span>{saved.length}</span>
          </button>
          <a href="#categories">Categories</a>
          <a href="#families">Families</a>
          <a href="#decades">Decades</a>
          <button onClick={() => setAbout(true)}>About the archive</button>
        </nav>
        <button
          className="icon-button theme-toggle"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "◐" : "◑"}
        </button>
      </header>
      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="live-dot" /> AN INDEPENDENT DIGITAL COLLECTION
            </div>
            <h1>
              Big ideas.
              <br />
              Real hardware.
            </h1>
            <p>
              From early expansion cards to a new generation of Surface. Explore
              the devices that shaped how we work, play, and create.
            </p>
            <a className="primary" href="#collection">
              Explore the collection{" "}
              <span>
                <Arrow />
              </span>
            </a>
            <div className="hero-meta">
              <span>
                {firstYear} — {lastYear}
              </span>
              <span>{products.length} devices. Countless possibilities.</span>
            </div>
          </div>
          <button
            className="hero-feature"
            onClick={() => setDetail(hero)}
            aria-label={`Explore ${hero.name}`}
          >
            <img src={hero.imageUrl} alt="Surface Laptop 13-inch" />
            <span className="feature-label">
              <span>
                <small>THE NEXT CHAPTER / 2026</small>
                <strong>Small footprint. Fresh perspective.</strong>
              </span>
              <span className="round-arrow">
                <Arrow />
              </span>
            </span>
          </button>
        </section>
        <section className="archive-strip" aria-label="Archive highlights">
          <div>
            <strong>{lastYear - firstYear}</strong>
            <span>years of hardware</span>
          </div>
          <div>
            <strong>{categories.length - 1}</strong>
            <span>product categories</span>
          </div>
          <div>
            <span className="live-dot" />
            <span>
              Recent additions researched
              <br />
              <b>9 November 2026</b>
            </span>
          </div>
          <a
            href="#collection"
            onClick={() => {
              updateBrowse({ ...defaults, era: "2020–2029" });
            }}
          >
            Explore the modern era <Arrow />
          </a>
        </section>
        <section id="collection" className="collection">
          <div className="section-heading">
            <div>
              <div className="eyebrow">EXPLORE THE ARCHIVE</div>
              <h2>
                {savedOnly
                  ? "Your saved collection"
                  : "A legacy you can explore."}
              </h2>
            </div>
            <p>
              Iconic beginnings. Unexpected experiments.
              <br />
              Find your next rabbit hole.
            </p>
          </div>
          <div className="collection-layout">
            <aside aria-label="Filter collection">
              <div className="filter-heading">
                PRODUCT CATEGORY <span>{products.length}</span>
              </div>
              <div className="category-list">
                {categories.map((c) => (
                  <button
                    key={c}
                    aria-pressed={category === c}
                    className={category === c ? "selected" : ""}
                    onClick={() => {
                      setCategory(c);
                    }}
                  >
                    <span>{c === "All" ? "All devices" : c}</span>
                    <small>
                      {c === "All"
                        ? products.length
                        : products.filter((p) => p.category === c).length}
                    </small>
                  </button>
                ))}
              </div>
              <div className="sidebar-note">
                <span>✳</span>
                <h3>
                  A little nostalgia.
                  <br />A lot of innovation.
                </h3>
                <p>
                  A curated collection of Microsoft devices and the ideas behind
                  them.
                </p>
                <button onClick={() => setAbout(true)}>
                  About this project <Arrow />
                </button>
              </div>
            </aside>
            <div className="collection-main">
              <div className="toolbar">
                <div className="search-box">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <circle cx="10.5" cy="10.5" r="6.5" />
                    <path d="m16 16 5 5" />
                  </svg>
                  <input
                    ref={searchRef}
                    aria-label="Search devices"
                    maxLength={300}
                    placeholder="Search devices, years, or ideas…"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  {query ? (
                    <button
                      aria-label="Clear search"
                      onClick={() => setQuery("")}
                    >
                      ×
                    </button>
                  ) : (
                    <kbd>/</kbd>
                  )}
                </div>
                <label className="select-wrap">
                  <span className="sr-only">Filter by era</span>
                  <select value={era} onChange={(e) => setEra(e.target.value)}>
                    {eras.map((x) => (
                      <option key={x}>{x}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="family-filter">
                Product line{" "}
                <select
                  aria-label="Filter by product line"
                  value={family}
                  onChange={(e) => setFamily(e.target.value)}
                >
                  <option>All product lines</option>
                  {families.map((line) => (
                    <option key={line}>{line}</option>
                  ))}
                </select>
              </label>
              <label className="diagram-filter">
                <input
                  type="checkbox"
                  checked={diagramOnly}
                  onChange={(e) =>
                    updateBrowse({ diagramOnly: e.target.checked })
                  }
                />
                Has support diagram
              </label>
              <label className="store-filter">
                <input
                  type="checkbox"
                  checked={storeOnly}
                  onChange={(e) => setStoreOnly(e.target.checked)}
                />
                Microsoft Store selection{" "}
                <small>Listings checked 9 Nov 2026; stock varies.</small>
              </label>
              <div className="results-bar">
                <p role="status">
                  <b>{filtered.length}</b>{" "}
                  {filtered.length === 1 ? "device" : "devices"}
                  {category !== "All"
                    ? ` in ${category}`
                    : " in the collection"}
                </p>
                <div>
                  <label>
                    <span className="sr-only">Sort devices</span>
                    <select
                      value={sort}
                      onChange={(e) => setSort(e.target.value)}
                    >
                      <option value="year-desc">Newest first</option>
                      <option value="year-asc">Oldest first</option>
                      <option value="name-asc">Name: A–Z</option>
                    </select>
                  </label>
                  <div className="view-toggle" aria-label="View style">
                    <button
                      aria-label="Spec table view"
                      aria-pressed={view === "table"}
                      onClick={() => setView("table")}
                    >
                      Table
                    </button>
                    <button
                      aria-label="Grid view"
                      aria-pressed={view === "grid"}
                      onClick={() => setView("grid")}
                    >
                      ▦
                    </button>
                    <button
                      aria-label="List view"
                      aria-pressed={view === "list"}
                      onClick={() => setView("list")}
                    >
                      ☰
                    </button>
                  </div>
                </div>
              </div>
              {(savedOnly ||
                storeOnly ||
                diagramOnly ||
                family !== "All product lines" ||
                query ||
                category !== "All" ||
                era !== "All years") && (
                <div className="active-filters">
                  <span>
                    {savedOnly ? "Saved devices · " : ""}
                    {storeOnly ? "Microsoft Store · " : ""}
                    {category === "All" ? "All categories" : category} /{" "}
                    {family} / {era}
                    {diagramOnly ? " / Support diagrams" : ""}
                  </span>
                  <button onClick={reset}>Reset filters ×</button>
                </div>
              )}
              {view === "table" ? (
                <div className="table-scroll">
                  <table className="browse-table">
                    <caption>
                      Hardware specifications — page {currentPage} of{" "}
                      {pageCount}
                    </caption>
                    <thead>
                      <tr>
                        {[
                          "Device",
                          "Year",
                          "Family",
                          "Interface / CPU",
                          "Diagram",
                          "Compare",
                        ].map((label) => (
                          <th scope="col" key={label}>
                            {label === "Device" ? (
                              <button onClick={() => setSort("name-asc")}>
                                Device: sort A–Z
                              </button>
                            ) : label === "Year" ? (
                              <button
                                onClick={() =>
                                  setSort(
                                    sort === "year-asc"
                                      ? "year-desc"
                                      : "year-asc",
                                  )
                                }
                              >
                                Year:{" "}
                                {sort === "year-asc" ? "oldest" : "newest"}{" "}
                                first
                              </button>
                            ) : (
                              label
                            )}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {visibleProducts.map((p) => (
                        <tr key={p.id}>
                          <th scope="row">
                            <a href={productPath(p)}>{p.name}</a>
                          </th>
                          <td>{formatYear(p)}</td>
                          <td>{productFamily(p)}</td>
                          <td>
                            {Object.entries(p.specs || {})
                              .filter(([key]) =>
                                /processor|cpu|interface|connectivity|connection|sensor/i.test(
                                  key,
                                ),
                              )
                              .map(([key, value]) => `${key}: ${value}`)
                              .join("; ") || "Not recorded"}
                          </td>
                          <td>
                            {p.imageKind === "diagram"
                              ? "Support diagram"
                              : "—"}
                          </td>
                          <td>
                            <button
                              aria-label={`${compare.includes(p.id) ? "Remove" : "Compare"} ${p.name}`}
                              aria-pressed={compare.includes(p.id)}
                              onClick={() => toggleCompare(p.id)}
                            >
                              {compare.includes(p.id) ? "Remove" : "＋ Compare"}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div
                  className={`product-grid ${view === "list" ? "list-view" : ""}`}
                >
                  {visibleProducts.map((p) => (
                    <article
                      key={p.id}
                      className={`product-card ${compare.includes(p.id) ? "in-comparison" : ""}`}
                    >
                      <div
                        className={`product-image family-${p.category.toLowerCase().replaceAll(" ", "-")}`}
                      >
                        <button
                          className="image-open"
                          onClick={() => setDetail(p)}
                          aria-label={`View ${p.name}`}
                        >
                          <Picture product={p} />
                        </button>
                        <span className="year-tag">{formatYear(p)}</span>
                        {p.imageKind === "diagram" && (
                          <span className="image-kind">Support diagram</span>
                        )}
                        <button
                          className="save-button"
                          aria-label={`${saved.includes(p.id) ? "Unsave" : "Save"} ${p.name}`}
                          aria-pressed={saved.includes(p.id)}
                          onClick={() => toggleSaved(p.id)}
                        >
                          {saved.includes(p.id) ? "♥" : "♡"}
                        </button>
                      </div>
                      <div className="card-body">
                        <div className="card-kicker">
                          {p.category}
                          <span>
                            {p.addedAt ? "RECENTLY ADDED" : "ARCHIVE"}
                          </span>
                        </div>
                        <h3>
                          <a className="card-title" href={productPath(p)}>
                            {p.name}
                            <span aria-hidden="true">
                              <Arrow />
                            </span>
                          </a>
                        </h3>
                        <p>{p.description}</p>
                        <button
                          className="record-link quick-view"
                          onClick={() => setDetail(p)}
                          aria-label={`Quick view ${p.name}`}
                        >
                          Quick view
                        </button>
                        <div className="card-bottom">
                          <span>
                            {p.source ? "Source linked" : "Historical entry"}
                          </span>
                          <button
                            className="compare-button"
                            aria-pressed={compare.includes(p.id)}
                            onClick={() => toggleCompare(p.id)}
                            aria-label={`${compare.includes(p.id) ? "Remove" : "Compare"} ${p.name}`}
                          >
                            {compare.includes(p.id) ? "✓ Added" : "＋ Compare"}
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
              {filtered.length > 0 && (
                <div className="load-more">
                  <p role="status">
                    Showing {(currentPage - 1) * PAGE_SIZE + 1}–
                    {Math.min(currentPage * PAGE_SIZE, filtered.length)} of{" "}
                    {filtered.length} devices
                  </p>
                  <nav className="pagination" aria-label="Collection pages">
                    {Array.from({ length: pageCount }, (_, i) => i + 1).map(
                      (page) => (
                        <a
                          key={page}
                          href={browseHref({ ...browse, page })}
                          aria-label={`Page ${page}`}
                          aria-current={
                            currentPage === page ? "page" : undefined
                          }
                          onClick={(event) => {
                            if (
                              event.button !== 0 ||
                              event.metaKey ||
                              event.ctrlKey ||
                              event.shiftKey ||
                              event.altKey
                            )
                              return;
                            event.preventDefault();
                            updateBrowse({ page });
                            document
                              .getElementById("collection")
                              ?.scrollIntoView();
                          }}
                        >
                          {page}
                        </a>
                      ),
                    )}
                  </nav>
                  <a href="/catalogue/">View the complete static catalogue</a>
                </div>
              )}
              {!filtered.length && (
                <div className="empty-state">
                  <span>⌕</span>
                  <h3>No devices found.</h3>
                  <p>
                    {savedOnly
                      ? "Save a device with the heart button, or try a different filter."
                      : "Try a broader search or explore another era."}
                  </p>
                  <button className="primary" onClick={reset}>
                    Explore all devices <Arrow />
                  </button>
                </div>
              )}
              <div className="collection-end">
                <span>
                  {currentPage < pageCount
                    ? "MORE DEVICES TO DISCOVER"
                    : "YOU’VE REACHED THE END OF THIS COLLECTION"}
                </span>
                <a href="#collection">Back to top ↑</a>
              </div>
            </div>
          </div>
        </section>
        <section className="closing-note">
          <span className="eyebrow">BUILT TO REMEMBER</span>
          <h2>
            Some devices changed the world.
            <br />
            Others just made it more interesting.
          </h2>
          <button onClick={() => setAbout(true)}>
            A note on the archive <Arrow />
          </button>
        </section>
        <Directory />
      </main>
      <footer>
        <span>
          Microsoft Hardware Archive{" "}
          <small>Independent project · Not affiliated with Microsoft</small>
        </span>
        <a
          href="https://github.com/pradeepviswav/Microsoft-Hardware-Archive"
          target="_blank"
          rel="noreferrer"
        >
          Explore on GitHub <Arrow />
        </a>
      </footer>
      {compare.length > 0 && (
        <div className="comparison-tray">
          <div>
            <strong>{compare.length} / 3 selected</strong>
            <span className="tray-names">
              {selected.map((p) => p.name).join(" · ")}
            </span>
          </div>
          <button className="text-button" onClick={() => setCompare([])}>
            Clear
          </button>
          <button
            className="primary"
            disabled={compare.length < 2}
            onClick={() => setComparisonOpen(true)}
          >
            {compare.length < 2 ? "Select one more" : "Compare devices"}
          </button>
        </div>
      )}
      <div className="toast" role="status">
        {message}
      </div>
      {detail && (
        <Modal title={detail.name} onClose={() => setDetail(null)}>
          <div className="detail-image">
            <Picture product={detail} eager />
          </div>
          <div className="detail-content">
            <div className="eyebrow">
              {detail.category} / {productFamily(detail)} / {formatYear(detail)}
            </div>
            <h2>{detail.name}</h2>
            <p>{detail.description}</p>
            {Object.keys(recordedSpecifications(detail)).length > 0 && (
              <dl className="spec-list">
                {Object.entries(recordedSpecifications(detail)).map(
                  ([key, value]) => (
                    <div key={key}>
                      <dt>{key}</dt>
                      <dd>{value}</dd>
                    </div>
                  ),
                )}
              </dl>
            )}
            <div className="detail-actions">
              <button
                className="primary"
                onClick={() => toggleSaved(detail.id)}
              >
                {saved.includes(detail.id)
                  ? "♥ Saved to your collection"
                  : "♡ Save to your collection"}
              </button>
              <button
                className="secondary"
                disabled={compare.length === 3 && !compare.includes(detail.id)}
                onClick={() => toggleCompare(detail.id)}
              >
                {compare.includes(detail.id)
                  ? "✓ In comparison"
                  : "＋ Add to comparison"}
              </button>
            </div>
            {detail.source ? (
              <div className="source-note">
                <span className="eyebrow">SOURCES &amp; SPECIFICATIONS</span>
                <a href={detail.source.url} target="_blank" rel="noreferrer">
                  {detail.source.title} <Arrow />
                </a>
                {detail.additionalSources?.map((source) => (
                  <a
                    key={source.url}
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {source.title} <Arrow />
                  </a>
                ))}
                <small>
                  Research date: {detail.researchedAt || "Not recorded"} ·{" "}
                  {detail.dateLabel || "Release year shown above"}
                </small>
              </div>
            ) : (
              <div className="source-note">
                <small>
                  Historical entry from the original collection. Details have
                  not been independently reverified in this refresh.
                </small>
              </div>
            )}
            {detail.imageNote && (
              <p className="image-note">{detail.imageNote}</p>
            )}
            {detail.imageUrl && (
              <p className="image-credit">
                Image:{" "}
                {detail.imageCredit ||
                  "Wikimedia Commons (original archive image)"}
                .{" "}
                {detail.imageSource && (
                  <a href={detail.imageSource} target="_blank" rel="noreferrer">
                    Original image source
                  </a>
                )}{" "}
                {detail.imageLicense && (
                  <a
                    href={detail.imageLicense}
                    target="_blank"
                    rel="noreferrer"
                  >
                    License
                  </a>
                )}
              </p>
            )}
          </div>
        </Modal>
      )}
      {comparisonOpen && (
        <Modal
          title="Compare devices"
          onClose={() => setComparisonOpen(false)}
          wide
        >
          <h2 className="compare-heading">Side by side.</h2>
          <div className="table-scroll">
            <table>
              <caption className="sr-only">
                Comparison of selected devices
              </caption>
              <thead>
                <tr>
                  <th scope="col">Device</th>
                  {selected.map((p) => (
                    <th scope="col" key={p.id}>
                      <div className="table-image">
                        <Picture product={p} />
                      </div>
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  "Year",
                  "Category",
                  "Family",
                  "Overview",
                  ...Array.from(
                    new Set<string>(
                      selected.flatMap((p) =>
                        Object.keys(recordedSpecifications(p)),
                      ),
                    ),
                  ),
                ].map((row) => (
                  <tr key={row}>
                    <th scope="row">{row}</th>
                    {selected.map((p) => (
                      <td key={p.id}>
                        {row === "Year"
                          ? formatYear(p)
                          : row === "Category"
                            ? p.category
                            : row === "Family"
                              ? productFamily(p)
                              : row === "Overview"
                                ? p.description
                                : recordedSpecifications(p)[row] ||
                                  "Not recorded"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Modal>
      )}
      {about && (
        <Modal title="About the archive" onClose={() => setAbout(false)}>
          <div className="detail-content">
            <h2>Hardware worth remembering.</h2>
            <p>
              This independent collection follows Microsoft hardware from early
              peripherals to modern Surface devices. It also includes partner
              hardware from the Windows Phone ecosystem.
            </p>
            <h3>How we keep it useful</h3>
            <p>
              Records link to Microsoft specifications, archived announcements,
              or Wikipedia. Years refer to release or introduction; an
              unconfirmed year is labelled explicitly. This is a curated
              selection, not a complete product catalog.
            </p>
            <p>
              New entries were researched on 9 November 2026. Historical entries
              are identified separately where their details have not been
              reverified. Announcement details and availability can vary by
              market; visit the linked source for context.
            </p>
            <h3>Your collection stays with you</h3>
            <p>
              Saved devices and your theme preference are stored in this browser
              when storage is available. There is no account or public review
              service.
            </p>
            <p>
              Product names and images belong to their respective owners.
              Photographs and support diagrams include attribution and original
              source links. A record without a confirmed image is marked “Photo
              not yet catalogued.”
            </p>
            <a
              className="secondary"
              href="https://github.com/pradeepviswav/Microsoft-Hardware-Archive"
              target="_blank"
              rel="noreferrer"
            >
              Visit the project on GitHub <Arrow />
            </a>
          </div>
        </Modal>
      )}
    </>
  );
}
