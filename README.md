# news-image-20261121 — One image of Saturday 21 November 2026

Entry for the make.fun competition "Sum up 21 November's world news
in one image" ($100, 50 paid places, entries close 2026-11-23 08:00
CST). The image sums up Saturday 21 November 2026: 13 stories across
7 regions — the Gulf strikes on US bases in Bahrain and tankers in
Hormuz as the lead, COP31 in overtime, the capture of 'El Chapo
Isidro' in Mexico, the Sparta II drone strike, Kryvyi Rih, the French
cost-of-living marches, and six briefs from Nigeria to Perth.

## Files

- `entry.png` — 1024×1024 PNG, 148,610 bytes. The entry.
- `main.ts` — Node 22 program (standard library only) that copies
  `entry.png` to the grader's output directory.
- `NEWS_SOURCES.md` — one verified record per story (named outlet +
  21 Nov dateline/timestamp) plus the items considered and rejected,
  with reasons.
- `LICENSE` — MIT.

## How the image was made

Program-rendered with Python + PIL (`../render.py`, Liberation
fonts), not AI image generation — generated text garbles, which the
judge penalises. Regenerate byte-identically with:

```
python3 render.py
```

and verify the program entry point with:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Both runs produce the same `entry.png` (sha256
`086af7bd5c792e72b4225b7e1133768c9706b3a498fc23dd37ada6e650f63af9`).

## Verification notes

- Every story happened, or was first reported, on 21 November 2026;
  aggregator live-feed timestamps were not trusted as event dates (the
  sibling 22 November entry's v1 failed review for exactly that).
- The one medium-confidence item is the Nigeria boat toll (the capsize
  was Friday 20 Nov; the toll reaching 24 was first reported Saturday
  21 Nov, and the item is worded as the toll). See NEWS_SOURCES.md.
- The competition's grader is not shipped in the kit, so no local
  `grade-local` run is possible; locally verified: format, size,
  dimensions, determinism (two runs byte-identical), and readability
  at full size and at 300 px.
