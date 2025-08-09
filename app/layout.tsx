import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://codewithty.dev/images/logo.png"
          sizes="any"
        />
      </head>
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://codewithty.dev"),
  title: {
    default: "CodeWithTy ✷ Tech Development Portfolio",
    template: "%s - CodeWithTy",
  },
  description:
    "Professional portfolio template by CodeWithTy - showcasing expertise in web development, cybersecurity, blockchain, mobile apps, and data analysis. Build your tech career with our modern, responsive portfolio template.",
  keywords: [
    "CodeWithTy",
    "portfolio template",
    "web development",
    "cybersecurity",
    "blockchain development",
    "mobile app development",
    "data analysis",
    "tech consulting",
    "developer portfolio",
    "Next.js portfolio",
    "React portfolio",
    "tech education",
    "coding bootcamp",
  ],
  icons: {
    icon: "./favicon.ico",
    apple: "./apple-touch-icon.png",
  },
  applicationName: "CodeWithTy Portfolio Template",
  authors: [
    {
      name: "CodeWithTy Team",
      url: "https://codewithty.dev",
    },
  ],
  generator: "Next.js",
  referrer: "origin",
  creator: "CodeWithTy",
  publisher: "CodeWithTy",
  category: "technology",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codewithty.dev",
    siteName: "CodeWithTy",
    title: "CodeWithTy - Tech Development & Solution Experts",
    description:
      "Professional portfolio template for developers specializing in web development, cybersecurity, blockchain, and mobile applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeWithTy Portfolio Template",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@codewithty",
    creator: "@codewithty",
    title: "CodeWithTy - Tech Development Portfolio Template",
    description:
      "Modern portfolio template for tech professionals and developers",
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

  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },

  manifest: "/manifest.json",

  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "CodeWithTy",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#0f172a",
    "msapplication-config": "/browserconfig.xml",
  },
};
