import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Native modules stay as runtime requires instead of being bundled.
  serverExternalPackages: ["better-sqlite3", "sharp"],
  poweredByHeader: false,
  images: {
    qualities: [60, 75, 85],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
