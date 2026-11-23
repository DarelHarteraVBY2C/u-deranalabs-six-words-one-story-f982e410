// Six Words, One Story — entry program for make.fun.
//
// The whole entry is one six-word story. This program validates it
// against the gate (UTF-8 text, 1 to 60 characters, not only whitespace,
// exactly six words) and writes it to /output/entry.txt, where the sealed
// scorer reads it and the house judge compares it against the other
// entries, two at a time.
//
// Runs on Node 22 with no dependencies and no network access.
import { mkdirSync, writeFileSync } from "node:fs";

// The story: "He came home. The locks changed."
//
// Six words, 32 characters. A man returns to the place that was his
// and finds the locks changed — in one breath the story moves from
// homecoming to lockout, from belonging to exile. The turn is the
// second sentence: nothing is explained, and everything is implied —
// who changed the locks, what he did, whether he knocks or walks away.
// Every word earns its place: "home" carries the whole history,
// "locks" carries the rejection, "changed" carries the betrayal.
// It reads cleanly aloud, two short sentences, and leaves the reader
// to fill in the life before and after those six words.
const STORY = "He came home. The locks changed.";

const OUTPUT_PATH = "/output/entry.txt";

// The gate accepts UTF-8 text of 1 to 60 characters that is not only
// whitespace; the brief asks for exactly six words, so the text must
// hold exactly six whitespace-separated words and no line break.
function validate(story: string): void {
  if (story.length < 1 || story.length > 60) {
    throw new Error(`story must be 1..60 characters, got ${story.length}`);
  }
  if (story.trim().length === 0) {
    throw new Error("story must not be only whitespace");
  }
  const words = story.trim().split(/\s+/);
  if (words.length !== 6) {
    throw new Error(`story must be exactly 6 words, got ${words.length}`);
  }
  if (/\n/.test(story)) {
    throw new Error("story must be a single line");
  }
  if (story !== story.trim()) {
    throw new Error("story must not start or end with whitespace");
  }
}

validate(STORY);
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, STORY, "utf8");

// Read the file back and confirm it holds exactly the story, byte for
// byte, so a stray newline or encoding slip can never reach the gate.
import { readFileSync } from "node:fs";
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== STORY) {
  throw new Error("round-trip check failed: /output/entry.txt differs from STORY");
}
console.log(
  `Wrote ${STORY.length} characters, ${STORY.trim().split(/\s+/).length} words to ${OUTPUT_PATH}`,
);
