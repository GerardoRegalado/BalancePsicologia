import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/build-metadata";
import { describe, expect, it } from "vitest";

describe("buildMetadata", () => {
  it("returns the template title by default", () => {
    const metadata = buildMetadata();

    expect(metadata.metadataBase?.toString()).toBe(`${siteConfig.url}/`);
    expect(metadata.title).toEqual({
      default: siteConfig.defaultTitle,
      template: siteConfig.titleTemplate,
    });
    expect(metadata.description).toBe(siteConfig.description);
  });

  it("supports route-specific overrides", () => {
    const metadata = buildMetadata({
      title: "Admin panel base",
      path: "/admin",
      noIndex: true,
    });

    expect(metadata.title).toBe("Admin panel base");
    expect(metadata.alternates?.canonical).toBe("/admin");
    expect(metadata.robots).toEqual({ index: false, follow: false });
    expect(metadata.openGraph?.images).toEqual([
      expect.objectContaining({
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        alt: siteConfig.defaultTitle,
      }),
    ]);
  });
});
