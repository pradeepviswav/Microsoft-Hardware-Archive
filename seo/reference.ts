import { Product } from "../types";
import { productFamily } from "../data/families";
import { productPath, siteName } from "./urls";
const md = (value: string) =>
  value.replace(/([\\`*_{}\[\]<>|])/g, "\\$1").replace(/\r?\n/g, " ");
const bib = (value: string) =>
  value
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/[{}%&#_$]/g, (c) => "\\" + c)
    .replace(/\r?\n/g, " ");
export const markdownPath = (p: Product) =>
  productPath(p).replace(/\/$/, ".md");
export const researchDate = (p: Product) => p.researchedAt || null;
export function citations(p: Product, origin: string) {
  const url = origin + productPath(p);
  const date = researchDate(p);
  return {
    markdown: `[${md(p.name)} — ${siteName}](${url})${date ? `. Research recorded ${date}` : ""}.`,
    bibtex: `@misc{microsoftHardware${p.id},\n  title = {${bib(p.name)} — ${siteName}},\n  howpublished = {\\url{${url}}}${date ? `,\n  note = {Research recorded ${date}}` : ""}\n}`,
  };
}
export function productMarkdown(p: Product, origin: string): string {
  const evidence = [p.source, ...(p.additionalSources || [])].filter(Boolean);
  const cite = citations(p, origin);
  return `# ${md(p.name)}${p.year === null ? "" : ` (${p.year})`}\n\nCanonical entry: ${origin + productPath(p)}\n\n## Overview\n\n${md(p.description)}\n\n## Recorded specifications\n\n| Field | Value |\n| --- | --- |\n${Object.entries(
    {
      "Introduction / release year":
        p.year === null ? "Unconfirmed" : String(p.year),
      Category: p.category,
      "Product family": productFamily(p),
      ...(p.specs || {}),
    },
  )
    .map(([k, v]) => `| ${md(k)} | ${md(v)} |`)
    .join(
      "\n",
    )}\n\n${md(p.dateLabel || "Year refers to introduction or release, not an exact date. Availability may vary by region.")}\n\n## Images and diagrams\n\n${p.imageUrl ? `- Image: ${new URL(p.imageUrl, origin).href}\n- Kind: ${p.imageKind === "diagram" ? "Manufacturer support diagram" : "Product photograph"}\n${p.imageCredit ? `- Credit: ${md(p.imageCredit)}\n` : ""}${p.imageSource ? `- Image source: ${p.imageSource}\n` : ""}${p.imageLicense ? `- Image license: ${p.imageLicense}\n` : ""}${p.imageNote ? `- Note: ${md(p.imageNote)}\n` : ""}` : "Photo not yet catalogued.\n"}\n## Research sources\n\n${evidence.length ? evidence.map((s) => `- [${md(s!.title)}](${s!.url})${s!.kind ? ` — ${s!.kind}` : ""}${s!.publishedAt ? ` (published ${s!.publishedAt})` : ""}`).join("\n") : "Original archive entry; independently verified sources have not been recorded."}\n\nResearch date: ${researchDate(p) || "Not recorded"}. This date describes archive research, not product release or source publication.\n\n## Cite this entry\n\n${cite.markdown}\n\n\`\`\`bibtex\n${cite.bibtex}\n\`\`\`\n\nIndependent historical reference; not an availability or support guarantee. Image and product rights remain with their owners.\n`;
}
