import { mkdirSync, writeFileSync } from "node:fs";
import { text } from "./text.ts";

const outDir = "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, text);
