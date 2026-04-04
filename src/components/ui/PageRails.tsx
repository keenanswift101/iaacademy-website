/**
 * PageRails — Organic decorative side curves
 *
 * Four+ meandering SVG cubic bezier paths per side, bolder strokes,
 * randomly scattered across the gutter for a lush editorial feel.
 * Left rail: purple metallic. Right rail: gold metallic.
 * Fixed position, z-index 0, pointer-events none.
 * Visible only on xl+ screens where real gutters exist.
 */
export default function PageRails() {
  return (
    <div
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}
      className="hidden md:block"
    >
      {/* ── LEFT — purple metallic organic curves ── */}
      <svg
        viewBox="0 0 80 1000"
        preserveAspectRatio="none"
        className="w-4.5 sm:w-6.5 md:w-9.5 lg:w-14.5 xl:w-[clamp(70px,8vw,120px)]"
        style={{
          position: "absolute",
          left: 6,
          top: 0,
          height: "100%",
          overflow: "visible",
        }}
      >
        <defs>
          {/* ─ gradient 1: bold primary — dark/highlight/dark ─ */}
          <linearGradient id="pg-l1" x1="0" y1="0" x2="0" y2="1000" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#5e0081" stopOpacity="0" />
            <stop offset="8%"   stopColor="#5e0081" stopOpacity="0.38" />
            <stop offset="25%"  stopColor="#d8a8f0" stopOpacity="0.34" />
            <stop offset="44%"  stopColor="#5e0081" stopOpacity="0.48" />
            <stop offset="62%"  stopColor="#c080e0" stopOpacity="0.36" />
            <stop offset="80%"  stopColor="#5e0081" stopOpacity="0.44" />
            <stop offset="94%"  stopColor="#d8a8f0" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#5e0081" stopOpacity="0" />
          </linearGradient>
          {/* ─ gradient 2: sheen companion ─ */}
          <linearGradient id="pg-l2" x1="0" y1="0" x2="0" y2="1000" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#e8c4ff" stopOpacity="0" />
            <stop offset="15%"  stopColor="#e8c4ff" stopOpacity="0.22" />
            <stop offset="48%"  stopColor="#9b30d0" stopOpacity="0.26" />
            <stop offset="80%"  stopColor="#e8c4ff" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#e8c4ff" stopOpacity="0" />
          </linearGradient>
          {/* ─ gradient 3: mid-body scattered curve ─ */}
          <linearGradient id="pg-l3" x1="0" y1="0" x2="0" y2="1000" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#7b00aa" stopOpacity="0" />
            <stop offset="12%"  stopColor="#7b00aa" stopOpacity="0.32" />
            <stop offset="38%"  stopColor="#cc88ee" stopOpacity="0.28" />
            <stop offset="65%"  stopColor="#7b00aa" stopOpacity="0.38" />
            <stop offset="88%"  stopColor="#cc88ee" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#7b00aa" stopOpacity="0" />
          </linearGradient>
          {/* ─ gradient 4: wispy accent ─ */}
          <linearGradient id="pg-l4" x1="0" y1="0" x2="0" y2="1000" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#bf7aff" stopOpacity="0" />
            <stop offset="20%"  stopColor="#bf7aff" stopOpacity="0.18" />
            <stop offset="55%"  stopColor="#5e0081" stopOpacity="0.20" />
            <stop offset="85%"  stopColor="#bf7aff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#bf7aff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ① Main bold meander — full height */}
        <path
          d="M 50 20
             C 10 110, 75 220, 28 355
             C  2 465, 72 568, 22 700
             C  2 802, 70 890, 44 980"
          fill="none" stroke="url(#pg-l1)" strokeWidth="3.0" strokeLinecap="round"
        />
        {/* ② Sheen companion — phase-shifted inward */}
        <path
          d="M 60 20
             C 18 135, 68 248, 46 380
             C 16 495, 68 594, 36 722
             C 12 822, 66 908, 52 980"
          fill="none" stroke="url(#pg-l2)" strokeWidth="2.0" strokeLinecap="round"
        />
        {/* ③ Scattered mid-body curve — starts inward, wanders more widely */}
        <path
          d="M 24 60
             C 72 168, 8 285, 68 422
             C 78 515, 16 622, 70 752
             C 78 845, 20 930, 62 990"
          fill="none" stroke="url(#pg-l3)" strokeWidth="2.4" strokeLinecap="round"
        />
        {/* ④ Short wispy accent — upper-to-mid section only */}
        <path
          d="M 66 150
             C 28 245, 74 345, 30 468
             C 10 562, 72 652, 26 768"
          fill="none" stroke="url(#pg-l4)" strokeWidth="1.5" strokeLinecap="round"
        />
        {/* ⑤ Deep lower accent — bottom third only */}
        <path
          d="M 14 580
             C 62 655, 8 736, 58 816
             C 76 876, 18 935, 60 990"
          fill="none" stroke="url(#pg-l3)" strokeWidth="1.8" strokeLinecap="round"
        />
      </svg>

      {/* ── RIGHT — gold metallic organic curves ── */}
      <svg
        viewBox="0 0 80 1000"
        preserveAspectRatio="none"
        className="block w-4.5 sm:w-6.5 md:w-9.5 lg:w-14.5 xl:w-[clamp(70px,8vw,120px)]"
        style={{
          position: "absolute",
          right: 6,
          top: 0,
          height: "100%",
          overflow: "visible",
        }}
      >
        <defs>
          {/* ─ gradient 1: bold primary gold ─ */}
          <linearGradient id="pg-r1" x1="0" y1="0" x2="0" y2="1000" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#a07800" stopOpacity="0" />
            <stop offset="10%"  stopColor="#a07800" stopOpacity="0.36" />
            <stop offset="28%"  stopColor="#f0c040" stopOpacity="0.32" />
            <stop offset="48%"  stopColor="#a07800" stopOpacity="0.44" />
            <stop offset="66%"  stopColor="#f0c040" stopOpacity="0.30" />
            <stop offset="84%"  stopColor="#a07800" stopOpacity="0.40" />
            <stop offset="100%" stopColor="#a07800" stopOpacity="0" />
          </linearGradient>
          {/* ─ gradient 2: bright gold sheen ─ */}
          <linearGradient id="pg-r2" x1="0" y1="0" x2="0" y2="1000" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#ffe090" stopOpacity="0" />
            <stop offset="18%"  stopColor="#ffe090" stopOpacity="0.22" />
            <stop offset="50%"  stopColor="#b88a00" stopOpacity="0.26" />
            <stop offset="82%"  stopColor="#ffe090" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#ffe090" stopOpacity="0" />
          </linearGradient>
          {/* ─ gradient 3: scattered mid gold ─ */}
          <linearGradient id="pg-r3" x1="0" y1="0" x2="0" y2="1000" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#c89600" stopOpacity="0" />
            <stop offset="10%"  stopColor="#c89600" stopOpacity="0.30" />
            <stop offset="35%"  stopColor="#f5d060" stopOpacity="0.26" />
            <stop offset="62%"  stopColor="#c89600" stopOpacity="0.36" />
            <stop offset="88%"  stopColor="#f5d060" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#c89600" stopOpacity="0" />
          </linearGradient>
          {/* ─ gradient 4: wispy pale gold ─ */}
          <linearGradient id="pg-r4" x1="0" y1="0" x2="0" y2="1000" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#ffedb0" stopOpacity="0" />
            <stop offset="22%"  stopColor="#ffedb0" stopOpacity="0.16" />
            <stop offset="55%"  stopColor="#a07800" stopOpacity="0.18" />
            <stop offset="85%"  stopColor="#ffedb0" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#ffedb0" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ① Main bold mirror S-curve — full height */}
        <path
          d="M 30 20
             C 70 110, 5 225, 52 355
             C 78 468, 8 572, 58 700
             C 78 802, 10 888, 36 980"
          fill="none" stroke="url(#pg-r1)" strokeWidth="3.0" strokeLinecap="round"
        />
        {/* ② Sheen companion */}
        <path
          d="M 20 20
             C 62 138, 12 252, 34 382
             C 64 498, 12 590, 44 714
             C 68 818, 14 900, 28 980"
          fill="none" stroke="url(#pg-r2)" strokeWidth="2.0" strokeLinecap="round"
        />
        {/* ③ Scattered mid-body curve — wider swing outward */}
        <path
          d="M 56 60
             C 8 158, 72 278, 12 412
             C  2 508, 64 612, 10 744
             C  2 838, 60 924, 18 990"
          fill="none" stroke="url(#pg-r3)" strokeWidth="2.4" strokeLinecap="round"
        />
        {/* ④ Short wispy accent — upper-to-mid section */}
        <path
          d="M 14 150
             C 52 248, 6 348, 50 468
             C 70 562, 8 655, 54 768"
          fill="none" stroke="url(#pg-r4)" strokeWidth="1.5" strokeLinecap="round"
        />
        {/* ⑤ Deep lower accent — bottom third */}
        <path
          d="M 66 580
             C 18 655, 72 732, 22 814
             C  4 876, 62 934, 20 990"
          fill="none" stroke="url(#pg-r3)" strokeWidth="1.8" strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
