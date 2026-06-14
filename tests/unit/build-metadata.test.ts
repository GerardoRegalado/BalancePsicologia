import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo/build-metadata";
import { describe, expect, it } from "vitest";

describe("buildMetadata", () => {
  it("returns Balance Psicología metadata by default", () => {
    const metadata = buildMetadata();

    expect(metadata.metadataBase?.toString()).toBe(`${siteConfig.canonicalUrl}/`);
    expect(siteConfig.url).toBe("https://www.balancepsicologia.com");
    expect(siteConfig.defaultTitle).toBe(
      "Balance Psicología | Terapia en Aguascalientes",
    );
    expect(siteConfig.locale).toBe("es_MX");
    expect(metadata.title).toEqual({
      default: siteConfig.defaultTitle,
      template: siteConfig.titleTemplate,
    });
    expect(metadata.description).toBe(siteConfig.description);
    expect(metadata.alternates?.canonical).toBe(
      `${siteConfig.canonicalUrl}/`,
    );
    expect(metadata.openGraph?.siteName).toBe("Balance Psicología");
    expect(metadata.openGraph?.locale).toBe("es_MX");
    expect(metadata.openGraph?.url).toBe(`${siteConfig.canonicalUrl}/`);
    expect(metadata.twitter).toMatchObject({ card: "summary_large_image" });
  });

  it("supports route-specific overrides", () => {
    const metadata = buildMetadata({
      title: "Contacto",
      path: "/#contacto",
      noIndex: true,
    });

    expect(metadata.title).toBe("Contacto");
    expect(metadata.alternates?.canonical).toBe(
      `${siteConfig.canonicalUrl}/#contacto`,
    );
    expect(metadata.robots).toEqual(
      expect.objectContaining({ index: false, follow: false }),
    );
    expect(metadata.openGraph?.images).toEqual([
      expect.objectContaining({
        url: `${siteConfig.canonicalUrl}${siteConfig.ogImage}`,
        alt: "Balance Psicología",
      }),
    ]);
  });
});
