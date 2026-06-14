export type IndexingEnvironment = {
  vercelEnvironment?: string;
  vercelTargetEnvironment?: string;
  configuredUrl: string;
};

export function resolveIndexingPolicy({
  vercelEnvironment,
  vercelTargetEnvironment,
  configuredUrl,
}: IndexingEnvironment): boolean {
  const effectiveEnvironment =
    vercelTargetEnvironment ?? vercelEnvironment ?? "development";

  if (effectiveEnvironment !== "production") {
    return false;
  }

  try {
    const hostname = new URL(configuredUrl).hostname.toLowerCase();

    if (
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname === "staging.balancepsicologia.com" ||
      hostname.endsWith(".vercel.app")
    ) {
      return false;
    }

    return hostname === "www.balancepsicologia.com";
  } catch {
    return false;
  }
}
