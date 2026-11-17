import React from "react";
import { categories, products } from "../data/products";
import { productFamily } from "../data/families";
import { categoryPath, familyPath, eraPath } from "./urls";
export default function Directory() {
  const families = [...new Set(products.map(productFamily))].sort();
  const decades = [
    ...new Set(
      products.flatMap((p) =>
        p.year === null ? [] : [Math.floor(p.year / 10) * 10],
      ),
    ),
  ].sort();
  return (
    <section
      className="archive-directory"
      aria-label="Browse the archive by topic"
    >
      <h2>Browse the hardware archive</h2>
      <p>
        Explore the complete collection by category, product line, or decade.
      </p>
      <details>
        <summary>Product categories</summary>
        <ul>
          {categories
            .filter((c) => c !== "All")
            .map((c) => (
              <li key={c}>
                <a href={categoryPath(c)}>{c}</a>
              </li>
            ))}
        </ul>
      </details>
      <details>
        <summary>Product families</summary>
        <ul>
          {families.map((f) => (
            <li key={f}>
              <a href={familyPath(f)}>{f}</a>
            </li>
          ))}
        </ul>
      </details>
      <details>
        <summary>Hardware through the decades</summary>
        <ul>
          {decades.map((d) => (
            <li key={d}>
              <a href={eraPath(d)}>{d}s hardware</a>
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
}
