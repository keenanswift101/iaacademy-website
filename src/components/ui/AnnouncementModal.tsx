"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const SESSION_KEY = "ia_announcement_dismissed";

export default function AnnouncementModal() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

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

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 8500,
        background: "rgba(10,0,20,0.65)",
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
      <div
        id="ia-announcement-modal"
        role="dialog"
        aria-modal="true"
        aria-label="IA Academy Admission 2027 — Registrations Open"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "420px",
          borderRadius: "1.25rem",
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.45)",
          transform: closing ? "scale(0.92) translateY(12px)" : "scale(1) translateY(0)",
          opacity: closing ? 0 : 1,
          transition: "transform 0.38s cubic-bezier(0.34,1.56,0.64,1), opacity 0.32s ease",
        }}
      >
        {/* Poster image */}
        <a href="/admissions" onClick={close} aria-label="Apply now — Admissions open for 2027">
          <Image
            src="/images/admission-poster-2027.png"
            alt="IA Academy — Admission Now Open for 2027, Grades RR to Grade 11"
            width={840}
            height={1050}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
        </a>

        {/* Close button — overlaid top-right */}
        <button
          ref={closeRef}
          onClick={close}
          aria-label="Close announcement"
          style={{
            position: "absolute",
            top: "0.75rem",
            right: "0.75rem",
            width: "2.25rem",
            height: "2.25rem",
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.6)",
            background: "rgba(10,0,20,0.55)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            color: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.18s ease, transform 0.18s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(94,0,129,0.85)";
            (e.currentTarget as HTMLButtonElement).style.transform = "rotate(90deg)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(10,0,20,0.55)";
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
