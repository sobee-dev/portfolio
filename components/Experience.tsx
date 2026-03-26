import { experiences } from "@/data/experiences";
import Link from "next/link";

const Experience = () => {
  return (
    <section
      id="experience"
      className=" bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className=" mx-auto ">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-[10px] uppercase tracking-widest  text-blue-800 dark:text-blue-400 font-semibold mb-3">
            My journey
          </p>
          <h2 className=" text-slate-900 dark:text-white">
            Work <span className="text-blue-800 dark:text-blue-400">Experience </span>
          </h2>
          <h3 className="mt-4 max-w-xl mx-auto !text-base">
            Roles I've held and the impact I've made along the way.
          </h3>
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-6">
          {experiences.slice(0, 3).map((exp) => (
            <div
              key={exp.id}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Role */}
              <h4 className="!text-xl !font-bold text-slate-900 dark:text-white mb-1">
                {exp.role}
              </h4>

              {/* Company + Date row */}
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
                <span className="text-sm text-slate-500 dark:text-slate-400 shrink-0">
                  {exp.startDate} – {exp.endDate}
                </span>
              </div>

              {/* Location */}
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
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

        {/* See All Button */}
        {experiences.length > 3 && (
          <div className="mt-10 flex justify-center">
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-blue-800 text-blue-800 dark:text-blue-400 dark:border-blue-400 text-sm font-semibold hover:bg-blue-800 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 transition-all duration-200"
            >
              See All Experience
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default Experience;