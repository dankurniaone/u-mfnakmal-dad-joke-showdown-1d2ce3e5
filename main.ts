/**
 * Dad Joke Showdown — u-mfnakmal-dad-joke-showdown-1d2ce3e5
 *
 * Writes one dad joke to /output/entry.txt and self-checks the gate:
 * UTF-8 text of 1 to 200 characters, not only white space.
 *
 * The joke: a father-of-three delivery, one clean pun ("pun-dad-mental"
 * = fundamental) that lands on first read, fresh rather than a canon
 * retread (no "Hi Hungry", no two-tired bicycle, no scarecrow in his
 * field), tight, punchline at the end, reads naturally aloud.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const JOKE =
  "I told my kids I'm not just their dad. I'm a pun-dad-mental part of this family.";

function gateCheck(text: string): void {
  // Count characters (code points), not bytes — the gate counts characters.
  const chars = [...text].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`gate: entry is ${chars} characters, must be 1-200`);
  }
  if (text.trim().length === 0) {
    throw new Error("gate: entry is only white space");
  }
  // Must be valid UTF-8: a round trip through a Buffer must be identical.
  if (Buffer.from(text, "utf8").toString("utf8") !== text) {
    throw new Error("gate: entry is not valid UTF-8");
  }
}

function main(): void {
  gateCheck(JOKE);
  const here = dirname(fileURLToPath(import.meta.url));
  const candidates = ["/output", join(here, "output")];
  let written: string | null = null;
  for (const dir of candidates) {
    try {
      mkdirSync(dir, { recursive: true });
      const path = join(dir, "entry.txt");
      writeFileSync(path, JOKE, "utf8");
      written = path;
      break;
    } catch {
      continue;
    }
  }
  if (written === null) {
    throw new Error("no writable output directory");
  }
  // Also keep a local mirror next to the program: /output is shared with
  // other entries on this machine, so the mirror makes verification
  // deterministic even if another program writes there afterwards.
  try {
    const mirrorDir = join(here, "output");
    mkdirSync(mirrorDir, { recursive: true });
    writeFileSync(join(mirrorDir, "entry.txt"), JOKE, "utf8");
  } catch {
    // The mirror is a convenience only; the graded output is /output.
  }
  // Read back and verify the round trip, exactly as the grader will read it.
  const back = readFileSync(written, "utf8");
  if (back !== JOKE) {
    throw new Error("round-trip mismatch: file does not hold the joke");
  }
  gateCheck(back);
  console.log(`wrote ${written}: ${[...JOKE].length} chars, gate OK`);
}

main();
