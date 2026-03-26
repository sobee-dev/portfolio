import Link from "next/link";
import { testimonials } from "@/data/testimonials";
import Testimonials from "@/components/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Reviews",
  description: "See what clients say about working with Obinna Samuel E.",
};

// Reuse the same sub-components from Testimonials.tsx
// but we need the full list here — so we build the page directly

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-[10px] uppercase tracking-widest text-blue-800 dark:text-blue-400 font-semibold mb-3">
            Kind words
          </p>
          <h2 className="text-slate-900 dark:text-white">
            What Clients <span className="text-blue-800">Say</span>
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base">
            Don't take my word for it — here's what people I've worked with have to say.
          </p>
        </div>

        {/* Leave a Review CTA */}
        <div className="flex justify-center mb-14">
          <Link
            href="/submit-review"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-800 hover:bg-blue-700 text-white text-sm font-semibold transition-all duration-200 shadow-md hover:scale-105"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Leave a Review
          </Link>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-14 py-5 border-y border-slate-100 dark:border-slate-800">
          <div className="text-center">
            <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {testimonials.length}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Total Reviews</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {(
                testimonials.reduce((acc, t) => acc + t.rating, 0) /
                testimonials.length
              ).toFixed(1)}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {testimonials.filter((t) => t.rating === 5).length}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">5-Star Reviews</p>
          </div>
        </div>

        {/* All Reviews — client component handles modal */}
        <AllTestimonials />

        {/* Back to portfolio */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/#testimonials"
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

// ── Client component for the interactive grid + modal ──────────────────────
// Separated so the page itself stays a Server Component
import AllTestimonials from "@/components/AllTestimonials";