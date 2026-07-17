"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Props {
  images: string[];
  title: string;
}

export default function NoticeImageCarousel({ images, title }: Props) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function goTo(index: number) {
    if (index === current) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 280);
  }

  useEffect(() => {
    if (images.length <= 1 || paused) return;
    timerRef.current = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFading(false);
      }, 280);
    }, 4000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [images.length, paused]);

  if (images.length === 0) return null;

  return (
    <div
      style={{ position: "relative", height: "300px", overflow: "hidden" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Images stacked — only active one is visible */}
      {images.map((src, i) => (
        <div
          key={src}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === current ? (fading ? 0 : 1) : 0,
            transition: "opacity 0.28s ease",
            pointerEvents: i === current ? "auto" : "none",
          }}
        >
          <Image
            src={src}
            alt={i === 0 ? title : ""}
            fill
            className="object-cover"
            style={{ objectPosition: "50% 30%" }}
            sizes="(max-width: 768px) 100vw, 672px"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Bottom gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.50) 0%, transparent 45%)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Photo counter — top right */}
      {images.length > 1 && (
        <span
          style={{
            position: "absolute",
            top: "12px",
            right: "14px",
            background: "rgba(0,0,0,0.55)",
            color: "#fff",
            fontSize: "11px",
            fontWeight: 600,
            padding: "3px 10px",
            borderRadius: "20px",
            backdropFilter: "blur(6px)",
            letterSpacing: "0.03em",
          }}
        >
          {current + 1} / {images.length}
        </span>
      )}

      {/* Dot indicators — bottom centre */}
      {images.length > 1 && (
        <div
          style={{
            position: "absolute",
            bottom: "14px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "6px",
            alignItems: "center",
          }}
          aria-hidden="true"
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? "20px" : "6px",
                height: "6px",
                borderRadius: "9999px",
                background: i === current ? "#fff" : "rgba(255,255,255,0.45)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.3s ease, background 0.2s ease",
              }}
              aria-label={`Photo ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
