/** @type {import('next').NextConfig} */
import bundleAnalizer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalizer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = withBundleAnalyzer({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  experimental: {
    // optimizePackageImports: ["@nextui-org"],
  },
});

export default nextConfig;
