import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/build-metadata";
import { describe, expect, it } from "vitest";

describe("buildMetadata", () => {
  it("returns Balance Psicologia metadata by default", () => {
    const metadata = buildMetadata();

    expect(metadata.metadataBase?.toString()).toBe(`${siteConfig.url}/`);
    expect(siteConfig.url).toBe("https://www.balancepsicologia.com");
    expect(siteConfig.defaultTitle).toBe("Balance Psicologia");
    expect(siteConfig.locale).toBe("es_MX");
    expect(metadata.title).toEqual({
      default: siteConfig.defaultTitle,
      template: siteConfig.titleTemplate,
    });
    expect(metadata.description).toBe(siteConfig.description);
    expect(metadata.openGraph?.siteName).toBe("Balance Psicologia");
    expect(metadata.openGraph?.locale).toBe("es_MX");
  });

  it("supports route-specific overrides", () => {
    const metadata = buildMetadata({
      title: "Contacto",
      path: "/#contacto",
      noIndex: true,
    });

    expect(metadata.title).toBe("Contacto");
    expect(metadata.alternates?.canonical).toBe("/#contacto");
    expect(metadata.robots).toEqual({ index: false, follow: false });
    expect(metadata.openGraph?.images).toEqual([
      expect.objectContaining({
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        alt: siteConfig.defaultTitle,
      }),
    ]);
  });
});
