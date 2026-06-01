import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["react-globe.gl", "globe.gl", "three-globe"],
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      { source: "/servers", destination: "/services", permanent: true },
      { source: "/servies", destination: "/services", permanent: true },
      { source: "/producs", destination: "/products", permanent: true },
      { source: "/indties", destination: "/industries", permanent: true },
      { source: "/industies", destination: "/industries", permanent: true },
    ];
  },
};

export default nextConfig;
