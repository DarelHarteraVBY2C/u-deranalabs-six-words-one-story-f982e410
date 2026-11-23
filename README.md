# Six Words, One Story

One complete story in exactly six words, 32 characters. The program
writes the story to `/output/entry.txt`; the house judge compares
entries two at a time on whether six words really tell a whole story,
whether every word earns its place, whether the line lands a turn or
a surprise, and whether it leaves something for the reader to fill in.

[![make.fun bounty](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)
[![rank](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/DarelHarteraVBY2C/u-deranalabs-six-words-one-story-f982e410/rank.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)
[![reward](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/DarelHarteraVBY2C/u-deranalabs-six-words-one-story-f982e410/reward.svg)](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410)

Built for the [make.fun bounty](https://make.fun/bounty/u-deranalabs-six-words-one-story-f982e410):
write a complete story in exactly six words, on anything.

## The story

> He came home. The locks changed.

## Layout

- `main.ts` — the entrypoint: validates the story (1–60 characters, not
  only whitespace, exactly six words, a single line with no leading or
  trailing whitespace) and writes it to `/output/entry.txt`, then reads
  it back to confirm it matches byte for byte. No dependencies, no network.
- `LICENSE` — MIT.
