// Order matters: priority area templates intentionally replace their base pages.
import { execFileSync } from "node:child_process";
import { resolve } from "node:path";
const root = resolve(import.meta.dirname, "..");
for (const script of ["generate-local-pages.mjs", "generate-priority-area-pages.mjs", "generate-car-cleaning-pages.mjs"]) {
  execFileSync(process.execPath, [resolve(import.meta.dirname, script)], { cwd: root, stdio: "inherit" });
}
