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
  p.lifecycle ??= null;
  p.softwareSupport ??= null;
  p.usbIds ??= [];
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
const lifecycleLabels = {
  "active-microsoft": "Microsoft Store listing",
  discontinued: "Discontinued",
  "licensed-incase": "Incase licensed",
  unreleased: "Unreleased",
};

export function hardwareSearchText(p: Product) {
  const ids = (p.usbIds ?? []).flatMap(({ id }) => {
    const [vendor, product] = id.split(":");
    return [id, `VID_${vendor}&PID_${product}`];
  });
  return [p.partNumber, ...ids].filter(Boolean).join(" ");
}

export function recordedSpecifications(p: Product): Record<string, string> {
  return {
    ...(p.specs || {}),
    ...(p.manufacturer ? { Manufacturer: p.manufacturer } : {}),
    ...(p.launchDate ? { "Launch date": p.launchDate } : {}),
    ...(p.partNumber ? { "Part number": p.partNumber } : {}),
    ...(p.connectionType ? { "Connection type": p.connectionType } : {}),
    ...(p.operatingSystem ? { "Operating system": p.operatingSystem } : {}),
    ...(p.lifecycle
      ? {
          Lifecycle: `${lifecycleLabels[p.lifecycle.status]} · ${p.lifecycle.note} (checked ${p.lifecycle.checkedAt})`,
        }
      : {}),
    ...(p.softwareSupport
      ? { "Software compatibility": p.softwareSupport }
      : {}),
    ...(p.usbIds?.length
      ? {
          "USB identifiers": p.usbIds
            .map(({ id, label }) => (label ? `${id} (${label})` : id))
            .join("; "),
        }
      : {}),
    ...(p.msrp
      ? {
          "Historical MSRP": `${p.msrp.amount} ${p.msrp.currency} (${p.msrp.region}; ${p.msrp.date})`,
        }
      : {}),
  };
}
