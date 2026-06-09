export type MediaKind = "image" | "video" | "file";

export type MediaAsset = {
  id: string;
  alt: string;
  kind: MediaKind;
  url: string;
  storageKey: string;
  provider: string;
};

export type MediaUploadDraft = {
  filename: string;
  contentType: string;
  kind: MediaKind;
};

export type MediaUploadDescriptor = {
  method: "PUT";
  uploadUrl: string;
  publicUrl: string;
  headers: Record<string, string>;
};
