import { buildGoogleMapsEmbedUrl } from "@/lib/maps/build-google-maps-embed-url";
import { describe, expect, it, vi } from "vitest";

describe("buildGoogleMapsEmbedUrl", () => {
  it("returns null when the API key is empty", () => {
    expect(
      buildGoogleMapsEmbedUrl({
        apiKey: "   ",
        query: "Clínica MIND, Jacaranda 552",
      }),
    ).toBeNull();
  });

  it("returns null when the query is empty", () => {
    expect(
      buildGoogleMapsEmbedUrl({
        apiKey: "fake-browser-key",
        query: "   ",
      }),
    ).toBeNull();
  });

  it("builds a Google Maps Embed place URL with approved parameters", () => {
    const logSpy = vi.spyOn(console, "log");
    const warnSpy = vi.spyOn(console, "warn");
    const errorSpy = vi.spyOn(console, "error");

    const result = buildGoogleMapsEmbedUrl({
      apiKey: "fake-browser-key",
      query:
        "Clínica MIND, Jacaranda 552, Las Arboledas, 20020 Aguascalientes, Ags.",
    });

    expect(result).not.toBeNull();
    expect(result).not.toContain("maps.app.goo.gl");
    expect(result).not.toContain("utm_");
    expect(result).not.toContain("igsh");
    expect(result).not.toContain("ref=");
    expect(result).not.toContain("text=");
    expect(result).not.toContain("center=");
    expect(result).not.toMatch(/[?&]q=-?\d+\.\d+,-?\d+\.\d+/);
    expect(result).toContain("Cl%C3%ADnica+MIND");
    expect(result).toContain("Jacaranda+552");

    const parsedUrl = new URL(result ?? "");
    expect(parsedUrl.host).toBe("www.google.com");
    expect(parsedUrl.pathname).toBe("/maps/embed/v1/place");
    expect(parsedUrl.searchParams.get("key")).toBe("fake-browser-key");
    expect(parsedUrl.searchParams.get("q")).toBe(
      "Clínica MIND, Jacaranda 552, Las Arboledas, 20020 Aguascalientes, Ags.",
    );
    expect(parsedUrl.searchParams.get("zoom")).toBe("16");
    expect(parsedUrl.searchParams.get("maptype")).toBe("roadmap");
    expect(parsedUrl.searchParams.get("language")).toBe("es");
    expect(parsedUrl.searchParams.get("region")).toBe("MX");
    expect(logSpy).not.toHaveBeenCalled();
    expect(warnSpy).not.toHaveBeenCalled();
    expect(errorSpy).not.toHaveBeenCalled();

    logSpy.mockRestore();
    warnSpy.mockRestore();
    errorSpy.mockRestore();
  });
});
