import type { NextConfig } from "next";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/** App directory (this repo), not a parent monorepo folder. */
function appRoot(): string {
  let dir = path.dirname(fileURLToPath(import.meta.url));
  for (let i = 0; i < 8 && dir !== path.parse(dir).root; i++) {
    const pkgPath = path.join(dir, "package.json");
    if (fs.existsSync(pkgPath)) {
      try {
        const name = JSON.parse(fs.readFileSync(pkgPath, "utf8")).name as string;
        if (name === "austro-website") return dir;
      } catch {
        /* ignore */
      }
    }
    dir = path.dirname(dir);
  }
  return path.dirname(fileURLToPath(import.meta.url));
}

const nextConfig: NextConfig = {
  turbopack: {
    root: appRoot(),
  },
};

export default nextConfig;
