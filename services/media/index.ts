import { mediaConfig } from "@/config/media";
import type { MediaStorageAdapter } from "@/services/media/contracts";
import { NoopMediaStorageAdapter } from "@/services/media/providers/noop-media-storage";
import { S3CompatibleMediaStorageAdapter } from "@/services/media/providers/s3-compatible-media-storage";

export function createMediaStorageAdapter(): MediaStorageAdapter {
  if (
    mediaConfig.provider === "cloudflare-r2" ||
    mediaConfig.provider === "s3"
  ) {
    return new S3CompatibleMediaStorageAdapter({
      bucket: mediaConfig.bucket,
      region: mediaConfig.region,
      endpoint: mediaConfig.endpoint || undefined,
      publicBaseUrl: mediaConfig.publicBaseUrl || undefined,
      providerName: mediaConfig.provider,
    });
  }

  return new NoopMediaStorageAdapter();
}

export const mediaStorage = createMediaStorageAdapter();
