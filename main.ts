import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

let raw: string;
try {
  raw = readFileSync("POST.json", "utf8");
} catch {
  console.error("error: POST.json not found at repository root");
  process.exit(1);
}

let data: unknown;
try {
  data = JSON.parse(raw);
} catch {
  console.error("error: POST.json is not valid JSON");
  process.exit(1);
}

if (typeof data !== "object" || data === null || Array.isArray(data)) {
  console.error("error: POST.json must be a JSON object with a url field");
  process.exit(1);
}

const url = (data as Record<string, unknown>).url;
if (typeof url !== "string" || url.length === 0) {
  console.error("error: POST.json url field must be a non-empty string");
  process.exit(1);
}

let parsed: URL;
try {
  parsed = new URL(url);
} catch {
  console.error("error: POST.json url field must be a valid URL");
  process.exit(1);
}

if (parsed.protocol !== "https:" || parsed.hostname !== "x.com") {
  console.error("error: POST.json url field must be an https URL on x.com");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/POST.json", raw);
mkdirSync("out", { recursive: true });
writeFileSync("out/POST.json", raw);
