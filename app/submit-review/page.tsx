import TestimonialForm from "@/components/TestimonialForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leave a Review",
  description: "Share your experience working with Obinna Samuel.",
  robots: { index: false, follow: false }, // keep this page off search engines
};

export default function SubmitReviewPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-20 px-6 transition-colors duration-300">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-widest text-blue-800 dark:text-blue-400 font-semibold mb-3">
            Testimonials
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Leave a Review
          </h1>
          <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto">
            Worked with me? I'd love to hear about your experience. Your review will appear on my portfolio after approval.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 md:p-10 shadow-sm">
          <TestimonialForm />
        </div>

      </div>
    </main>
  );
}