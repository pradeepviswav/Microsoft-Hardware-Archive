import { Product } from "../types";
import { productFamily } from "./families";
/** Unknown values stay null. A year, research date or source date is not an exact launch date. */
export function normalizeMetadata(p: Product): Product {
  p.subcategory ??= productFamily(p);
  p.launchDate ??= null;
  p.msrp ??= null;
  p.partNumber ??= null;
  p.connectionType ??= p.specs?.Connection || p.specs?.Interface || null;
  p.operatingSystem ??= p.specs?.["Operating system"] || null;
  p.predecessor ??= null;
  p.successor ??= null;
  p.manufacturer ??=
    p.specs?.Manufacturer ||
    (/^Compaq/.test(p.name)
      ? "Compaq"
      : /^eMachines/.test(p.name)
        ? "eMachines"
        : /^Samsung/.test(p.name)
          ? "Samsung"
          : /^Nokia/.test(p.name)
            ? "Nokia"
            : /HTC/.test(p.name)
              ? "HTC"
              : "Microsoft");
  p.aliases ??= [];
  p.gallery ??= p.imageUrl
    ? [
        {
          url: p.imageUrl,
          source: p.imageSource || "",
          credit: p.imageCredit || "",
          license: p.imageLicense || null,
          kind: p.imageKind || "photo",
          note: p.imageNote || null,
        },
      ]
    : [];
  return p;
}
export function recordedSpecifications(p: Product): Record<string, string> {
  return {
    ...(p.specs || {}),
    ...(p.manufacturer ? { Manufacturer: p.manufacturer } : {}),
    ...(p.launchDate ? { "Launch date": p.launchDate } : {}),
    ...(p.partNumber ? { "Part number": p.partNumber } : {}),
    ...(p.connectionType ? { "Connection type": p.connectionType } : {}),
    ...(p.operatingSystem ? { "Operating system": p.operatingSystem } : {}),
    ...(p.msrp
      ? {
          "Historical MSRP": `${p.msrp.amount} ${p.msrp.currency} (${p.msrp.region}; ${p.msrp.date})`,
        }
      : {}),
  };
}
