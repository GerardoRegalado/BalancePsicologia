import { mediaConfig } from "@/config/media";
import type { MediaStorageAdapter } from "@/services/media/contracts";
import type { MediaUploadDescriptor, MediaUploadDraft } from "@/types/media";

export class NoopMediaStorageAdapter implements MediaStorageAdapter {
  readonly provider = "local";

  getPublicUrl(storageKey: string) {
    const trimmedBase = mediaConfig.publicBaseUrl.replace(/\/$/, "");

    return trimmedBase
      ? `${trimmedBase}/${storageKey}`
      : `/media/${storageKey}`;
  }

  async createUploadDescriptor(
    draft: MediaUploadDraft,
  ): Promise<MediaUploadDescriptor> {
    throw new Error(
      `Upload flow not implemented yet for ${draft.filename}. Connect signed uploads when the project scope includes real media management.`,
    );
  }
}
