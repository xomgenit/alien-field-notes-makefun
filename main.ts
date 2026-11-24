import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const review =
  "Day 2: I tried the local custom of 'small talk'. Nobody said anything small. Three stars, would abduct again.";

async function main(): Promise<void> {
  if (review.length < 1 || review.length > 200 || review.includes("\n")) {
    throw new Error(`entry must be one line of 1-200 characters, got ${review.length}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
  await mkdir(outDir, { recursive: true });
  await writeFile(join(outDir, "entry.txt"), review, "utf8");
}

await main();
