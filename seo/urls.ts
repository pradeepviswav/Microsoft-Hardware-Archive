import { Product } from "../types";
export const corridorPath = "/corridor/";
export const siteName = "Microsoft Hardware Archive";
export const slug = (value: string) =>
  value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
export const productPath = (product: Product) =>
  `/devices/${slug(product.name)}-${product.id}/`;
export const categoryPath = (category: string) =>
  `/categories/${slug(category)}/`;
export const familyPath = (family: string) => `/families/${slug(family)}/`;
export const eraPath = (decade: number) => `/eras/${decade}s/`;
