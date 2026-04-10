import type { Metadata } from "next";

const BASE_URL = "https://obinnasamuel.site";

// ── /projects ────────────────────────────────────────────────────────────────
export const projectsMetadata: Metadata = {
  title: "Projects",
  description:
    "Explore fullstack web applications, SaaS tools, and blockchain projects built by Obinna Samuel E. — from idea to deployed product.",
  alternates: { canonical: `${BASE_URL}/projects` },
  openGraph: {
    title: "Projects — Obinna Samuel",
    description:
      "A full showcase of web apps, SaaS tools, and blockchain projects built by Obinna Samuel E.",
    url: `${BASE_URL}/projects`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

// ── /experience ──────────────────────────────────────────────────────────────
export const experienceMetadata: Metadata = {
  title: "Work Experience",
  description:
    "Obinna Samuel's full work history — roles held, impact made, and technologies used across startups and businesses.",
  alternates: { canonical: `${BASE_URL}/experience` },
  openGraph: {
    title: "Work Experience — Sobee Dev",
    description:
      "Full career history of Obinna Samuel E., a fullstack software developer based in Lagos, Nigeria.",
    url: `${BASE_URL}/experience`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

// ── /testimonials ────────────────────────────────────────────────────────────
export const testimonialsMetadata: Metadata = {
  title: "Client Reviews",
  description:
    "What clients and collaborators say about working with Obinna Samuel E. — real reviews from real people.",
  alternates: { canonical: `${BASE_URL}/testimonials` },
  openGraph: {
    title: "Client Reviews — Obinna Samuel",
    description:
      "Testimonials from clients and collaborators who have worked with Obinna Samuel E.(sobee)",
    url: `${BASE_URL}/testimonials`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

// ── /blog ────────────────────────────────────────────────────────────────────
export const blogMetadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides, deep-dives, and thoughts on fullstack development, Next.js, React, blockchain, and building great software — by Obinna Samuel E.",
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: "Blog — Sobee Dev",
    description:
      "Practical guides and thoughts on fullstack development, Next.js, React, and blockchain by Obinna Samuel E.",
    url: `${BASE_URL}/blog`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

// ── /submit-review ───────────────────────────────────────────────────────────
export const submitReviewMetadata: Metadata = {
  title: "Leave a Review",
  description: "Share your experience working with Obinna Samuel E.",
  alternates: { canonical: `${BASE_URL}/submit-review` },
  robots: { index: false, follow: false }, // no need to index this form
};