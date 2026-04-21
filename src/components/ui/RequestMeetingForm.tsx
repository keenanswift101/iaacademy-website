"use client";

import { useState } from "react";
import Link from "next/link";

const grades = ["R", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
const titles = ["Mr", "Mrs", "Ms", "Miss", "Dr", "Prof"];
const preferredTimes = [
  "Monday morning",
  "Monday afternoon",
  "Tuesday morning",
  "Tuesday afternoon",
  "Wednesday morning",
  "Wednesday afternoon",
  "Thursday morning",
  "Thursday afternoon",
  "Friday morning",
  "Friday afternoon",
  "Any day — flexible",
];

const cardStyle = {
  background: "linear-gradient(135deg, rgba(94,0,129,0.10) 0%, rgba(240,192,64,0.07) 100%)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(94,0,129,0.20)",
  boxShadow: "0 8px 32px rgba(94,0,129,0.10), inset 0 1px 0 rgba(255,255,255,0.55)",
} as const;

const inputStyle = {
  borderColor: "rgba(94,0,129,0.20)",
  color: "var(--color-on-surface)",
} as const;

export default function RequestMeetingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [firstName, setFirstName] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const encoded = new URLSearchParams();
      data.forEach((value, key) => {
        encoded.append(key, value.toString());
      });
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encoded.toString(),
      });
      setFirstName((data.get("first_name") as string) || "");
      setSubmitted(true);
    } catch {
      // fallback: let browser handle native submit
      form.submit();
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl p-10 flex flex-col items-center text-center gap-6"
        style={cardStyle}
      >
        {/* Checkmark */}
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ background: "var(--color-primary)" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--color-primary)" }}>
            {firstName ? `Thank you, ${firstName}!` : "Request Received!"}
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface)" }}>
            We&apos;ve received your meeting request and will be in touch within one business day to confirm a date and time.
          </p>
        </div>

        <div
          className="w-full rounded-xl p-4 text-sm text-left space-y-1.5"
          style={{ background: "rgba(94,0,129,0.06)", border: "1px solid rgba(94,0,129,0.12)" }}
        >
          <p className="font-semibold text-xs uppercase tracking-wide mb-2" style={{ color: "var(--color-primary)" }}>
            What happens next
          </p>
          <p style={{ color: "var(--color-on-surface)" }}>📞 We&apos;ll call or WhatsApp you to confirm your meeting time.</p>
          <p style={{ color: "var(--color-on-surface)" }}>💬 The meeting is relaxed, personal, and pressure-free.</p>
          <p style={{ color: "var(--color-on-surface)" }}>✅ Bring all your questions — we&apos;ll answer them honestly.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <Link
            href="/"
            className="flex-1 inline-flex items-center justify-center rounded-full py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: "var(--color-primary)", color: "#ffffff" }}
          >
            Back to Home
          </Link>
          <a
            href="https://wa.me/264817296626?text=Hi%21+I%27ve+just+submitted+a+meeting+request+and+wanted+to+follow+up."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: "#25D366", color: "#ffffff" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.523 5.854L.057 23.077a.75.75 0 00.921.921L6.2 22.481A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.497-5.197-1.367l-.374-.216-3.877 1.017 1.018-3.804-.234-.387A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Message on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl p-8" style={cardStyle}>
      <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--color-primary)" }}>
        Request a Meeting
      </h2>
      <p className="text-sm mb-6" style={{ color: "var(--color-on-surface)" }}>
        Fill in your details below and we will get in touch to confirm a time that suits you.
      </p>

      <form className="space-y-4" name="request-meeting" onSubmit={handleSubmit} noValidate>
        <input type="hidden" name="form-name" value="request-meeting" />

        {/* Your Details */}
        <fieldset>
          <legend className="text-sm font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
            Your Details
          </legend>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label htmlFor="meeting-title" className="block text-sm font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>
                  Title <span aria-hidden="true">*</span>
                </label>
                <select id="meeting-title" name="title" required className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2" style={inputStyle}>
                  <option value="">—</option>
                  {titles.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="meeting-first-name" className="block text-sm font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>
                  First Name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="meeting-first-name"
                  name="first_name"
                  type="text"
                  required
                  autoComplete="given-name"
                  className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2"
                  style={inputStyle}
                  placeholder="First"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="meeting-last-name" className="block text-sm font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>
                  Last Name <span aria-hidden="true">*</span>
                </label>
                <input id="meeting-last-name" name="last_name" type="text" required autoComplete="family-name" className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2" style={inputStyle} placeholder="Last" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="meeting-email" className="block text-sm font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>
                  Email Address <span aria-hidden="true">*</span>
                </label>
                <input id="meeting-email" name="email" type="email" required autoComplete="email" className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2" style={inputStyle} placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="meeting-phone" className="block text-sm font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>
                  Contact Number <span aria-hidden="true">*</span>
                </label>
                <input id="meeting-phone" name="phone" type="tel" required autoComplete="tel" className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2" style={inputStyle} placeholder="+264 XX XXX XXXX" />
              </div>
            </div>
          </div>
        </fieldset>

        {/* Child Details */}
        <fieldset>
          <legend className="text-sm font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
            Child&apos;s Details
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="meeting-grade" className="block text-sm font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>
                Grade / Age <span aria-hidden="true">*</span>
              </label>
              <select id="meeting-grade" name="grade" required className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2" style={inputStyle}>
                <option value="">Select grade…</option>
                {grades.map((g) => <option key={g} value={g}>Grade {g}</option>)}
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>
            <div>
              <label htmlFor="meeting-preferred-time" className="block text-sm font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>
                Preferred Day / Time
              </label>
              <select id="meeting-preferred-time" name="preferred_time" className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2" style={inputStyle}>
                <option value="">No preference</option>
                {preferredTimes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>
        </fieldset>

        {/* Message */}
        <div>
          <label htmlFor="meeting-message" className="block text-sm font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>
            What Would You Like to Discuss?
            <span className="font-normal text-xs ml-1" style={{ color: "rgba(26,28,30,0.55)" }}>(optional)</span>
          </label>
          <textarea id="meeting-message" name="message" rows={4} className="w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2 resize-y" style={inputStyle} placeholder="e.g. My child has been diagnosed with ADHD and I'd like to understand how IA Academy supports learners like her." />
        </div>

        {/* Privacy */}
        <div className="rounded-xl p-4 space-y-3" style={{ background: "rgba(94,0,129,0.05)", border: "1px solid rgba(94,0,129,0.12)" }}>
          <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--color-primary)" }}>Consumer Information</p>
          <p className="text-xs leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
            <strong>IA Academy</strong> will use the information you provide for the purpose of ensuring your request is processed.{" "}
            <strong>IA Academy</strong> will not disclose your information to anyone else without your consent. For further information see our{" "}
            <a href="/privacy-policy" className="underline" style={{ color: "var(--color-primary)" }}>privacy policy</a>.
          </p>
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" name="privacy_accepted" required className="mt-0.5 rounded" style={{ accentColor: "var(--color-primary)" }} />
            <span className="text-xs font-semibold" style={{ color: "var(--color-on-surface)" }}>I Accept</span>
          </label>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3 rounded-full font-semibold text-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 disabled:opacity-60"
          style={{ background: "var(--color-primary)", color: "#ffffff" }}
        >
          {submitting ? "Sending…" : "Request My Meeting"}
        </button>
        <p className="text-xs text-center" style={{ color: "rgba(26,28,30,0.55)" }}>
          We will contact you within one business day to confirm.
        </p>
      </form>
    </div>
  );
}
