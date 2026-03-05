import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use webpack (not Turbopack) for compatibility with legacy CSS files
  experimental: {},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'demo.awaikenthemes.com',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
