export interface Skill {
  name: string;
  color: string;       // pill background color (tailwind bg class)
  textColor: string;   // pill text color (tailwind text class)
  borderColor: string; // pill border color (tailwind border class)
}

export interface SkillCategory {
  id: number;
  title: string;
  description: string;
  iconBg: string;      // icon wrapper background (tailwind bg class)
  iconColor: string;   // icon stroke/fill color (tailwind text class)
  icon: "frontend" | "backend" | "database" | "devops";
  skills: Skill[];
}

export const skillsCategory: SkillCategory[] = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Modern web frameworks and libraries",
    iconBg: "bg-blue-50 dark:bg-blue-900/30",
    iconColor: "text-blue-500",
    icon: "frontend",
    skills: [
      { name: "HTML",         color: "bg-orange-50",  textColor: "text-orange-600",  borderColor: "border-orange-200" },
      { name: "CSS",          color: "bg-blue-50",    textColor: "text-blue-600",    borderColor: "border-blue-200"   },
      { name: "JavaScript",   color: "bg-yellow-50",  textColor: "text-yellow-700",  borderColor: "border-yellow-200" },
      { name: "TypeScript",   color: "bg-blue-50",    textColor: "text-blue-700",    borderColor: "border-blue-200"   },
      { name: "React",        color: "bg-cyan-50",    textColor: "text-cyan-600",    borderColor: "border-cyan-200"   },
      { name: "Next.js",      color: "bg-slate-100",  textColor: "text-slate-700",   borderColor: "border-slate-200"  },
      { name: "Tailwind CSS", color: "bg-teal-50",    textColor: "text-teal-600",    borderColor: "border-teal-200"   },
      { name: "Figma",        color: "bg-pink-50",    textColor: "text-pink-600",    borderColor: "border-pink-200"   },
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Server-side technologies and APIs",
    iconBg: "bg-green-50 dark:bg-green-900/30",
    iconColor: "text-green-500",
    icon: "backend",
    skills: [
      { name: "Python",     color: "bg-blue-50",    textColor: "text-blue-700",   borderColor: "border-blue-200"   },
      { name: "Django",     color: "bg-emerald-50", textColor: "text-emerald-700",borderColor: "border-emerald-200"},
      { name: "REST APIs",  color: "bg-yellow-50",  textColor: "text-yellow-700", borderColor: "border-yellow-200" },
      { name: "Flask",    color: "bg-pink-50",    textColor: "text-pink-600",   borderColor: "border-pink-200"   },
    ],
  },
  {
    id: 3,
    title: "Database & Storage",
    description: "Data management and storage solutions",
    iconBg: "bg-orange-50 dark:bg-orange-900/30",
    iconColor: "text-orange-500",
    icon: "database",
    skills: [
      { name: "PostgreSQL", color: "bg-blue-50",    textColor: "text-blue-700",   borderColor: "border-blue-200"   },
      { name: "MongoDB",    color: "bg-green-50",   textColor: "text-green-700",  borderColor: "border-green-200"  },
      { name: "Supabase",   color: "bg-emerald-50", textColor: "text-emerald-700",borderColor: "border-emerald-200"},
      { name: "Redis",      color: "bg-red-50",     textColor: "text-red-600",    borderColor: "border-red-200"    },
    ],
  },
  {
    id: 4,
    title: "DevOps & Tools",
    description: "Development tools and deployment",
    iconBg: "bg-purple-50 dark:bg-purple-900/30",
    iconColor: "text-purple-500",
    icon: "devops",
    skills: [
      { name: "Git",        color: "bg-orange-50",  textColor: "text-orange-600", borderColor: "border-orange-200" },
      { name: "Docker",     color: "bg-blue-50",    textColor: "text-blue-600",   borderColor: "border-blue-200"   },
      { name: "Vercel",     color: "bg-slate-900",  textColor: "text-white",      borderColor: "border-slate-700"  },
      { name: "Render",     color: "bg-teal-50",    textColor: "text-teal-600",   borderColor: "border-teal-200"   },
      { name: "Netlify",    color: "bg-green-50",   textColor: "text-green-600",  borderColor: "border-green-200"  },
      { name: "Linux",      color: "bg-yellow-50",  textColor: "text-yellow-700", borderColor: "border-yellow-200" },
    ],
  },
];