// news-image-20261121 entry (Node 22, standard library only).
// The entry image is the entry.png beside this file; the program copies
// it to the grader's output directory. The image itself is drawn by
// render.py (PIL) from verified 21 November 2026 news — see
// NEWS_SOURCES.md. Run offline twice for byte-identical output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const source = new URL("./entry.png", import.meta.url);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const destination = join(outputDir, "entry.png");

// Create the output directory if it does not exist yet, so the copy
// does not fail when the grader hands us a fresh path.
mkdirSync(outputDir, { recursive: true });

copyFileSync(source, destination);

// Verify the copy: the copied file must be byte-for-byte the same
// size as the source, otherwise fail loudly instead of silently
// submitting a truncated entry.
const sourceSize = statSync(source).size;
const copiedSize = statSync(destination).size;
if (copiedSize !== sourceSize) {
  throw new Error(
    `entry.png copy verification failed: copied ${copiedSize} bytes, expected ${sourceSize} bytes`,
  );
}
