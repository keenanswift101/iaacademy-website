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
  // Sync mode to DOM attribute whenever current changes
  useEffect(() => {
    document.documentElement.dataset.mode = current === "standard" ? "" : current;
  }, [current]);

  function applyMode(mode: Mode) {
    localStorage.setItem(STORAGE_KEY, mode);
    setCurrent(mode);
  }

  function select(mode: Mode) {
    applyMode(mode);
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
          className="fixed bottom-40 left-4 z-50 rounded-2xl p-4 w-[calc(100vw-2rem)] max-w-72 shadow-2xl max-h-[70dvh] overflow-y-auto"
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

    </>
  );
}

