export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  companyUrl?: string;
  country: string;
  countryFlag: string;
  rating: number;
  review: string;
  avatar?: string;   // image URL — if absent, initials fallback is used
  avatarColor?: string; // tailwind bg class for initials avatar
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ann Ben",
    role: "Founder",
    company: "the tech Powa LTD",
    companyUrl: "https://thetechpowa.com",
    country: "Nigeria",
    countryFlag: "🇳🇬",
    rating: 5,
    avatarColor: "bg-green-800", 
    review:
      "From the first call I knew Obinna was the right person for the job. He's not just a developer — he's a problem solver. He proactively flagged issues before they became blockers and always came with solutions, not just problems. Our backend has never been more solid.",
  },

  // {
  //   id: 2,
  //   name: "Avery Primas",
  //   role: "COO",
  //   company: "Hashfire",
  //   country: "United States",
  //   countryFlag: "🇺🇸",
  //   rating: 5,
  //   avatarColor: "bg-blue-800",
  //   review:
  //     "Obinna is an incredible human, brilliant developer and design architect and has a naturally knack for designing beautiful UI/UXs. He is incredibly friendly, professional, and committed to delivering exceptional results. I highly recommend him to anyone looking for a top-tier developer.",
  // },
  // {
  //   id: 3,
  //   name: "Chioma Obi",
  //   role: "Product Manager",
  //   company: "TechBridge Africa",
  //   country: "Nigeria",
  //   countryFlag: "🇳🇬",
  //   rating: 5,
  //   avatarColor: "bg-emerald-600",
  //   review:
  //     "Sobee delivered our platform ahead of schedule and the quality was outstanding. He understood our vision immediately and translated it into a clean, scalable product. Communication was smooth throughout the entire process — highly recommended.",
  // },
  // {
  //   id: 4,
  //   name: "James Whitfield",
  //   role: "CEO",
  //   company: "NexaLabs",
  //   companyUrl: "https://nexalabs.io",
  //   country: "United Kingdom",
  //   countryFlag: "🇬🇧",
  //   rating: 5,
  //   avatarColor: "bg-slate-700",
  //   review:
  //     "From the first call I knew Obinna was the right person for the job. He's not just a developer — he's a problem solver. He proactively flagged issues before they became blockers and always came with solutions, not just problems. Our backend has never been more solid.",
  // },
];