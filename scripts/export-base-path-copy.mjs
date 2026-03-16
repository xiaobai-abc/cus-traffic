import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { readFileSync } from "node:fs";

function readEnvValueFromFile(filePath, key) {
  if (!existsSync(filePath)) return "";
  const content = readFileSync(filePath, "utf8");
  const lines = content.split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const match = trimmed.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
    if (!match) continue;
    const [, currentKey, rawValue] = match;
    if (currentKey !== key) continue;
    const value = rawValue.replace(/^['"]|['"]$/g, "").trim();
    return value;
  }
  return "";
}

function resolveBasePathEnv() {
  if (process.env.NEXT_PUBLIC_BASE_PATH) return process.env.NEXT_PUBLIC_BASE_PATH;
  const envFiles = [
    ".env.production.local",
    ".env.local",
    ".env.production",
    ".env"
  ];
  for (const file of envFiles) {
    const value = readEnvValueFromFile(file, "NEXT_PUBLIC_BASE_PATH");
    if (value) return value;
  }
  return "";
}

const rawBasePath = resolveBasePathEnv();
const normalizedBasePath =
  rawBasePath && rawBasePath !== "/"
    ? `/${rawBasePath}`.replace(/\/+/g, "/").replace(/\/$/, "")
    : "";

if (!normalizedBasePath) {
  console.log("[export-base-path-copy] skip: NEXT_PUBLIC_BASE_PATH is empty");
  process.exit(0);
}

const outDir = "out";
if (!existsSync(outDir)) {
  console.log("[export-base-path-copy] skip: out directory does not exist");
  process.exit(0);
}

const relativeBasePath = normalizedBasePath.slice(1);
const firstSegment = relativeBasePath.split("/")[0];
const targetDir = join(outDir, relativeBasePath);

rmSync(targetDir, { recursive: true, force: true });
mkdirSync(targetDir, { recursive: true });

for (const item of readdirSync(outDir)) {
  if (item === firstSegment) continue;
  cpSync(join(outDir, item), join(targetDir, item), {
    recursive: true,
    force: true
  });
}

console.log(`[export-base-path-copy] mirrored export to /${relativeBasePath}`);
