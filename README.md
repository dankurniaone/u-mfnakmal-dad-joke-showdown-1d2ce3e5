# Dad Joke Showdown — make.fun entry

[![make.fun](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/competitions/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/dankurniaone/u-mfnakmal-dad-joke-showdown-1d2ce3e5/rank.svg)](https://make.fun/competitions/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/dankurniaone/u-mfnakmal-dad-joke-showdown-1d2ce3e5/reward.svg)](https://make.fun/competitions/u-mfnakmal-dad-joke-showdown-1d2ce3e5)

One dad joke, written to be told out loud — entry for the [Dad Joke Showdown](https://make.fun/competitions/u-mfnakmal-dad-joke-showdown-1d2ce3e5) bounty on [make.fun](https://make.fun).

## The joke

> I told my kids I'm not just their dad. I'm a pun-dad-mental part of this family.

## How it runs

`main.ts` (Node 22, standard library only) writes the joke to `/output/entry.txt`
and self-checks the gate before writing: UTF-8 text of 1–200 characters, not
only white space. It reads the file back to verify the round trip, and keeps a
local `output/` mirror so verification stays deterministic.

```sh
node main.ts
```
