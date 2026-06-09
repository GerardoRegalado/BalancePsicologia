import type { MediaStorageAdapter } from "@/services/media/contracts";
import type { MediaUploadDescriptor, MediaUploadDraft } from "@/types/media";

type S3CompatibleConfig = {
  bucket: string;
  region: string;
  endpoint?: string;
  publicBaseUrl?: string;
  providerName: "cloudflare-r2" | "s3";
};

function trimTrailingSlash(value: string) {
  return value.replace(/\/$/, "");
}

export class S3CompatibleMediaStorageAdapter implements MediaStorageAdapter {
  readonly provider: S3CompatibleConfig["providerName"];

  constructor(private readonly config: S3CompatibleConfig) {
    this.provider = config.providerName;
  }

  getPublicUrl(storageKey: string) {
    if (this.config.publicBaseUrl) {
      return `${trimTrailingSlash(this.config.publicBaseUrl)}/${storageKey}`;
    }

    if (this.config.endpoint) {
      return `${trimTrailingSlash(this.config.endpoint)}/${this.config.bucket}/${storageKey}`;
    }

    return `https://${this.config.bucket}.s3.${this.config.region}.amazonaws.com/${storageKey}`;
  }

  async createUploadDescriptor(
    draft: MediaUploadDraft,
  ): Promise<MediaUploadDescriptor> {
    throw new Error(
      `Signed upload generation for ${draft.filename} is intentionally deferred. Add a server action or route handler once uploads enter scope.`,
    );
  }
}
