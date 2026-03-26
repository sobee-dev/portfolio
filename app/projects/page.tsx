import Link from "next/link";
import type { Metadata } from "next";
import AllProjects from "@/components/AllProjects";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A full showcase of projects built by Obinna Samuel E.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-[10px] uppercase tracking-widest text-blue-800 dark:text-blue-400 font-semibold mb-3">
            What I've built
          </p>
          <h2 className="text-slate-900 dark:text-white">
            All <span className="text-blue-800">Projects</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base">
            Every project I've designed, built, and shipped — from idea to deployment.
          </p>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-14 py-5 border-y border-slate-200 dark:border-slate-800">
          <div className="text-center">
            <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {projects.length}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Total Projects</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {projects.filter((p) => p.demoLink).length}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Live Demos</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
               {Array.from(new Set(projects.flatMap((p) => p.techs))).length}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Technologies Used</p>
          </div>
        </div>

        {/* Projects grid — client component */}
        <AllProjects />

        {/* Back to portfolio */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/#projects"
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