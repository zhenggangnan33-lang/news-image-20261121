// news-image-20261121 entry (Node 22, standard library only).
// The entry image is the entry.png beside this file; the program copies
// it to the grader's output directory. The image itself is drawn by
// render.py (PIL) from verified 21 November 2026 news — see
// NEWS_SOURCES.md. Run offline twice for byte-identical output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from "node:fs";
import { join } from "node:path";

copyFileSync(
  new URL("./entry.png", import.meta.url),
  join(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", "entry.png"),
);
