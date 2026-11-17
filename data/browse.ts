import { products, categories } from "./products";
import { productFamily } from "./families";
import { slug } from "../seo/urls";
import { Product } from "../types";
export const PAGE_SIZE = 24;
export const allFamilies = [...new Set(products.map(productFamily))].sort();
export const eras = [
  "All years",
  "1980–1989",
  "1990–1999",
  "2000–2009",
  "2010–2019",
  "2020–2029",
];
export type BrowseState = {
  query: string;
  category: string;
  family: string;
  era: string;
  diagramOnly: boolean;
  savedOnly: boolean;
  storeOnly: boolean;
  sort: "year-desc" | "year-asc" | "name-asc";
  view: "grid" | "list" | "table";
  page: number;
};
export const defaults: BrowseState = {
  query: "",
  category: "All",
  family: "All product lines",
  era: "All years",
  diagramOnly: false,
  savedOnly: false,
  storeOnly: false,
  sort: "year-desc",
  view: "grid",
  page: 1,
};
export const browsePagePath = (page: number) =>
  page === 1 ? "/" : `/browse/page/${page}/`;
export function parseBrowse(search: string, pathname = "/"): BrowseState {
  const params = new URLSearchParams(search);
  const page = Number(
    params.get("page") || pathname.match(/^\/browse\/page\/(\d+)\/$/)?.[1] || 1,
  );
  const category =
    categories.find((c) => slug(c) === params.get("category")) ||
    defaults.category;
  const family =
    allFamilies.find((f) => slug(f) === params.get("family")) ||
    defaults.family;
  return {
    ...defaults,
    query: (params.get("q") || "").slice(0, 300),
    category,
    family,
    era: params.get("decade")
      ? eras.find(
          (e) =>
            e.slice(0, 4) + "s" === params.get("decade") && e !== "All years",
        ) || defaults.era
      : defaults.era,
    diagramOnly: params.get("diagram") === "1",
    savedOnly: params.get("saved") === "1",
    storeOnly: params.get("store") === "1",
    sort: ["year-desc", "year-asc", "name-asc"].includes(
      params.get("sort") || "",
    )
      ? (params.get("sort") as BrowseState["sort"])
      : defaults.sort,
    view: ["grid", "list", "table"].includes(params.get("view") || "")
      ? (params.get("view") as BrowseState["view"])
      : defaults.view,
    page: Number.isSafeInteger(page) && page > 0 ? Math.min(page, 10000) : 1,
  };
}
export function browseHref(state: BrowseState): string {
  const params = new URLSearchParams();
  if (state.query) params.set("q", state.query);
  if (state.category !== "All") params.set("category", slug(state.category));
  if (state.family !== "All product lines")
    params.set("family", slug(state.family));
  if (state.era !== "All years")
    params.set("decade", state.era.slice(0, 4) + "s");
  if (state.diagramOnly) params.set("diagram", "1");
  if (state.savedOnly) params.set("saved", "1");
  if (state.storeOnly) params.set("store", "1");
  if (state.sort !== defaults.sort) params.set("sort", state.sort);
  if (state.view !== defaults.view) params.set("view", state.view);
  if (!params.size) return browsePagePath(state.page) + "#collection";
  if (state.page > 1) params.set("page", String(state.page));
  return "/?" + params.toString() + "#collection";
}
export function filterProducts(
  state: BrowseState,
  saved: number[] = [],
): Product[] {
  return products
    .filter(
      (p) =>
        (state.category === "All" || p.category === state.category) &&
        (state.family === "All product lines" ||
          productFamily(p) === state.family) &&
        (state.era === "All years" ||
          (p.year !== null &&
            p.year >= Number(state.era.slice(0, 4)) &&
            p.year <= Number(state.era.slice(5)))) &&
        (!state.diagramOnly || p.imageKind === "diagram") &&
        (!state.savedOnly || saved.includes(p.id)) &&
        (!state.storeOnly || p.storeListed) &&
        `${p.name} ${p.category} ${p.year ?? ""} ${productFamily(p)} ${p.description} ${(p.aliases || []).join(" ")}`
          .toLowerCase()
          .includes(state.query.trim().toLowerCase()),
    )
    .sort((a, b) =>
      state.sort === "name-asc"
        ? a.name.localeCompare(b.name)
        : a.year === null
          ? b.year === null
            ? a.name.localeCompare(b.name)
            : 1
          : b.year === null
            ? -1
            : (state.sort === "year-desc"
                ? b.year - a.year
                : a.year - b.year) || a.name.localeCompare(b.name),
    );
}
