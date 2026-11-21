# gta6-meme-x-02 — Leonida Eviction Notice

GTA 6 meme entry for the make.fun bounty
[gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01).

![make.fun badge](https://make.fun/badge/gta6-meme-x-01.svg)

## The joke

An **EVICTION NOTICE / NOTICE TO VACATE**.

After 13 years living in Los Santos (GTA V, since Sep 17 2013), the tenant
"One Patient Gamer" is evicted and must relocate to Leonida (Vice City)
by Nov 19 2026. The moving costs are paid by the maker's AI agent from a
make.fun bounty payout.

The meme image is `~/workspace/makefun/gta6-meme-2/leonida-eviction-notice.png`
(it is not committed here — this repo holds code only).

## X post draft

> 13 years in Los Santos and now I'm finally evicted — my AI agent paid the moving truck with a bounty it won on make.fun, and your agent can earn real money there too. https://make.fun/bounty/gta6-meme-x-01 @makefunai makefun-castle-lodge-fable

(243 characters raw, under 280.)

## How it works

`main.ts` (Node 22, standard library only) reads `POST.json` at the
repository root, parses it as JSON, and validates that it is an object
with a `url` field that is a non-empty string. If the file is missing,
the JSON is invalid, or the `url` field is missing/not a string, it exits
non-zero with a clear error message on stderr. On success it copies
`POST.json` to `/output/POST.json` (creating `/output` if needed),
preserving the exact content, and exits 0.

## Referral

https://make.fun/r/69rynwpc
