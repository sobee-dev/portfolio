import React from "react";
import { skillsCategory, type SkillCategory } from "@/data/skills";

// ── Category Icons (inline SVG, no external deps) ──────────────────────────
const CategoryIcon = ({ type, className }: { type: SkillCategory["icon"]; className?: string }) => {
  const icons: Record<SkillCategory["icon"], React.ReactNode> = {
    frontend: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    backend: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="3" width="20" height="4" rx="1" />
        <rect x="2" y="10" width="20" height="4" rx="1" />
        <rect x="2" y="17" width="20" height="4" rx="1" />
        <circle cx="6" cy="5" r="0.5" fill="currentColor" />
        <circle cx="6" cy="12" r="0.5" fill="currentColor" />
        <circle cx="6" cy="19" r="0.5" fill="currentColor" />
      </svg>
    ),
    database: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v4c0 1.657 4.03 3 9 3s9-1.343 9-3V5" />
        <path d="M3 9v4c0 1.657 4.03 3 9 3s9-1.343 9-3V9" />
        <path d="M3 13v4c0 1.657 4.03 3 9 3s9-1.343 9-3v-4" />
      </svg>
    ),
    devops: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8l2 2-2 2M11 12h4" />
      </svg>
    ),
  };
  return <>{icons[type]}</>;
};

// ── Single Category Card ────────────────────────────────────────────────────
const SkillCard = ({ category }: { category: SkillCategory }) => (
  <div className="bg-white dark:bg-slate-800/60 border hover:shadow-md hover:border-1.5 hover:border-white hover:shadow-white-200 border-slate-200 dark:border-slate-700 rounded-2xl p-8 flex flex-col gap-5 transition-shadow duration-300">

    {/* Header */}
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${category.iconBg}`}>
        <CategoryIcon type={category.icon} className={`w-6 h-6 ${category.iconColor}`} />
      </div>
      <div >
        <h3 className="font-bold mb-2 text-slate-900 dark:text-white text-left">
          {category.title}
        </h3>
        <p className="!text-sm text-slate-500 dark:text-slate-400 text-left">
          {category.description}
        </p>
      </div>
    </div>

    {/* Skill Pills */}
    <div className="flex flex-wrap gap-3">
      {category.skills.map((skill) => (
        <span
          key={skill.name}
          className={`
            inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5
            rounded-full border transition-transform duration-200 hover:scale-105 cursor-default
            ${skill.color} ${skill.textColor} ${skill.borderColor}
          `}
        >
          {skill.name}
        </span>
      ))}
    </div>
  </div>
);

// ── Section ─────────────────────────────────────────────────────────────────
const MyTechStack = () => {
  return (
    <section
      id="skills"
      className=" bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className=" mx-auto ">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-[10px] uppercase tracking-widest text-blue-800 dark:text-blue-400 font-semibold mb-3">
            Technologies
          </p>
          <h2 className=" text-slate-900 dark:text-white">
            My Tech <span className="text-blue-800 dark:text-blue-400">Stack</span>
          </h2>
          <h3 className="mt-4 text-slate-500 dark:text-slate-300 max-w-xl mx-auto ">
            Technologies I've mastered over the years to build robust, scalable software — from pixel to production.
          </h3>
        </div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillsCategory.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default MyTechStack;