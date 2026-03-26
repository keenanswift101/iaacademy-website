"use client";

/**
 * AnnouncementModal — Home-page marketing pop-up.
 *
 * Appears 2.5 s after the home page first loads (per browser session).
 * An × button in the top-right corner closes it immediately.
 * Three announcement categories: Registration, Events, Important Info.
 * Content is defined in the `announcements` array below — edit freely.
 *
 * Accessibility:
 *  - role="dialog" aria-modal="true"
 *  - Focus trapped inside while open
 *  - Dismissible with Escape key
 *  - All interactive elements have discernible labels
 */

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   ANNOUNCEMENT DATA — edit content here
───────────────────────────────────────────── */
type AnnouncementType = "registration" | "event" | "info";

interface Announcement {
  id: string;
  type: AnnouncementType;
  badge: string;
  title: string;
  body: string;
  cta?: { label: string; href: string };
}

const announcements: Announcement[] = [
  {
    id: "reg-2026",
    type: "registration",
    badge: "Registrations Open",
    title: "2026 / 2027 Grade Enrolments Now Open",
    body: "Limited spaces available across all grades. We accept a maximum of 10 learners per grade — secure your child's place today before enrolments close.",
    cta: { label: "Apply Now", href: "/admissions" },
  },
  {
    id: "open-day-2026",
    type: "event",
    badge: "Upcoming Event",
    title: "Open Day — Saturday 12 April 2026",
    body: "Join us for our Open Day. Tour the campus, meet our educators, and see our specialist learning environment first-hand. All families welcome.",
    cta: { label: "Book a Tour", href: "/contact/book-a-tour" },
  },
  {
    id: "term-2-start",
    type: "info",
    badge: "Important Notice",
    title: "Term 2 Begins 22 April 2026",
    body: "A reminder that Term 2 opens on Tuesday, 22 April 2026. School hours remain 07:45 – 13:30. Please ensure all stationery requirements are ready.",
    cta: { label: "View Term Dates", href: "/admissions/term-dates" },
  },
];

/* ─── Visual config per type ─── */
const typeConfig: Record<
  AnnouncementType,
  { accent: string; badgeBg: string; badgeText: string; icon: string }
> = {
  registration: {
    accent: "rgba(94,0,129,0.85)",
    badgeBg: "rgba(94,0,129,0.12)",
    badgeText: "var(--color-primary)",
    icon: "✏️",
  },
  event: {
    accent: "rgba(160,110,0,0.80)",
    badgeBg: "rgba(240,192,64,0.18)",
    badgeText: "var(--color-secondary)",
    icon: "📅",
  },
  info: {
    accent: "rgba(26,115,64,0.75)",
    badgeBg: "rgba(26,115,64,0.10)",
    badgeText: "var(--color-success)",
    icon: "📌",
  },
};

const SESSION_KEY = "ia_announcement_dismissed";

export default function AnnouncementModal() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Open after delay, once per session
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const t = setTimeout(() => setOpen(true), 2500);
    return () => clearTimeout(t);
  }, []);

  function close() {
    setClosing(true);
    sessionStorage.setItem(SESSION_KEY, "1");
    setTimeout(() => { setOpen(false); setClosing(false); }, 380);
  }

  // Trap focus while open
  useEffect(() => {
    if (!open || closing) return;
    const frame = document.getElementById("ia-announcement-modal");
    if (!frame) return;
    const focusable = frame.querySelectorAll<HTMLElement>(
      'button, [href], input, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const trap = (e: KeyboardEvent) => {
      if (e.key === "Escape") { close(); return; }
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", trap);
    first?.focus();
    return () => document.removeEventListener("keydown", trap);
  }, [open, closing]);

  function handleBackdropClick(e: React.MouseEvent) {
    if (e.target === backdropRef.current) close();
  }

  if (!open) return null;

  const ann = announcements[active];
  const cfg = typeConfig[ann.type];

  return (
    /* ── Backdrop ── */
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 8500,
        background: "rgba(10,0,20,0.52)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        opacity: closing ? 0 : 1,
        transition: "opacity 0.35s ease",
      }}
    >
      {/* ── Modal panel ── */}
      <div
        id="ia-announcement-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ann-title"
        aria-describedby="ann-body"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "480px",
          borderRadius: "1.5rem",

          /* Liquid glass */
          background:
            "linear-gradient(155deg, rgba(255,255,255,0.82) 0%, rgba(243,236,255,0.76) 55%, rgba(255,252,240,0.78) 100%)",
          backdropFilter: "blur(28px) saturate(1.9)",
          WebkitBackdropFilter: "blur(28px) saturate(1.9)",
          border: "1px solid rgba(255,255,255,0.62)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.80), 0 32px 72px rgba(94,0,129,0.22), 0 8px 24px rgba(0,0,0,0.10)",

          /* Slide-scale in */
          transform: closing ? "scale(0.92) translateY(12px)" : "scale(1) translateY(0)",
          opacity: closing ? 0 : 1,
          transition:
            "transform 0.38s cubic-bezier(0.34,1.56,0.64,1), opacity 0.32s ease",

          overflow: "hidden",
        }}
      >
        {/* Coloured accent bar at top */}
        <div
          aria-hidden="true"
          style={{
            height: "4px",
            background: `linear-gradient(90deg, ${cfg.accent} 0%, rgba(240,192,64,0.55) 100%)`,
          }}
        />

        {/* Content area */}
        <div style={{ padding: "1.75rem 1.75rem 1.5rem" }}>
          {/* Badge row */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.9rem" }}>
            <span aria-hidden="true" style={{ fontSize: "1.1rem" }}>{cfg.icon}</span>
            <span
              style={{
                display: "inline-block",
                padding: "0.2rem 0.8rem",
                borderRadius: "var(--radius-full)",
                background: cfg.badgeBg,
                color: cfg.badgeText,
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {ann.badge}
            </span>
          </div>

          {/* Title */}
          <h2
            id="ann-title"
            style={{
              margin: "0 0 0.65rem",
              fontSize: "1.2rem",
              fontWeight: 800,
              lineHeight: 1.3,
              color: "var(--color-on-surface)",
            }}
          >
            {ann.title}
          </h2>

          {/* Body */}
          <p
            id="ann-body"
            style={{
              margin: 0,
              fontSize: "0.9rem",
              lineHeight: 1.7,
              color: "var(--color-on-surface-muted)",
            }}
          >
            {ann.body}
          </p>

          {/* CTA + pagination row */}
          <div
            style={{
              marginTop: "1.4rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "0.75rem",
              flexWrap: "wrap",
            }}
          >
            {/* Dot pagination */}
            <div role="group" aria-label="Announcements" style={{ display: "flex", gap: "0.4rem" }}>
              {announcements.map((a, i) => (
                <button
                  key={a.id}
                  aria-label={`View announcement ${i + 1}: ${a.title}`}
                  aria-pressed={i === active}
                  onClick={() => setActive(i)}
                  style={{
                    width: i === active ? "20px" : "8px",
                    height: "8px",
                    borderRadius: "9999px",
                    border: "none",
                    padding: 0,
                    background:
                      i === active
                        ? "var(--color-primary)"
                        : "rgba(94,0,129,0.22)",
                    cursor: "pointer",
                    transition: "width 0.3s ease, background 0.2s ease",
                  }}
                />
              ))}
            </div>

            {/* CTA button */}
            {ann.cta && (
              <a
                href={ann.cta.href}
                onClick={close}
                className="btn-gold-metal"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: "0.55rem 1.4rem",
                  borderRadius: "var(--radius-full)",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  textDecoration: "none",
                }}
              >
                {ann.cta.label}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            )}
          </div>
        </div>

        {/* ── Close button ── */}
        <button
          ref={closeRef}
          onClick={close}
          aria-label="Close announcement"
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            width: "2rem",
            height: "2rem",
            borderRadius: "50%",
            border: "none",
            background: "rgba(94,0,129,0.08)",
            color: "var(--color-on-surface-muted)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.18s ease, transform 0.18s ease",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(94,0,129,0.16)";
            (e.currentTarget as HTMLButtonElement).style.transform = "rotate(90deg)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(94,0,129,0.08)";
            (e.currentTarget as HTMLButtonElement).style.transform = "rotate(0deg)";
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
