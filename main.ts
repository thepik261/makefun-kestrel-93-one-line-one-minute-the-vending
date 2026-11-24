// One Line, One Minute: The Vending Machine Pickup Line Contest
// Writes a single pickup line, spoken by a vending machine to a passing
// human, to <OUTPUT_DIR>/entry.txt (default /output/entry.txt).
// Pure Node standard library only. Deterministic: the same line every run.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I hum all day, my coils spin just for you, and I take exact change — feed me a coin and I'll dispense the sweetest thing in this hallway: us.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
// The gate requires 1–200 characters of non-whitespace text.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, LINE, "utf8");
try {
  chmodSync(outFile, 0o644);
} catch {
  // Leave the file as written; never fail the run over permissions.
}
