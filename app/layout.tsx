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
          href="https://portfolio-sobee-devs-projects.vercel.app/images/logo.png"
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
  metadataBase: new URL("https://portfolio-sobee-devs-projects.vercel.app"),
  title: {
    default: "Sobee-dev ✷ Fullstack Software Developer",
    template: "%s - sobee-dev",
  },
  description:
    "Professional fullstack software developer",
  keywords: [
    "obinna samuel edeh",
    "obinna Edeh",
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
  applicationName: "Obinna Samuel E. portfolio",
  authors: [
    {
      name: "obinna Samuel E",
      url: "https://",
    },
  ],
  generator: "Next.js",
  referrer: "origin",
  creator: "obinna Samuel",
  publisher: "ObinnaSamuel",
  category: "technology",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://",
    siteName: "Obinna Samuel portfolio",
    title: "Obinna Samuel - Tech Development & Solution Expert",
    description:
      "A fullstack software developer, specializing in web development, cybersecurity, blockchain, and mobile applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Obinna Samuel E portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@sobee-dev",
    creator: "@sobee-dev",
    title: "Obinna Samuel E - Softwre developer",
    description:
      "A professional fullstack software developer",
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
    "apple-mobile-web-app-title": "obinna Samuel",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#0f172a",
    "msapplication-config": "/browserconfig.xml",
  },
};
