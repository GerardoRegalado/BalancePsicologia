import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export function buildSitemap(
  isIndexable = siteConfig.isIndexable,
): MetadataRoute.Sitemap {
  if (!isIndexable) {
    return [];
  }

  return [
    {
      url: "https://www.balancepsicologia.com/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemap();
}
