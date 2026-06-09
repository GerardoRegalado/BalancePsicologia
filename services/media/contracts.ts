import type {
  MediaAsset,
  MediaUploadDescriptor,
  MediaUploadDraft,
} from "@/types/media";

export interface MediaStorageAdapter {
  readonly provider: string;
  getPublicUrl(storageKey: string): string;
  createUploadDescriptor?(
    draft: MediaUploadDraft,
  ): Promise<MediaUploadDescriptor>;
  normalizeAsset?(asset: MediaAsset): MediaAsset;
}
