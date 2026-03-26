"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

type ProjectCardProps = Project & {
  className?: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  className,
  title,
  category,
  description,
  overview,
  img,
  demoLink,
  githubLink,
  techs,
  features,
  challenges,
  solutions,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    if (modalOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  return (
    <>
      {/* ── Card ── */}
      <div
        className={cn(
          "group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow duration-300",
          className
        )}
      >
        {/* Image + Category Badge */}
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />

          {/* Category badge — top right */}
          <span className="absolute top-3 right-3 bg-blue-800 dark:text-blue-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {category}
          </span>
        </div>

        {/* Card Body */}
        <div className="flex flex-col gap-3 p-5 flex-1">
          {/* Title */}
          <h4 className=" text-left !text-lg !font-bold text-slate-900 dark:text-white">
            {title}
          </h4>

          {/* Description — clamped to 3 lines like the screenshot */}
          <p className=" text-left !text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {techs.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Footer Links */}
          <div className="flex items-center justify-between pt-3 mt-auto border-t border-slate-100 dark:border-slate-700">
            {/* Live Demo */}
            {demoLink ? (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-blue-800 dark:text-blue-400 hover:text-blue-700 transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            ) : (
              <span />
            )}

            {/* View Details Button */}
            <button
              onClick={() => setModalOpen(true)}
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

      {/* ── Modal ── */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Hero Image */}
            <div className="relative w-full h-56 overflow-hidden rounded-t-3xl">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Title over image */}
              <div className="absolute bottom-4 left-6 right-14">
                <span className="inline-block bg-blue-800 dark:text-blue-400 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {category}
                </span>
                <h2 className="!text-2xl !font-bold text-white leading-tight">{title}</h2>
              </div>

              {/* Close button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition duration-200"
                aria-label="Close"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 flex flex-col gap-7">

              {/* Overview */}
              <ModalSection label="Overview">
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{overview}</p>
              </ModalSection>

              {/* Features */}
              {features.length > 0 && (
                <ModalSection label="✦ Key Features">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-blue-800 dark:bg-blue-400 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </ModalSection>
              )}

              {/* Challenges */}
              {challenges.length > 0 && (
                <ModalSection label="⚠ Challenges">
                  <ul className="flex flex-col gap-2">
                    {challenges.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </ModalSection>
              )}

              {/* Solutions */}
              {solutions.length > 0 && (
                <ModalSection label="✓ Solutions">
                  <ul className="flex flex-col gap-2">
                    {solutions.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                        <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </ModalSection>
              )}

              {/* Tech Stack */}
              <ModalSection label="Tech Stack">
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </ModalSection>

              {/* CTA Links */}
              {(demoLink || githubLink) && (
                <div className="flex flex-wrap gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                  {demoLink && (
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center text-sm font-semibold px-5 py-2.5 rounded-full bg-blue-800 hover:bg-blue-700 text-white transition duration-200"
                    >
                      Live Demo →
                    </a>
                  )}
                  {githubLink && (
                    <a
                      href={githubLink}
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
      )}
    </>
  );
};

// Reusable modal section label
const ModalSection = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-3">
    <p className="text-xs uppercase tracking-widest font-semibold text-blue-800 dark:text-blue-400">
      {label}
    </p>
    {children}
  </div>
);

export default ProjectCard;