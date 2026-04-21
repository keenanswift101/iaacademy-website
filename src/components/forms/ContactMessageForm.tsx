"use client";

import { useState } from "react";

const inputStyle = {
  borderColor: "rgba(94,0,129,0.20)",
  color: "var(--color-on-surface)",
} as const;

const inputClass =
  "w-full rounded-xl px-4 py-3 text-sm border outline-none transition-shadow focus:ring-2";

export default function ContactMessageForm() {
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
      <div className="rounded-2xl p-10 flex flex-col items-center text-center gap-6"
        style={{
          background: "rgba(255,255,255,0.70)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(94,0,129,0.18)",
          boxShadow: "var(--shadow-ambient)",
        }}
      >
        <div className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: "var(--color-primary)" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2" style={{ color: "var(--color-primary)" }}>Message Sent!</h3>
          <p className="text-sm" style={{ color: "var(--color-on-surface)" }}>
            Thank you for reaching out. We typically respond within one business day.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl p-8"
      style={{
        background: "rgba(255,255,255,0.70)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(94,0,129,0.18)",
        boxShadow: "var(--shadow-ambient)",
      }}
    >
      <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
        Send Us a Message
      </h2>
      <form className="space-y-4" name="contact-message" onSubmit={handleSubmit} noValidate>
        <input type="hidden" name="form-name" value="contact-message" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>
              Full Name <span aria-hidden="true">*</span>
            </label>
            <input id="contact-name" name="name" type="text" required autoComplete="name"
              className={inputClass} style={inputStyle} placeholder="Your full name" />
          </div>
          <div>
            <label htmlFor="contact-phone" className="block text-sm font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>
              Phone Number
            </label>
            <input id="contact-phone" name="phone" type="tel" autoComplete="tel"
              className={inputClass} style={inputStyle} placeholder="+264 XX XXX XXXX" />
          </div>
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>
            Email Address <span aria-hidden="true">*</span>
          </label>
          <input id="contact-email" name="email" type="email" required autoComplete="email"
            className={inputClass} style={inputStyle} placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="contact-subject" className="block text-sm font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>
            Subject
          </label>
          <select id="contact-subject" name="subject" className={inputClass} style={inputStyle}>
            <option value="">Select a subject…</option>
            <option value="admissions">Admissions enquiry</option>
            <option value="learning-support">Learning support</option>
            <option value="online-learners">Online learner placement</option>
            <option value="fees">School fees</option>
            <option value="tour">Book a school tour</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-sm font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>
            Message <span aria-hidden="true">*</span>
          </label>
          <textarea id="contact-message" name="message" required rows={5}
            className="w-full rounded-xl px-4 py-3 text-sm border outline-none transition-shadow focus:ring-2 resize-y"
            style={inputStyle} placeholder="How can we help you?" />
        </div>
        <button type="submit" disabled={submitting}
          className="w-full py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 disabled:opacity-60"
          style={{ background: "var(--color-primary)", color: "#ffffff" }}>
          {submitting ? "Sending…" : "Send Message"}
        </button>
        <p className="text-xs text-center" style={{ color: "rgba(26,28,30,0.55)" }}>
          We typically respond within one business day.
        </p>
      </form>
    </div>
  );
}
