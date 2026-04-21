"use client";

import { useState } from "react";

const grades = ["R", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const inputStyle = {
  borderColor: "rgba(94,0,129,0.20)",
  color: "var(--color-on-surface)",
} as const;

const cardStyle = {
  background: "linear-gradient(135deg, rgba(94,0,129,0.10) 0%, rgba(240,192,64,0.07) 100%)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(94,0,129,0.20)",
  boxShadow: "0 8px 32px rgba(94,0,129,0.10), inset 0 1px 0 rgba(255,255,255,0.55)",
} as const;

const inputClass = "w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2";

export default function BookATourForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const encoded = new URLSearchParams();
      data.forEach((value, key) => encoded.append(key, value.toString()));
      await fetch("/netlify-forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encoded.toString(),
      });
      setSubmitted(true);
    } catch {
      form.submit();
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl p-10 flex flex-col items-center text-center gap-6" style={cardStyle}>
        <div className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: "var(--color-primary)" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2" style={{ color: "var(--color-primary)" }}>Tour Request Sent!</h3>
          <p className="text-sm" style={{ color: "var(--color-on-surface)" }}>
            We&apos;ll call or WhatsApp you within one business day to confirm your tour date.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl p-8" style={cardStyle}>
      <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--color-primary)" }}>
        Request a Tour
      </h2>
      <p className="text-sm mb-6" style={{ color: "var(--color-on-surface)" }}>
        Fill in the form below and we will contact you within one business day to confirm a date and time.
      </p>
      <form className="space-y-4" name="book-a-tour" onSubmit={handleSubmit} noValidate>
        <input type="hidden" name="form-name" value="book-a-tour" />

        {/* Parent details */}
        <fieldset>
          <legend className="text-sm font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
            Your Details
          </legend>
          <div className="space-y-3">
            <div>
              <label htmlFor="tour-parent-name" className="block text-sm font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>
                Parent / Guardian Name <span aria-hidden="true">*</span>
              </label>
              <input id="tour-parent-name" name="parent_name" type="text" required autoComplete="name"
                className={inputClass} style={inputStyle} placeholder="Your full name" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="tour-phone" className="block text-sm font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>
                  Phone <span aria-hidden="true">*</span>
                </label>
                <input id="tour-phone" name="phone" type="tel" required autoComplete="tel"
                  className={inputClass} style={inputStyle} placeholder="+264 XX XXX XXXX" />
              </div>
              <div>
                <label htmlFor="tour-email" className="block text-sm font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>
                  Email <span aria-hidden="true">*</span>
                </label>
                <input id="tour-email" name="email" type="email" required autoComplete="email"
                  className={inputClass} style={inputStyle} placeholder="you@example.com" />
              </div>
            </div>
          </div>
        </fieldset>

        {/* Child details */}
        <fieldset>
          <legend className="text-sm font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
            Child&apos;s Details
          </legend>
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="tour-child-name" className="block text-sm font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>
                  Child&apos;s First Name <span aria-hidden="true">*</span>
                </label>
                <input id="tour-child-name" name="child_name" type="text" required
                  className={inputClass} style={inputStyle} placeholder="Child's first name" />
              </div>
              <div>
                <label htmlFor="tour-grade" className="block text-sm font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>
                  Grade Applying For <span aria-hidden="true">*</span>
                </label>
                <select id="tour-grade" name="grade" required className={inputClass} style={inputStyle}>
                  <option value="">Select grade…</option>
                  {grades.map((g) => (
                    <option key={g} value={g}>Grade {g}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </fieldset>

        {/* Preferred date */}
        <div>
          <label htmlFor="tour-date" className="block text-sm font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>
            Preferred Tour Date
            <span className="font-normal text-xs ml-1" style={{ color: "rgba(26,28,30,0.55)" }}>(we will confirm availability)</span>
          </label>
          <input id="tour-date" name="preferred_date" type="date"
            className={inputClass} style={inputStyle} />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="tour-message" className="block text-sm font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>
            Anything You Want Us to Know?
            <span className="font-normal text-xs ml-1" style={{ color: "rgba(26,28,30,0.55)" }}>(optional)</span>
          </label>
          <textarea id="tour-message" name="message" rows={4}
            className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2 resize-y"
            style={inputStyle}
            placeholder="e.g. My child has dyslexia and I want to understand how you support reading. We can visit any afternoon." />
        </div>

        <button type="submit" disabled={submitting}
          className="w-full py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 disabled:opacity-60"
          style={{ background: "var(--color-primary)", color: "#ffffff" }}>
          {submitting ? "Submitting…" : "Request My Tour"}
        </button>
        <p className="text-xs text-center" style={{ color: "rgba(26,28,30,0.55)" }}>
          We will call or WhatsApp you to confirm the date. No spam, ever.
        </p>
      </form>
    </div>
  );
}
