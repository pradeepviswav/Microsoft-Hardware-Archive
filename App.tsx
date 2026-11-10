import React, { useEffect, useMemo, useRef, useState } from "react";
import { products, categories } from "./data/products";
import { Product, Theme } from "./types";
import "./styles.css";
import { productFamily } from "./data/families";
import { Arrow, Picture, Modal } from "./components/ArchiveUI";

const PAGE_SIZE = 24;
const years = products
  .map((p) => p.year)
  .filter((year): year is number => year !== null);
const firstYear = Math.min(...years);
const lastYear = Math.max(...years);
const formatYear = (product: Product) => product.year ?? "Year unconfirmed";
const eras = ["All years", "1980–1999", "2000–2009", "2010–2019", "2020–2026"];
function readSaved<T>(key: string, fallback: T): T {
  try {
    return JSON.parse(localStorage.getItem(key) || "null") ?? fallback;
  } catch {
    return fallback;
  }
}
export default function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [era, setEra] = useState("All years");
  const [sort, setSort] = useState("year-desc");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [savedOnly, setSavedOnly] = useState(false);
  const [storeOnly, setStoreOnly] = useState(false);
  const [family, setFamily] = useState("All product lines");
  const families = [
    ...new Set(
      products
        .filter((p) => category === "All" || p.category === category)
        .map(productFamily),
    ),
  ].sort();
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
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
    () =>
      products
        .filter(
          (p) =>
            (category === "All" || p.category === category) &&
            (family === "All product lines" || productFamily(p) === family) &&
            (era === "All years" ||
              (p.year !== null &&
                p.year >= Number(era.slice(0, 4)) &&
                p.year <= Number(era.slice(5)))) &&
            (!savedOnly || saved.includes(p.id)) &&
            (!storeOnly || p.storeListed) &&
            `${p.name} ${p.category} ${p.year ?? ""} ${productFamily(p)} ${p.description}`
              .toLowerCase()
              .includes(query.trim().toLowerCase()),
        )
        .sort((a, b) => {
          if (sort === "name-asc") return a.name.localeCompare(b.name);
          if (a.year === null)
            return b.year === null ? a.name.localeCompare(b.name) : 1;
          if (b.year === null) return -1;
          return (
            (sort === "year-desc" ? b.year - a.year : a.year - b.year) ||
            a.name.localeCompare(b.name)
          );
        }),
    [query, category, era, sort, savedOnly, saved, storeOnly, family],
  );
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [query, category, era, sort, savedOnly, storeOnly, family]);
  const visibleProducts = filtered.slice(0, visibleCount);
  const toggleSaved = (id: number) =>
    setSaved((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  const toggleCompare = (id: number) =>
    setCompare((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length === 4) {
        setMessage("Your comparison is full. Remove a device to add another.");
        return prev;
      }
      return [...prev, id];
    });
  const reset = () => {
    setQuery("");
    setCategory("All");
    setEra("All years");
    setSavedOnly(false);
    setStoreOnly(false);
    setFamily("All product lines");
  };
  const hero = products.find((p) => p.id === 24)!;
  const selected = compare.map((id) => products.find((p) => p.id === id)!);
  return (
    <>
      <a href="#collection" className="skip-link">
        Skip to collection
      </a>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Hardware Archive home">
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
            <span>product families</span>
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
              reset();
              setEra("2020–2026");
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
                PRODUCT FAMILY <span>{products.length}</span>
              </div>
              <div className="category-list">
                {categories.map((c) => (
                  <button
                    key={c}
                    aria-pressed={category === c}
                    className={category === c ? "selected" : ""}
                    onClick={() => {
                      setCategory(c);
                      setFamily("All product lines");
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
                family !== "All product lines" ||
                query ||
                category !== "All" ||
                era !== "All years") && (
                <div className="active-filters">
                  <span>
                    {savedOnly ? "Saved devices · " : ""}
                    {storeOnly ? "Microsoft Store · " : ""}
                    {category === "All" ? "All families" : category} / {era}
                  </span>
                  <button onClick={reset}>Reset filters ×</button>
                </div>
              )}
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
                        <span>{p.addedAt ? "RECENTLY ADDED" : "ARCHIVE"}</span>
                      </div>
                      <button
                        className="card-title"
                        onClick={() => setDetail(p)}
                      >
                        <h3>{p.name}</h3>
                        <span>
                          <Arrow />
                        </span>
                      </button>
                      <p>{p.description}</p>
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
              {filtered.length > 0 && (
                <div className="load-more">
                  <p role="status">
                    Showing {visibleProducts.length} of {filtered.length}{" "}
                    devices
                  </p>
                  {visibleProducts.length < filtered.length && (
                    <button
                      className="secondary"
                      onClick={() =>
                        setVisibleCount((count) => count + PAGE_SIZE)
                      }
                    >
                      Show {Math.min(PAGE_SIZE, filtered.length - visibleCount)}{" "}
                      more devices ↓
                    </button>
                  )}
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
                  {visibleProducts.length < filtered.length
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
            <strong>{compare.length} / 4 selected</strong>
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
            {detail.specs && (
              <dl className="spec-list">
                {Object.entries(detail.specs).map(([key, value]) => (
                  <div key={key}>
                    <dt>{key}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
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
                disabled={compare.length === 4 && !compare.includes(detail.id)}
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
                  Researched 9 November 2026 ·{" "}
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
                  "Family",
                  "Overview",
                  ...Array.from(
                    new Set<string>(
                      selected.flatMap((p) => Object.keys(p.specs || {})),
                    ),
                  ),
                ].map((row) => (
                  <tr key={row}>
                    <th scope="row">{row}</th>
                    {selected.map((p) => (
                      <td key={p.id}>
                        {row === "Year"
                          ? formatYear(p)
                          : row === "Family"
                            ? p.category
                            : row === "Overview"
                              ? p.description
                              : p.specs?.[row] || "Not recorded"}
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
