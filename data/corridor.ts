import { Product } from "../types";
import { productFamily } from "./families";
import { products } from "./products";

export const lanes = [
  {
    name: "Compute",
    color: "#7cc4ff",
    examples: "Surface, displays, networking",
  },
  { name: "Mobile", color: "#ffb86b", examples: "Lumia, Kin, Band, Duo" },
  { name: "Play", color: "#a6e39a", examples: "Xbox, Kinect, Zune" },
  { name: "Input", color: "#e9a9f7", examples: "Mice, keyboards, peripherals" },
] as const;

export type Lane = (typeof lanes)[number]["name"];

export function deviceLane(product: Product): Lane {
  if (
    ["Phones", "Wearables"].includes(product.category) ||
    /^Surface Duo/.test(product.name)
  )
    return "Mobile";

  if (
    ["Xbox", "Zune", "Toys", "Game Controllers"].includes(product.category) ||
    /Xbox|Kinect|SideWinder/.test(product.name)
  )
    return "Play";

  if (
    [
      "Mice",
      "Keyboards",
      "Trackballs",
      "Webcams",
      "Adaptive Accessories",
      "Audio",
    ].includes(product.category) ||
    /Surface (Pen|Slim Pen|Dial|Headphones|Earbuds)/.test(product.name)
  )
    return "Input";

  return "Compute";
}

export const years = [
  ...new Set(products.flatMap((p) => (p.year === null ? [] : [p.year]))),
].sort((a, b) => b - a);
export const earliest = years.at(-1)!;
export const latest = years[0];
export const decades = Array.from(
  { length: Math.floor(latest / 10) - Math.floor(earliest / 10) + 1 },
  (_, index) => Math.floor(earliest / 10) * 10 + index * 10,
).map((year) => ({
  year,
  count: products.filter(
    (p) => p.year !== null && p.year >= year && p.year < year + 10,
  ).length,
}));
export const undatedCount = products.filter((p) => p.year === null).length;
export const families = [...new Set(products.map(productFamily))].sort((a, b) =>
  a.localeCompare(b),
);

export function familyDevices(family: string) {
  return products
    .filter((p) => productFamily(p) === family)
    .sort((a, b) => (a.year ?? Infinity) - (b.year ?? Infinity) || a.id - b.id);
}

export const openingDevice = products.find((p) => p.id === 12) ?? products[0];
