import { products } from "./products";
// Complete inventory, including legacy/recent/tabletop/researched records. Image bytes and source pages are separate fields.
export const inventory = products.map((p) => ({
  ...p,
  sources: [p.source, ...(p.additionalSources || [])].filter(Boolean),
  researchStatus: p.researchedAt
    ? "reviewed"
    : p.source
      ? "source-linked"
      : "unverified-legacy",
}));
