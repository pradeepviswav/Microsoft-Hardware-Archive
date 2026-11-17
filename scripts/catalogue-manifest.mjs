import { build } from "vite";
import { writeFile, rm } from "node:fs/promises";
import { resolve } from "node:path";
const output = resolve(".catalogue");
try {
  await build({
    build: { ssr: "data/inventory.ts", outDir: output, emptyOutDir: true },
  });
  const { inventory } = await import(resolve(output, "inventory.js"));
  await writeFile(
    "data/catalogue-provenance.json",
    JSON.stringify(inventory, null, 2) + "\n",
  );
  console.log(`Wrote provenance for all ${inventory.length} records.`);
} finally {
  await rm(output, { recursive: true, force: true });
}
