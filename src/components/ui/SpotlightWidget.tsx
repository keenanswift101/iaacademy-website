"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const slides = [
  { src: "/images/sports/soccer_match1.png", objectPosition: "50% 50%", contain: true },
  { src: "/images/sports/gymnastics/gymnastics_3.png", objectPosition: "20% 30%", contain: false },
  { src: "/images/sports/gymnastics/gymnastics_1.png", objectPosition: "50% 22%", contain: false },
  { src: "/images/sports/gymnastics/gymnastics_4.png", objectPosition: "50% 25%", contain: false },
  { src: "/images/sports/gymnastics/gymnastics_2.png", objectPosition: "50% 15%", contain: false },
];

export default function SpotlightWidget() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startCycling() {
    intervalRef.current = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFading(false);
      }, 200);
    }, 1200);
  }

  function stopCycling() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setFading(true);
    setTimeout(() => {
      setCurrent(0);
      setFading(false);
    }, 200);
  }

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current); }, []);

  return (
    <Link
      href="/spotlight"
      className="group rounded-2xl overflow-hidden flex flex-col"
      style={{ background: "var(--color-surface-container-lowest)", boxShadow: "var(--shadow-ambient)", border: "1px solid rgba(94,0,129,0.20)" }}
      onMouseEnter={startCycling}
      onMouseLeave={stopCycling}
    >
      <div
        className="relative aspect-4/3 w-full overflow-hidden"
        style={{ background: slides[current].contain ? "#1a0a2e" : undefined }}
      >
        <Image
          src={slides[current].src}
          alt="IA Academy sport highlights 2026"
          fill
          className={`${slides[current].contain ? "object-contain" : "object-cover"} group-hover:scale-105`}
          style={{
            objectPosition: slides[current].objectPosition,
            opacity: fading ? 0 : 1,
            transition: "opacity 0.2s ease, transform 0.5s ease",
          }}
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)" }} aria-hidden="true" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <span className="rounded-full px-3 py-1 text-xs font-bold" style={{ background: "rgba(240,192,64,0.92)", color: "#1a1c1e" }}>Student Spotlight</span>
        </div>
        {/* Dot indicators */}
        <div className="absolute bottom-4 right-4 flex gap-1.5" aria-hidden="true">
          {slides.map((_, i) => (
            <span
              key={i}
              style={{
                width: i === current ? "16px" : "6px",
                height: "6px",
                borderRadius: "9999px",
                background: i === current ? "#fff" : "rgba(255,255,255,0.45)",
                transition: "width 0.3s ease, background 0.2s ease",
                display: "block",
              }}
            />
          ))}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold" style={{ color: "var(--color-on-surface)" }}>IA Academy in Action</h2>
          <span className="text-sm font-semibold transition-colors group-hover:opacity-80" style={{ color: "var(--color-primary)" }}>Read more →</span>
        </div>
        <p className="text-xs font-semibold mb-3 uppercase tracking-wide" style={{ color: "var(--color-primary)" }}>Sport · June 2026</p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
          Football vs Parkies PS — Win 2–1, Loss 1–3 · Gymnastics gold for Zoé &amp; silver for Hayley at the Namibian Qualifying Competition, Walvis Bay.
        </p>
      </div>
    </Link>
  );
}
