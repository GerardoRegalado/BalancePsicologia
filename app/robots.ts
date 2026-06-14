import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const canonicalHome = "https://www.balancepsicologia.com";

export function buildRobots(isIndexable = siteConfig.isIndexable): MetadataRoute.Robots {
  if (!isIndexable) {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${canonicalHome}/sitemap.xml`,
    host: canonicalHome,
  };
}

export default function robots(): MetadataRoute.Robots {
  return buildRobots();
}
