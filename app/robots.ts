import type { MetadataRoute } from "next";

const BASE_URL = "https://obinnasamuel.site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",        // admin panel
          "/api/",          // API routes
          "/submit-review", // no need to index the form page
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}