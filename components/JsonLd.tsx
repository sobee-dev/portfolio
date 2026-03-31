// Paste this component into your app/layout.tsx inside <body>
// <JsonLd />

export default function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Obinna Samuel E.",
    alternateName: "Sobee Dev",
    url: "https://portfolio-sobee-devs-projects.vercel.app",
    image: "https://portfolio-sobee-devs-projects.vercel.app/images/profile.png",
    jobTitle: "Fullstack Software Developer",
    description:
      "Lagos-based fullstack software developer who builds websites and web applications that help service businesses look credible online and convert more clients.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    sameAs: [
      "https://github.com/sobee-dev",
      "https://linkedin.com/in/sobee-dev",
      "https://twitter.com/sobee_dev",
      "https://instagram.com/sobee.dev",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "Node.js",
      "Django",
      "PostgreSQL",
      "TypeScript",
      "Web Development",
      "Fullstack Development",
      "UI/UX Design",
      "REST APIs",
    ],
    offers: {
      "@type": "Offer",
      description:
        "Web application development, website design, and conversion optimisation for service-based businesses.",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sobee Dev — Obinna Samuel E.",
    url: "https://portfolio-sobee-devs-projects.vercel.app",
    description: "Portfolio of Obinna Samuel E., fullstack software developer based in Lagos, Nigeria.",
    author: {
      "@type": "Person",
      name: "Obinna Samuel E.",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}