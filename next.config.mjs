/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js"
      }
    }
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" }, // 允许所有 https 域名（或指定）
      { protocol: "http", hostname: "localhost" }
    ],
    formats: ["image/avif", "image/webp"], // 优先 AVIF/WebP
    minimumCacheTTL: 60 // 缓存 60s
  },
  poweredByHeader: false,
  reactStrictMode: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }
        ]
      }
    ];
  },
  experimental: {}
};

export default nextConfig;
