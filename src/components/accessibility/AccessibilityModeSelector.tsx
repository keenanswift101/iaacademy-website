"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type Mode = "standard" | "adhd" | "dyslexia" | "add" | "slow";

const STORAGE_KEY = "iaacademy_mode";

const modes: { value: Mode; label: string; icon: ReactNode; desc: string; helpsWith: string }[] = [
  {
    value: "standard",
    label: "Standard",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
        <circle cx="8" cy="8" r="5.5" />
        <circle cx="8" cy="8" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
    desc: "Default layout",
    helpsWith: "General use",
  },
  {
    value: "adhd",
    label: "ADHD-Friendly",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M9.5 2L5.5 8.5H9L6.5 14L12.5 7.5H9Z" />
      </svg>
    ),
    desc: "Wider spacing, clearer text blocks",
    helpsWith: "ADHD · attention difficulties",
  },
  {
    value: "dyslexia",
    label: "Dyslexia-Friendly",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4">
        <line x1="2" y1="3.5" x2="14" y2="3.5" />
        <line x1="2" y1="7" x2="14" y2="7" />
        <line x1="2" y1="10.5" x2="11" y2="10.5" />
        <line x1="2" y1="14" x2="12.5" y2="14" />
      </svg>
    ),
    desc: "Left-aligned text, warmer background",
    helpsWith: "Dyslexia · reading difficulties",
  },
  {
    value: "add",
    label: "Calm / ADD",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4">
        <path d="M1.5 10 C3.5 6 5.5 5.5 8 8.5 C10.5 11.5 12.5 11 14.5 7" />
      </svg>
    ),
    desc: "No animations, reduced saturation",
    helpsWith: "ADD · sensory sensitivity",
  },
  {
    value: "slow",
    label: "Easy Reading",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeLinecap="round" className="w-4 h-4">
        <line x1="2" y1="5" x2="12" y2="5" strokeWidth="3" />
        <line x1="2" y1="11" x2="8.5" y2="11" strokeWidth="1.5" />
      </svg>
    ),
    desc: "Larger text, shorter line length",
    helpsWith: "Slow processing · visual fatigue",
  },
];

export default function AccessibilityModeSelector() {
  const [open, setOpen] = useState(false);
  // Lazy initializer reads localStorage on first render — no effect needed for state
  const [current, setCurrent] = useState<Mode>(() => {
    if (typeof window === "undefined") return "standard";
    return (localStorage.getItem(STORAGE_KEY) as Mode) ?? "standard";
  });
  const [showModal, setShowModal] = useState(false);

  // Sync mode to DOM attribute whenever current changes
  useEffect(() => {
    document.documentElement.dataset.mode = current === "standard" ? "" : current;
  }, [current]);

  // First-visit: show modal only if no saved preference
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      const t = setTimeout(() => setShowModal(true), 2000);
      return () => clearTimeout(t);
    }
  }, []);

  function applyMode(mode: Mode) {
    localStorage.setItem(STORAGE_KEY, mode);
    setCurrent(mode);
  }

  function select(mode: Mode) {
    applyMode(mode);
    setShowModal(false);
    setOpen(false);
  }

  return (
    <>
      {/* Persistent floating toggle */}
      <button
        aria-label="Adjust reading settings"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-24 left-4 z-50 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 focus-visible:ring-2 px-4 py-2"
        style={{ background: "var(--color-primary)", color: "#fff", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.04em", lineHeight: 1.3, maxWidth: "88px", textAlign: "center" }}
      >
        Change reading view
      </button>

      {/* Dropdown panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Reading settings"
          className="fixed bottom-40 left-4 z-50 rounded-2xl p-4 w-72 shadow-2xl"
          style={{ background: "var(--color-surface-white)", border: "1px solid var(--color-surface-high)" }}
        >
          <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "var(--color-primary)" }}>
            Reading settings
          </p>
          <p className="text-xs mb-3" style={{ color: "var(--color-on-surface-muted)" }}>
            Adjust how this site displays — designed for every learner.
          </p>
          <ul className="space-y-1" role="listbox" aria-label="Choose a reading mode">
            {modes.map((m) => (
              <li key={m.value}>
                <button
                  role="option"
                  aria-selected={current === m.value}
                  onClick={() => select(m.value)}
                  className="w-full text-left rounded-xl px-3 py-2 text-sm flex items-start gap-3 transition-colors"
                  style={{
                    background: current === m.value ? "var(--color-surface-variant)" : "transparent",
                    color: "var(--color-on-surface)",
                    fontWeight: current === m.value ? 600 : 400,
                  }}
                >
                  <span
                    className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center mt-0.5"
                    style={{
                      background: current === m.value ? "var(--color-primary)" : "rgba(94,0,129,0.08)",
                      color: current === m.value ? "#fff" : "var(--color-primary)",
                    }}
                  >
                    {m.icon}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-medium text-sm">{m.label}</span>
                    <span className="block text-xs mt-0.5" style={{ color: "var(--color-on-surface-muted)" }}>
                      {m.helpsWith}
                    </span>
                  </span>
                  {current === m.value && (
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 mt-1.5 shrink-0" style={{ color: "var(--color-primary)" }}>
                      <path d="M1.5 6l3 3 6-6" />
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </ul>
          <div
            className="mt-3 rounded-xl px-3 py-2.5 text-xs"
            style={{ background: "rgba(94,0,129,0.05)", color: "var(--color-on-surface-muted)" }}
          >
            Every setting on this site was chosen with learners who have ADHD, Dyslexia, and ADD in mind — just like our classrooms.
          </div>
        </div>
      )}

      {/* First-visit modal */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="mode-modal-title"
          className="fixed inset-0 z-9998 flex items-end sm:items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.4)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}
        >
          <div
            className="rounded-2xl w-full max-w-md shadow-2xl overflow-hidden"
            style={{ background: "var(--color-surface-white)" }}
          >
            {/* Header banner */}
            <div
              className="px-6 pt-6 pb-5"
              style={{ background: "linear-gradient(135deg, rgba(94,0,129,0.08) 0%, rgba(240,192,64,0.07) 100%)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-bold text-sm"
                  style={{ background: "var(--color-primary)", color: "#fff" }}
                >
                  Aa
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-primary)" }}>
                  Reading Support
                </p>
              </div>
              <h2 id="mode-modal-title" className="text-lg font-bold leading-snug mb-1" style={{ color: "var(--color-on-surface)" }}>
                We&rsquo;ve built this site around your child.
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-muted)" }}>
                IA Academy serves learners with ADHD, Dyslexia, ADD, and slow processing. This site can adapt its layout to match your child&rsquo;s reading needs — right now, before you read a single word.
              </p>
            </div>

            {/* Mode list */}
            <div className="px-6 py-4">
              <p className="text-xs font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--color-on-surface-muted)" }}>
                Choose a reading layout
              </p>
              <ul className="space-y-2" role="listbox">
                {modes.map((m) => (
                  <li key={m.value}>
                    <button
                      role="option"
                      aria-selected={false}
                      onClick={() => select(m.value)}
                      className="w-full text-left rounded-xl px-3 py-3 text-sm flex items-center gap-3 transition-all hover:shadow-sm"
                      style={{ background: "var(--color-surface-low)", border: "1px solid transparent" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(94,0,129,0.20)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "transparent"; }}
                    >
                      <span
                        className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: "rgba(94,0,129,0.10)", color: "var(--color-primary)" }}
                      >
                        {m.icon}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block font-semibold text-sm" style={{ color: "var(--color-on-surface)" }}>
                          {m.label}
                        </span>
                        <span className="block text-xs mt-0.5" style={{ color: "var(--color-on-surface-muted)" }}>
                          {m.helpsWith} &mdash; {m.desc}
                        </span>
                      </span>
                      <svg viewBox="0 0 8 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-2 h-3 shrink-0 opacity-30">
                        <path d="M1 1l5 5-5 5" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="px-6 pb-5 space-y-3">
              <div
                className="rounded-xl px-4 py-3 text-xs leading-relaxed"
                style={{ background: "rgba(94,0,129,0.05)", color: "var(--color-on-surface-muted)" }}
              >
                <span className="font-semibold" style={{ color: "var(--color-primary)" }}>Why this matters: </span>
                Research shows that small adjustments to text spacing, contrast, and motion can significantly reduce reading effort for learners with learning differences. We apply the same care here as we do in our classrooms.
              </div>
              <button
                onClick={() => { setShowModal(false); localStorage.setItem(STORAGE_KEY, "standard"); }}
                className="w-full text-sm py-2.5 rounded-xl font-medium transition-opacity hover:opacity-70"
                style={{ color: "var(--color-on-surface-muted)" }}
              >
                Continue with default layout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

