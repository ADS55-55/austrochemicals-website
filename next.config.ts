import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

/** This config file lives at the package root; pin Turbopack so a parent lockfile does not steal the workspace root. */
const packageRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: packageRoot,
  },
};

export default nextConfig;
