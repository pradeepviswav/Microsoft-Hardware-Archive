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
        <a href="/catalogue/">All devices</a> ·{" "}
        <a href="/llms.txt">Research guide</a> ·{" "}
        <a href="/llms-full.txt">Complete Markdown export</a>
        <a href="/catalogue.json">Complete JSON inventory</a>
        <br />
        Explore the complete collection by category, product line, or decade.
      </p>
      <section className="directory-group" id="categories">
        <h3>Product categories</h3>
        <ul>
          {categories
            .filter((c) => c !== "All")
            .map((c) => (
              <li key={c}>
                <a href={categoryPath(c)}>{c}</a>
              </li>
            ))}
        </ul>
      </section>
      <section className="directory-group" id="families">
        <h3>Product families</h3>
        <ul>
          {families.map((f) => (
            <li key={f}>
              <a href={familyPath(f)}>{f}</a>
            </li>
          ))}
        </ul>
      </section>
      <section className="directory-group" id="decades">
        <h3>Hardware through the decades</h3>
        <ul>
          {decades.map((d) => (
            <li key={d}>
              <a href={eraPath(d)}>{d}s hardware</a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
