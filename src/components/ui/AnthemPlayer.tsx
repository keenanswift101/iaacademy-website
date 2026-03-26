"use client";

import { useRef, useState, useEffect } from "react";

export default function AnthemPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onMeta = () => { setDuration(a.duration); setLoaded(true); };
    const onTime = () => setProgress(a.currentTime);
    const onEnd = () => { setPlaying(false); setProgress(0); };
    a.addEventListener("loadedmetadata", onMeta);
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("ended", onEnd);
    return () => {
      a.removeEventListener("loadedmetadata", onMeta);
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) { a.pause(); setPlaying(false); }
    else { a.play(); setPlaying(true); }
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = audioRef.current;
    if (!a || !duration) return;
    const val = Number(e.target.value);
    a.currentTime = val;
    setProgress(val);
  };

  const fmt = (s: number) => {
    if (!isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  const pct = duration > 0 ? (progress / duration) * 100 : 0;

  return (
    <div
      className="mx-auto w-full max-w-lg rounded-2xl p-6"
      style={{
        background: "linear-gradient(135deg, rgba(94,0,129,0.10) 0%, rgba(240,192,64,0.08) 100%)",
        border: "1px solid rgba(94,0,129,0.20)",
        boxShadow: "0 20px 40px rgba(94,0,129,0.08)",
        backdropFilter: "blur(8px)",
      }}
    >
      <audio ref={audioRef} src="/anthem.mp3" preload="metadata">
        <track kind="captions" label="IA Academy School Anthem" />
      </audio>

      {/* Label */}
      <div className="mb-4 flex items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
          style={{ background: "var(--color-primary)" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={18} height={18} aria-hidden="true" style={{ color: "#fff" }}>
            <path d="M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm12-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          </svg>
        </div>
        <div>
          <p className="text-sm font-bold leading-tight" style={{ color: "var(--color-on-surface)" }}>
            IA Academy Anthem
          </p>
          <p className="text-xs" style={{ color: "var(--color-on-surface-variant)" }}>
            Est. 2013 · Windhoek, Namibia
          </p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-3 relative">
        {/* Track background */}
        <div
          className="h-1.5 w-full overflow-hidden rounded-full"
          style={{ background: "rgba(94,0,129,0.15)" }}
        >
          <div
            className="h-full rounded-full transition-all"
            style={{
              width: `${pct}%`,
              background: "linear-gradient(90deg, var(--color-primary), var(--color-gold))",
            }}
          />
        </div>
        {/* Seek input — invisible overlay */}
        <input
          type="range"
          min={0}
          max={duration || 100}
          value={progress}
          onChange={seek}
          disabled={!loaded}
          aria-label="Seek through anthem"
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        />
      </div>

      {/* Time + Controls */}
      <div className="flex items-center justify-between">
        <span className="text-xs tabular-nums" style={{ color: "var(--color-on-surface-variant)" }}>
          {fmt(progress)}
        </span>

        {/* Play / Pause */}
        <button
          onClick={toggle}
          aria-label={playing ? "Pause anthem" : "Play anthem"}
          className="flex h-12 w-12 items-center justify-center rounded-full transition-all hover:scale-105 focus-visible:ring-2 focus-visible:ring-offset-2"
          style={{
            background: "var(--color-primary)",
            color: "#fff",
            boxShadow: "0 8px 24px rgba(94,0,129,0.35)",
          }}
        >
          {playing ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={20} height={20} aria-hidden="true">
              <path d="M6 4h4v16H6zm8 0h4v16h-4z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={20} height={20} aria-hidden="true">
              <path d="M5 3l14 9-14 9V3z"/>
            </svg>
          )}
        </button>

        <span className="text-xs tabular-nums" style={{ color: "var(--color-on-surface-variant)" }}>
          {fmt(duration)}
        </span>
      </div>
    </div>
  );
}
