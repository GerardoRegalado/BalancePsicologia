import type { Metadata } from "next";
import { brandConfig } from "@/config/brand";
import { siteConfig } from "@/config/site";

type MetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

const metadataBase = new URL(siteConfig.url);

function absoluteUrl(path: string) {
  return new URL(path, metadataBase).toString();
}

export function buildMetadata(input: MetadataInput = {}): Metadata {
  const title = input.title
    ? input.title
    : {
        default: siteConfig.defaultTitle,
        template: siteConfig.titleTemplate,
      };
  const description = input.description ?? siteConfig.description;
  const canonicalPath = input.path ?? "/";
  const canonicalUrl = absoluteUrl(canonicalPath);
  const imageUrl = absoluteUrl(input.image ?? siteConfig.ogImage);

  return {
    metadataBase,
    title,
    description,
    keywords: [...siteConfig.keywords],
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: input.title ?? siteConfig.defaultTitle,
      description,
      url: canonicalUrl,
      siteName: brandConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: brandConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title ?? siteConfig.defaultTitle,
      description,
      images: [imageUrl],
    },
    robots: input.noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}
