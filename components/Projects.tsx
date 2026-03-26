"use client";

import { projects } from "@/data/projects";
import ProjectCard from "./cards/ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="text-center">
      
      <h2 className="mb-6">
        Recent <span className="text-blue-800 dark:text-blue-400">Projects</span>
      </h2>
      <h3>A collection of projects showcasing expertise in Full Stack development, blockchain, and SaaS solutions</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projects.slice(0, 4).map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      {/* View All Projects */}
      <div className="mt-10 flex justify-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-blue-800 text-blue-800 dark:text-blue-400 dark:border-blue-400 text-sm font-semibold hover:bg-blue-800 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 transition-all duration-200"
        >
          View All Projects
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

    </section>
  );
};

export default Projects;