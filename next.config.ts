import type { NextConfig } from "next";

const mediaHostname = process.env.NEXT_PUBLIC_MEDIA_HOSTNAME;
const mediaProtocol =
  process.env.NEXT_PUBLIC_MEDIA_PROTOCOL === "http" ? "http" : "https";

const nextConfig: NextConfig = {
  cacheComponents: true,
  poweredByHeader: false,
  reactStrictMode: true,
  typedRoutes: true,
  images: mediaHostname
    ? {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
          {
            protocol: mediaProtocol,
            hostname: mediaHostname,
          },
        ],
      }
    : {
        formats: ["image/avif", "image/webp"],
      },
};

export default nextConfig;
