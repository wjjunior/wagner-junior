import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://wagnerjunior.dev",
      lastModified: "2026-03-22",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
