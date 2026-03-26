"use client";
import React, { useState } from "react";

const COUNTRIES = [
  { name: "Nigeria", flag: "🇳🇬" },
  { name: "United States", flag: "🇺🇸" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "France", flag: "🇫🇷" },
  { name: "South Africa", flag: "🇿🇦" },
  { name: "Ghana", flag: "🇬🇭" },
  { name: "Kenya", flag: "🇰🇪" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "India", flag: "🇮🇳" },
  { name: "Brazil", flag: "🇧🇷" },
  { name: "Other", flag: "🌍" },
];

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800 dark:focus:ring-blue-400 transition";

const labelClass =
  "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5";

export default function TestimonialForm() {
  const [form, setForm] = useState({
    name: "",
    role: "",
    company: "",
    companyUrl: "",
    country: "",
    countryFlag: "",
    rating: "5",
    review: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "country") {
      const found = COUNTRIES.find((c) => c.name === value);
      setForm((prev) => ({ ...prev, country: value, countryFlag: found?.flag ?? "" }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async () => {
    setErrorMsg("");

    if (!form.name || !form.role || !form.country || !form.review) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/testimonials/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          role: form.role,
          company: form.company,
          companyUrl: form.companyUrl,
          country: form.country,
          countryFlag: form.countryFlag,
          rating: form.rating,
          review: form.review,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Submission failed.");

      setStatus("success");
    } catch (err: any) {
      setErrorMsg(err.message);
      setStatus("error");
    }
  };

  // ── Success state ──────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="!text-xl font-bold text-slate-900 dark:text-white">Thank you!</h3>
        <p className="text-slate-500 dark:text-slate-400 max-w-sm !text-sm">
          Your review has been submitted and will appear on the site.
        </p>
      </div>
    );
  }

  // ── Form ───────────────────────────────────────────────────────────────────
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex flex-col gap-5">

        {/* Row 1: Full Name + Position */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>
              Position <span className="text-red-500">*</span>
            </label>
            <input
              name="role"
              value={form.role}
              onChange={handleChange}
              placeholder="Your job title"
              className={inputClass}
            />
          </div>
        </div>

        {/* Row 2: Company + Country */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>
              Company{" "}
              <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Your company name"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>
              Country <span className="text-red-500">*</span>
            </label>
            <select
              name="country"
              value={form.country}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select your country</option>
              {COUNTRIES.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.flag} {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Rating */}
        <div>
          <label className={labelClass}>
            Rating <span className="text-red-500">*</span>
          </label>
          <select
            name="rating"
            value={form.rating}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="5">5 Stars - Excellent</option>
            <option value="4">4 Stars - Very Good</option>
            <option value="3">3 Stars - Good</option>
            <option value="2">2 Stars - Fair</option>
            <option value="1">1 Star - Poor</option>
          </select>
        </div>

        {/* Review */}
        <div>
          <label className={labelClass}>
            Your Review <span className="text-red-500">*</span>
          </label>
          <textarea
            name="review"
            value={form.review}
            onChange={handleChange}
            rows={6}
            placeholder="Share your experience working with me..."
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Error */}
        {errorMsg && (
          <p className="text-sm text-red-500 font-medium">{errorMsg}</p>
        )}

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={status === "loading"}
          className="w-full py-3.5 rounded-xl bg-blue-800 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold text-sm transition duration-200"
        >
          {status === "loading" ? "Submitting..." : "Submit Review"}
        </button>

      </div>
    </div>
  );
}