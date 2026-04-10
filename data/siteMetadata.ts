import type { Metadata } from "next";

const BASE_URL = "https://obinnasamuel.site";

export const siteMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Obinna Samuel E. — Professional Fullstack Software Developer",
    template: "%s | Sobee Dev",
  },

  description:
    "Obinna Samuel E. is a Lagos-based fullstack software developer who builds fast, scalable web applications and conversion-focused websites and softwares for startups and businesses. Specialising in Next.js, React, and Django.",

  keywords: [
    "Obinna Samuel",
    "Obinna Samuel Edeh",
    "sobee-dev",
    "fullstack developer Nigeria",
    "fullstack software developer Lagos",
    "Next.js developer Nigeria",
    "React developer Lagos",
    "web developer Nigeria",
    "conversion specialist Nigeria",
    "web application developer",
    "Django developer",
    "Python developer Africa",
    "portfolio website developer",
    "hire fullstack developer Nigeria",
    "freelance developer Lagos",
  ],

  authors: [{ name: "Obinna Samuel E.", url: BASE_URL }],
  creator: "Obinna Samuel E.",
  publisher: "Obinna Samuel E.",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "technology",
  applicationName: "Obinna Samuel Portfolio",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Obinna Samuel E. (Sobee)",
    title: "Obinna Samuel E. —  Fullstack Software Developer",
    description:
      "I build websites and apps that help businesses look credible online and convert more clients. Based in Lagos, Nigeria.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Obinna Samuel E. — Fullstack Software Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@sobee_dev",
    creator: "@sobee_dev",
    title: "Obinna Samuel E. — Fullstack Software Developer",
    description:
      "Fullstack developer based in Lagos, Nigeria. I build web apps and sites that help businesses and startups look credible and convert more clients.",
    images: ["/twitter-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
  },

  // verification: {
  //   google: "your-google-verification-code", 
  // },

  manifest: "/manifest.json",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Obinna Samuel",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#0f172a",
  },
};