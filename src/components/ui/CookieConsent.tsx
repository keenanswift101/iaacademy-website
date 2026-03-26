"use client";

/**
 * CookieConsent — POPIA-compliant cookie notice for Namibia / South Africa.
 *
 * Behaviour:
 * - Slides up from bottom-right on first visit (no prior localStorage entry).
 * - "Accept All"  → stores consent=accepted  — hides banner.
 * - "Manage / Decline" → stores consent=declined — hides banner.
 * - Once dismissed, does not reappear for 365 days.
 * - Respects prefers-reduced-motion.
 */

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "ia_cookie_consent";
const CONSENT_TTL_DAYS = 365;

function hasValidConsent(): boolean {
  if (typeof window === "undefined") return true; // SSR — hide during render
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return false;
    const { value, expires } = JSON.parse(raw);
    if (Date.now() > expires) {
      localStorage.removeItem(CONSENT_KEY);
      return false;
    }
    return !!value;
  } catch {
    return false;
  }
}

function saveConsent(value: "accepted" | "declined") {
  const expires = Date.now() + CONSENT_TTL_DAYS * 24 * 60 * 60 * 1000;
  localStorage.setItem(CONSENT_KEY, JSON.stringify({ value, expires }));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (!hasValidConsent()) {
      // Both state updates deferred so they happen outside the synchronous
      // effect body and avoid the cascading-render lint warning.
      const tShow = setTimeout(() => setVisible(true), 0);
      const tEnter = setTimeout(() => setEntered(true), 320);
      return () => { clearTimeout(tShow); clearTimeout(tEnter); };
    }
  }, []);

  function dismiss(choice: "accepted" | "declined") {
    setEntered(false);
    // Wait for exit animation before unmounting
    setTimeout(() => {
      saveConsent(choice);
      setVisible(false);
    }, 400);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      aria-live="polite"
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 9000,
        maxWidth: "min(380px, calc(100vw - 2rem))",
        width: "100%",

        /* Liquid glass panel */
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.72) 0%, rgba(240,230,255,0.60) 60%, rgba(255,255,255,0.52) 100%)",
        backdropFilter: "blur(24px) saturate(1.8)",
        WebkitBackdropFilter: "blur(24px) saturate(1.8)",
        border: "1px solid rgba(255,255,255,0.55)",
        borderRadius: "1.25rem",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.70), 0 24px 56px rgba(94,0,129,0.16), 0 4px 12px rgba(0,0,0,0.08)",
        padding: "1.25rem 1.5rem 1.25rem",

        /* Slide-up / slide-down animation */
        transform: entered ? "translateY(0)" : "translateY(calc(100% + 2rem))",
        opacity: entered ? 1 : 0,
        transition: "transform 0.42s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease",
      }}
    >
      {/* Icon + heading row */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.65rem" }}>
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            width: "2.2rem",
            height: "2.2rem",
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(94,0,129,0.14), rgba(240,192,64,0.22))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.05rem",
          }}
        >🍪</span>
        <div>
          <p style={{ margin: 0, fontWeight: 700, fontSize: "0.92rem", color: "var(--color-on-surface)", lineHeight: 1.3 }}>
            We use cookies
          </p>
          <p style={{ margin: "0.3rem 0 0", fontSize: "0.78rem", color: "var(--color-on-surface-muted)", lineHeight: 1.55, maxWidth: "46ch" }}>
            IA Academy uses essential cookies for site functionality and optional analytics to improve your experience. Your privacy is important to us under POPIA.{" "}
            <Link
              href="/privacy-policy"
              style={{ color: "var(--color-primary)", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "2px" }}
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>

      {/* Actions row */}
      <div style={{ display: "flex", gap: "0.6rem", marginTop: "0.9rem" }}>
        <button
          onClick={() => dismiss("accepted")}
          className="btn-gold-metal"
          style={{
            flex: 1,
            padding: "0.55rem 1rem",
            borderRadius: "var(--radius-full)",
            fontWeight: 700,
            fontSize: "0.8rem",
            cursor: "pointer",
          }}
        >
          Accept All
        </button>
        <button
          onClick={() => dismiss("declined")}
          className="btn-liquid-glass"
          style={{
            flex: 1,
            padding: "0.55rem 1rem",
            borderRadius: "var(--radius-full)",
            fontWeight: 600,
            fontSize: "0.8rem",
            cursor: "pointer",
          }}
        >
          Essential Only
        </button>
      </div>
    </div>
  );
}
