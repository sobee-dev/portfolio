"use client";
import React, { useState } from "react";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

// ── Modal Section helper ───────────────────────────────────────────────────────
const ModalSection = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="flex flex-col gap-3">
    <p className="text-xs uppercase tracking-widest font-semibold text-blue-800 dark:text-blue-400">
      {label}
    </p>
    {children}
  </div>
);

// ── Project Modal ─────────────────────────────────────────────────────────────
const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Hero Image */}
        <div className="relative w-full h-56 overflow-hidden rounded-t-3xl">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-6 right-14">
            <span className="inline-block bg-blue-800 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
              {project.category}
            </span>
            <h2 className="!text-2xl !font-bold text-white leading-tight">{project.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition duration-200"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 md:p-8 flex flex-col gap-7">
          <ModalSection label="Overview">
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.overview}
            </p>
          </ModalSection>

          {project.features.length > 0 && (
            <ModalSection label="✦ Key Features">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((f: string) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-blue-800 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </ModalSection>
          )}

          {project.challenges.length > 0 && (
            <ModalSection label="⚠ Challenges">
              <ul className="flex flex-col gap-2">
                {project.challenges.map((c: string) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </ModalSection>
          )}

          {project.solutions.length > 0 && (
            <ModalSection label="✓ Solutions">
              <ul className="flex flex-col gap-2">
                {project.solutions.map((s: string) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </ModalSection>
          )}

          <ModalSection label="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {project.techs.map((tech: string) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </ModalSection>

          {(project.demoLink || project.githubLink) && (
            <div className="flex flex-wrap gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-sm font-semibold px-5 py-2.5 rounded-full bg-blue-800 hover:bg-blue-700 text-white transition duration-200"
                >
                  Live Demo →
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center text-sm font-semibold px-5 py-2.5 rounded-full border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-800 hover:text-blue-800 dark:hover:text-blue-400 transition duration-200"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ── Project Card ──────────────────────────────────────────────────────────────
const ProjectCard = ({
  project,
  onDetails,
}: {
  project: Project;
  onDetails: (p: Project) => void;
}) => (
  <div className="group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow duration-300">
    <div className="relative w-full h-48 overflow-hidden">
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
      <span className="absolute top-3 right-3 bg-blue-800 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
        {project.category}
      </span>
    </div>

    <div className="flex flex-col gap-3 p-5 flex-1">
      <h4 className="!text-lg !font-bold text-slate-900 dark:text-white">{project.title}</h4>
      <p className="!text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 pt-1">
        {project.techs.map((tech: string) => (
          <span
            key={tech}
            className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-3 mt-auto border-t border-slate-100 dark:border-slate-700">
        {project.demoLink ? (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-blue-800 dark:text-blue-400 hover:text-blue-700 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        ) : <span />}

        <button
          onClick={() => onDetails(project)}
          className="flex items-center gap-1.5 text-sm font-medium px-4 py-1.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-80 transition duration-200"
        >
          View Details
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

// ── Main export ───────────────────────────────────────────────────────────────
export default function AllProjects() {
  const [active, setActive] = useState<Project | null>(null);
  const [filter, setFilter] = useState("All");

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filtered = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
              filter === cat
                ? "bg-blue-800 text-white"
                : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-blue-800 hover:text-blue-800 dark:hover:text-blue-400"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} onDetails={setActive} />
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-20 text-slate-400 dark:text-slate-600">
          <p className="text-sm">No projects in this category yet.</p>
        </div>
      )}

      {/* Modal */}
      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </>
  );
}