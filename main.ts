import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "fix(typo): also rewrote prod auth in Rust (38 files) for 4:59pm Friday, compiles so no rollback needed!";

const outputDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
