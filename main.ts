import { mkdirSync, writeFileSync } from "node:fs";
import { text } from "./text.ts";

const outputDirectory = "/output";

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(`${outputDirectory}/entry.txt`, text);
