import type { MetadataRoute } from "next";
// import { blogPosts } from "@/data/blog";
import { projects } from "@/data/projects";

const BASE_URL = "https://portfolio-sobee-devs-projects.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  // Blog post routes
//   const blogRoutes = blogPosts.map((post) => ({
//     url: `${BASE_URL}/blog/${post.slug}`,
//     lastModified: new Date(post.publishedAt),
//     changeFrequency: "monthly" as const,
//     priority: 0.7,
//   }));

  // Project routes (if you ever add individual project pages)
  const projectRoutes = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    // Homepage — highest priority
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Main sections
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/experience`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/testimonials`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    // Public forms
    {
      url: `${BASE_URL}/submit-review`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    // Blog posts
    // ...blogRoutes,
  ];
}