export interface Experience {
  id: number;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string; // "Present" or a date string
  summary: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Chief Technology Officer (CTO) [Contract]",
    company: "The Tech Powa LTD",
    companyUrl: "https://thetechpowa.com",
    location: "Lagos, Nigeria",
    startDate: "October 2024",
    endDate: "August 2025",
    summary:
      "Designed, developed and managed the digital academy platform and the student registration and onboarding system.",
    achievements: [
      "Led the design, development and deployment of scalable dynamic course listing",
      "Optimized the Web platform for SEO and foster web and google visibility",
      "Implemented staff admin panel and student management system",
    ],

  },

];