import Link from "next/link";
import type { Metadata } from "next";
import { experiences } from "@/data/experiences";

export const metadata: Metadata = {
  title: "Work Experience",
  description: "Full work history and career journey of Obinna Samuel E.",
};

export default function ExperiencePage() {
  const totalYears = (() => {
    // Calculate from earliest start date to now
    const earliest = experiences
      .map((e) => new Date(e.startDate).getFullYear())
      .sort((a, b) => a - b)[0];
    return new Date().getFullYear() - earliest;
  })();

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-[10px] uppercase tracking-widest text-blue-800 dark:text-blue-400 font-semibold mb-3">
            My journey
          </p>
          <h2 className="text-slate-900 dark:text-white">
            Work <span className="text-blue-800">Experience</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base">
            Every role I've held and the impact I've made along the way.
          </p>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-14 py-5 border-y border-slate-200 dark:border-slate-800">
          <div className="text-center">
            <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {experiences.length}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Roles Held</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {totalYears}+
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {Array.from(new Set(experiences.map((e) => e.location.split(",").pop()?.trim())))}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Countries</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-10 -bottom-6 w-0.5 h-6 bg-slate-200 dark:bg-slate-700" />
              )}

              {/* Role */}
              <h4 className="!text-xl !font-bold text-slate-900 dark:text-white mb-1">
                {exp.role}
              </h4>

              {/* Company + Date */}
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <div>
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-800 dark:text-blue-400 font-semibold text-sm hover:underline"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <span className="text-blue-800 dark:text-blue-400 font-semibold text-sm">
                      {exp.company}
                    </span>
                  )}
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400 shrink-0 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {exp.startDate} – {exp.endDate}
                </span>
              </div>

              {/* Location */}
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {exp.location}
              </p>

              {/* Summary */}
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                {exp.summary}
              </p>

              {/* Achievements */}
              {exp.achievements.length > 0 && (
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mb-3">
                    Key Achievements:
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {exp.achievements.map((item: string) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                      >
                        <span className="mt-[7px] w-2 h-2 rounded-full bg-blue-800 dark:bg-blue-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Back to portfolio */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Back to portfolio
          </Link>
        </div>

      </div>
    </main>
  );
}