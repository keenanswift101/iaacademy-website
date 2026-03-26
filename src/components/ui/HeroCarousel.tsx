"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─────────────────────────────────────────────
   Hero Carousel — 8 slides, auto-advance every 5s
   Background: real school photos go in /public/hero/
   Placeholders: warm tonal fills until client provides images.
───────────────────────────────────────────── */

const slides = [
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&h=1080&fit=crop&q=80",
    alt: "Students working together in a small classroom at IA Academy",
    label: "Small classes, focused learning",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=1080&fit=crop&q=80",
    alt: "A teacher working one-on-one with a student",
    label: "One-on-one attention for every learner",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&h=1080&fit=crop&q=80",
    alt: "Bright, welcoming classroom at IA Academy",
    label: "A safe, structured environment",
  },
  {
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1920&h=1080&fit=crop&q=80",
    alt: "Students engaged in a reading activity",
    label: "Cambridge curriculum, delivered with care",
  },
  {
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&h=1080&fit=crop&q=80",
    alt: "IA Academy campus grounds",
    label: "Our Windhoek campus",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&q=80",
    alt: "Students participating in arts and creativity",
    label: "Creative expression encouraged",
  },
  {
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1920&h=1080&fit=crop&q=80",
    alt: "Students enjoying outdoor learning time",
    label: "Learning beyond the classroom",
  },
  {
    src: "https://images.unsplash.com/photo-1560523159-4a9692d222ef?w=1920&h=1080&fit=crop&q=80",
    alt: "A calm, distraction-managed study space",
    label: "Calm spaces for focused minds",
  },
];



export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((idx: number) => {
    setActive((idx + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next, paused]);

  return (
    <section
      role="banner"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[88svh] flex-col items-center justify-center overflow-hidden text-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── SLIDE BACKGROUNDS ─────────────────── */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          aria-hidden={idx !== active}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: idx === active ? 1 : 0,
            zIndex: 0,
            backgroundImage: `url('${slide.src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#1e0030",
          }}
          role={idx === active ? "img" : undefined}
          aria-label={idx === active ? slide.alt : undefined}
        >
          {/* Dark purple gradient overlay — subdues photos */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, rgba(30,0,50,0.72) 0%, rgba(94,0,129,0.55) 45%, rgba(116,91,0,0.28) 100%)",
            }}
          />
        </div>
      ))}

      {/* ── CONTENT ───────────────────────────── */}
      <div
        className="relative px-6 py-20 mx-auto max-w-3xl"
        style={{ zIndex: 10, color: "#ffffff" }}
      >
        {/* School logo */}
        <div
          className="mx-auto mb-6 rounded-full flex items-center justify-center"
          style={{
            width: 200,
            height: 200,
            background: "#000000",
            border: "3px solid rgba(240,192,64,0.7)",
            boxShadow: "0 12px 60px rgba(0,0,0,0.6)",
          }}
        >
          <Image
            src="/logo-trns.png"
            alt="Innovative Academics Academy"
            width={168}
            height={168}
            className="object-contain"
            priority
          />
        </div>

        <p
          className="mb-3 text-sm font-semibold tracking-[0.18em] uppercase"
          style={{ color: "#f0c040" }}
        >
          Est. 2013 · Windhoek, Namibia
        </p>

        <h1
          id="hero-heading"
          className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
        >
          Innovative Academics
          <br />
          Academy
        </h1>

        <p
          className="mx-auto mb-10 max-w-xl text-lg leading-relaxed sm:text-xl"
          style={{ opacity: 0.88, textShadow: "0 1px 8px rgba(0,0,0,0.35)" }}
        >
          Where every child&apos;s story matters. A safe, small-class Cambridge
          school built for learners who need — and deserve — something different.
        </p>

        {/* Slide label — subtle caption */}
        <p
          className="mb-8 text-xs font-medium tracking-widest uppercase"
          style={{ color: "rgba(240,192,64,0.75)", letterSpacing: "0.2em" }}
          aria-live="polite"
          aria-atomic="true"
        >
          {slides[active].label}
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact/book-a-tour"
            className="inline-flex h-14 min-w-[180px] items-center justify-center rounded-full px-8 text-base font-semibold transition-all hover:scale-105 focus-visible:ring-2 focus-visible:ring-white btn-gold-metal"
            style={{ background: "#f0c040", color: "#1a1c1e" }}
          >
            Book a Tour
          </Link>
          <Link
            href="/about/our-approach"
            className="inline-flex h-14 min-w-[180px] items-center justify-center rounded-full px-8 text-base font-semibold focus-visible:ring-2 focus-visible:ring-white btn-liquid-glass-light"
          >
            Our Approach
          </Link>
        </div>
      </div>

      {/* ── DOT INDICATORS ────────────────────── */}
      <div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2"
        style={{
          zIndex: 30,
          background: "rgba(0,0,0,0.30)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          borderRadius: "9999px",
          padding: "10px 16px",
          border: "1px solid rgba(255,255,255,0.18)",
        }}
        role="tablist"
        aria-label="Slide indicators"
      >
        {slides.map((_, idx) => (
          <button
            key={idx}
            role="tab"
            aria-selected={idx === active}
            aria-label={`Go to slide ${idx + 1}: ${slides[idx].label}`}
            onClick={() => { goTo(idx); setPaused(true); }}
            className="transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            style={{
              width: idx === active ? "28px" : "10px",
              height: "10px",
              borderRadius: "9999px",
              background: idx === active ? "#ffffff" : "rgba(255,255,255,0.55)",
              border: idx === active ? "none" : "1px solid rgba(255,255,255,0.40)",
              boxShadow: idx === active ? "0 0 8px rgba(255,255,255,0.70)" : "none",
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      {/* ── PREV / NEXT ARROWS ────────────────── */}
      <button
        onClick={() => { prev(); setPaused(true); }}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm transition-all hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white md:left-8"
        style={{
          zIndex: 20,
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.25)",
          color: "#ffffff",
        }}
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
        </svg>
      </button>

      <button
        onClick={() => { next(); setPaused(true); }}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm transition-all hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white md:right-8"
        style={{
          zIndex: 20,
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.25)",
          color: "#ffffff",
        }}
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
      </button>

      {/* ── WAVE DIVIDER ──────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]"
        aria-hidden="true"
        style={{ zIndex: 20 }}
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[120px]"
          style={{ display: "block" }}
        >
          <defs>
            <linearGradient id="wave-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9c27b0" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#f9f9fc" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M0 120 C360 0 1080 0 1440 120 L1440 120 L0 120Z"
            fill="url(#wave-fade)"
          />
        </svg>
      </div>
    </section>
  );
}
