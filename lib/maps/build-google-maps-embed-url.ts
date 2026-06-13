type GoogleMapsEmbedOptions = {
  apiKey: string;
  query: string;
  zoom?: number;
};

export function buildGoogleMapsEmbedUrl({
  apiKey,
  query,
  zoom = 16,
}: GoogleMapsEmbedOptions): string | null {
  const normalizedKey = apiKey.trim();
  const normalizedQuery = query.trim();

  if (!normalizedKey || !normalizedQuery) {
    return null;
  }

  const params = new URLSearchParams({
    key: normalizedKey,
    q: normalizedQuery,
    zoom: String(zoom),
    maptype: "roadmap",
    language: "es",
    region: "MX",
  });

  return `https://www.google.com/maps/embed/v1/place?${params.toString()}`;
}
