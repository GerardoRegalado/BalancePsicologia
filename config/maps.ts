import { brandConfig } from "@/config/brand";
import { buildGoogleMapsEmbedUrl } from "@/lib/maps/build-google-maps-embed-url";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY?.trim() ?? "";

const query = `${brandConfig.address.clinicName}, ${brandConfig.address.display}`;

export const mapsConfig = {
  query,
  embedUrl: buildGoogleMapsEmbedUrl({
    apiKey,
    query,
    zoom: 16,
  }),
  isConfigured: apiKey.length > 0,
} as const;
