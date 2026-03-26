"use client";
import React, { useState } from "react";
import { testimonials } from "@/data/testimonials";
import type { Testimonial } from "@/data/testimonials";

const PREVIEW_LENGTH = 160;

// ── Stars ─────────────────────────────────────────────────────────────────────
const Stars = ({ count }: { count: number }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < count ? "text-yellow-400" : "text-slate-300 dark:text-slate-600"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

// ── Avatar ────────────────────────────────────────────────────────────────────
const Avatar = ({ t }: { t: Testimonial }) => {
  const initials = t.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
  if (t.avatar) {
    return (
      <img
        src={t.avatar}
        alt={t.name}
        className="w-12 h-12 rounded-full object-cover border-2 border-slate-200 dark:border-slate-700 shrink-0"
      />
    );
  }
  return (
    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 ${t.avatarColor ?? "bg-blue-800"}`}>
      {initials}
    </div>
  );
};

// ── Reviewer Info ─────────────────────────────────────────────────────────────
const ReviewerInfo = ({ t }: { t: Testimonial }) => (
  <div className="flex items-center gap-3">
    <Avatar t={t} />
    <div className="flex-1 min-w-0">
      <p className="text-sm font-bold text-slate-900 dark:text-white">{t.name}</p>
      <p className="text-xs text-blue-800 dark:text-blue-400 truncate">
        {t.role}
        {t.companyUrl ? (
          <a href={t.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
            , {t.company}
          </a>
        ) : t.company ? (
          <span>, {t.company}</span>
        ) : null}
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-400">
        {t.country} {t.countryFlag}
      </p>
    </div>
  </div>
);

// ── Card ──────────────────────────────────────────────────────────────────────
const TestimonialCard = ({
  t,
  onReadAll,
}: {
  t: Testimonial;
  onReadAll: (t: Testimonial) => void;
}) => {
  const isLong = t.review.length > PREVIEW_LENGTH;
  const preview = isLong ? t.review.slice(0, PREVIEW_LENGTH).trimEnd() + "..." : t.review;

  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300">
      <Stars count={t.rating} />
      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic flex-1">
        "{preview}"
      </p>
      {isLong && (
        <button
          onClick={() => onReadAll(t)}
          className="self-start text-sm font-semibold text-blue-800 dark:text-blue-400 hover:underline"
        >
          Read all
        </button>
      )}
      <hr className="border-slate-100 dark:border-slate-700" />
      <ReviewerInfo t={t} />
    </div>
  );
};

// ── Modal ─────────────────────────────────────────────────────────────────────
const ReviewModal = ({ t, onClose }: { t: Testimonial; onClose: () => void }) => {
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
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between px-7 pt-7 pb-4">
          <div>
            <h2 className="!text-xl !font-bold text-slate-900 dark:text-white">Client Review</h2>
            <div className="flex items-center gap-2 mt-2">
              <Stars count={t.rating} />
              <span className="text-sm text-slate-500">{t.rating}/5 stars</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors mt-1"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-7 pb-7">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-5">
            <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic">
              "{t.review}"
            </p>
          </div>
          <hr className="my-5 border-slate-200 dark:border-slate-700" />
          <ReviewerInfo t={t} />
        </div>
      </div>
    </div>
  );
};

// ── Main export ───────────────────────────────────────────────────────────────
export default function AllTestimonials() {
  const [active, setActive] = useState<Testimonial | null>(null);

  return (
    <>
      {testimonials.length === 0 ? (
        <div className="text-center py-20 text-slate-400 dark:text-slate-600">
          <p className="text-sm">No reviews yet — be the first!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} onReadAll={setActive} />
          ))}
        </div>
      )}

      {active && <ReviewModal t={active} onClose={() => setActive(null)} />}
    </>
  );
}