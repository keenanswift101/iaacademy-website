"use client";

import Link from "next/link";

const NEW_COUNT = 2;

export default function RecentEventsDrawer() {
  return (
    <>
      <style>{`
        @keyframes iae-badge-pulse {
          0%, 100% { box-shadow: 0 2px 8px rgba(240,192,64,0.5); }
          50%       { box-shadow: 0 2px 18px rgba(240,192,64,0.9); }
        }
        .iae-badge { animation: iae-badge-pulse 2s ease-in-out infinite; }
        .iae-events-link:hover {
          background: linear-gradient(135deg, #7a00a8 0%, #5e0081 100%) !important;
          box-shadow: -6px 0 32px rgba(94,0,129,0.6) !important;
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 45,
        }}
      >
        <Link
          href="/notice-board"
          className="iae-events-link"
          aria-label="View recent events on the notice board"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "linear-gradient(135deg, #5e0081 0%, #8b00bf 100%)",
            color: "#fff",
            textDecoration: "none",
            padding: "14px 16px 14px 20px",
            borderRadius: "14px 0 0 14px",
            boxShadow: "-4px 0 24px rgba(94,0,129,0.45)",
            whiteSpace: "nowrap",
            transition: "background 0.2s ease, box-shadow 0.2s ease",
          }}
        >
          <span style={{ fontSize: "16px", lineHeight: 1 }} aria-hidden="true">📅</span>
          <span style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.04em" }}>
            Events
          </span>
          {NEW_COUNT > 0 && (
            <span
              className="iae-badge"
              style={{
                background: "#f0c040",
                color: "#1a1c1e",
                fontSize: "10px",
                fontWeight: 800,
                padding: "3px 8px",
                borderRadius: "20px",
                letterSpacing: "0.05em",
                flexShrink: 0,
              }}
            >
              {NEW_COUNT} New
            </span>
          )}
        </Link>
      </div>
    </>
  );
}
