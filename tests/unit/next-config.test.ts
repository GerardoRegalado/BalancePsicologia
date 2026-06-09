import nextConfig from "@/next.config";
import { describe, expect, it } from "vitest";

describe("next config", () => {
  it("keeps production-oriented defaults enabled", () => {
    expect(nextConfig.poweredByHeader).toBe(false);
    expect(nextConfig.reactStrictMode).toBe(true);
    expect(nextConfig.typedRoutes).toBe(true);
    expect(nextConfig.cacheComponents).toBe(true);
    expect(nextConfig.images?.formats).toEqual(["image/avif", "image/webp"]);
  });
});
