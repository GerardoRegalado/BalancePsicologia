import { S3CompatibleMediaStorageAdapter } from "@/services/media/providers/s3-compatible-media-storage";
import { NoopMediaStorageAdapter } from "@/services/media/providers/noop-media-storage";
import { describe, expect, it } from "vitest";

describe("media storage adapters", () => {
  it("builds predictable public URLs for s3-compatible providers", () => {
    const adapter = new S3CompatibleMediaStorageAdapter({
      bucket: "client-assets",
      region: "auto",
      endpoint: "https://media.example.com/",
      publicBaseUrl: "https://cdn.example.com/",
      providerName: "cloudflare-r2",
    });

    expect(adapter.provider).toBe("cloudflare-r2");
    expect(adapter.getPublicUrl("brand/logo.svg")).toBe(
      "https://cdn.example.com/brand/logo.svg",
    );
  });

  it("keeps a safe local fallback when real uploads are not in scope", () => {
    const adapter = new NoopMediaStorageAdapter();

    expect(adapter.provider).toBe("local");
    expect(adapter.getPublicUrl("placeholders/hero.png")).toBe(
      "/media/placeholders/hero.png",
    );
  });
});
