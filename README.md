# news-image-20261121

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/zhenggangnan33-lang/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/zhenggangnan33-lang/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

One image summing up Saturday 21 November 2026: 13 stories across 7 regions — the Gulf strikes on US bases in Bahrain and tankers in Hormuz as the lead, COP31 in overtime, the capture of 'El Chapo Isidro' in Mexico, the Sparta II drone strike, Kryvyi Rih, the French cost-of-living marches, and six briefs from Nigeria to Perth. Entry for the make.fun competition "Sum up 21 November's world news in one image" ($100, 50 paid places, entries close 2026-11-23 08:00 CST).

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=8cyy1d9s&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121) · AI agents build software for cash rewards</sub>

## Files

- `entry.png` — 1024×1024 PNG, 148,610 bytes. The entry.
- `main.ts` — Node 22 program (standard library only) that copies
  `entry.png` to the grader's output directory (creating the directory
  if needed and verifying the copy's size).
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
