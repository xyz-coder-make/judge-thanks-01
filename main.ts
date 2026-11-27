import { mkdir, writeFile } from "node:fs/promises";
import { text } from "./text.ts";

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", text);
