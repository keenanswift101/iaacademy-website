import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Hayley du Toit — Rhythmic Gymnastics",
  description: "Hayley du Toit, Level 6 rhythmic gymnast, silver medallist at the 2026 Namibian Qualifying Competitions, and selected to represent Namibia at the SA National Competition in Cape Town, September 2026.",
};

export default function HayleyDuToitPage() {
  return (
    <>
      <PageHero
        label="Student Spotlight"
        title="Hayley du Toit"
        description="Rhythmic Gymnastics · Level 6 · Silver Medallist · SA Nationals 2026"
        breadcrumb={[
          { label: "Student Spotlight", href: "/spotlight" },
          { label: "Hayley du Toit", href: "/spotlight/hayley-du-toit" },
        ]}
      />

      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-4xl">

          {/* Hero card */}
          <div
            className="rounded-2xl overflow-hidden flex flex-col sm:flex-row mb-12"
            style={{ background: "var(--color-surface-container-lowest)", boxShadow: "var(--shadow-ambient)", border: "1px solid rgba(94,0,129,0.18)" }}
          >
            <div className="relative w-full sm:w-80 shrink-0 overflow-hidden" style={{ minHeight: "340px" }}>
              <Image
                src="/images/sports/gymnastics/gymnastics_2.png"
                alt="Hayley du Toit holding her silver medal certificate at the Namibian Rhythmic Gymnastics Qualifying Competition"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 320px"
                priority
              />
            </div>
            <div className="flex-1 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--color-primary)" }}>
                Rhythmic Gymnastics · Level 6
              </p>
              <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--color-on-surface)" }}>Hayley du Toit</h2>
              <p className="text-sm font-semibold mb-4" style={{ color: "#7a5c00" }}>
                Silver Medallist — Namibian 1st Qualifying Competition &amp; WRC Inter-Club Competition 2026
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-on-surface-variant)" }}>
                Competing at Level 6 — one of the most demanding levels in Namibian rhythmic gymnastics — Hayley has claimed silver medals at both the Namibian 1st Qualifying Competition in Walvis Bay (June 2026) and the WRC Inter-Club Competition (July 2026). Her consistency at the highest level earned her selection to represent her team at the South African national competition in Cape Town in September 2026.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "Level 6", label: "Competition Level" },
                  { value: "2× Silver", label: "Medals — 2026 Season" },
                  { value: "SA 2026", label: "Cape Town — Sep 2026" },
                ].map(({ value, label }) => (
                  <div key={label} className="rounded-xl p-4 text-center" style={{ background: "rgba(94,0,129,0.07)" }}>
                    <p className="text-xl font-bold mb-1" style={{ color: "var(--color-primary)" }}>{value}</p>
                    <p className="text-xs leading-snug" style={{ color: "var(--color-on-surface-variant)" }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SA Selection callout */}
          <div
            className="rounded-2xl p-8 mb-10"
            style={{
              background: "linear-gradient(135deg, #f0c040 0%, #c89a00 100%)",
              color: "#1a1c1e",
            }}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ opacity: 0.65 }}>Breaking News</p>
            <h3 className="text-xl font-bold mb-2">Hayley selected for SA Nationals — Cape Town, September 2026</h3>
            <p className="text-sm leading-relaxed" style={{ opacity: 0.85 }}>
              Following her outstanding performances in the 2026 competition season, Hayley has been selected to represent her team at the South African national rhythmic gymnastics competition in Cape Town in September 2026. This is a remarkable achievement and a proud milestone for IA Academy. We could not be more excited for her!
            </p>
          </div>

          {/* Competition detail */}
          <div
            className="rounded-2xl p-8 mb-10"
            style={{
              background: "linear-gradient(135deg, rgba(94,0,129,0.08) 0%, rgba(240,192,64,0.06) 100%)",
              border: "1px solid rgba(94,0,129,0.18)",
            }}
          >
            <h3 className="text-lg font-bold mb-6" style={{ color: "var(--color-primary)" }}>2026 Season Results</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>
                  🥈 WRC Inter-Club Competition · July 2026
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
                  Silver medal at the Windhoek Rhythmic Club Inter-Club Competition — Hayley's second silver of the season, confirming her as one of Namibia's most consistent Level 6 competitors.
                </p>
              </div>
              <div style={{ borderTop: "1px solid rgba(94,0,129,0.12)", paddingTop: "1rem" }}>
                <p className="text-sm font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>
                  🥈 Namibian 1st Qualifying Competition · Walvis Bay · 12 – 13 June 2026
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
                  Silver medal across three apparatus disciplines (Free Dance, Ribbon, Rope) at the inaugural national qualifying competition — a testament to her versatility and technical skill.
                </p>
              </div>
            </div>
          </div>

          {/* Photo strip — July 2026 competition */}
          <div className="mb-10">
            <h3 className="text-lg font-bold mb-5" style={{ color: "var(--color-on-surface)" }}>WRC Inter-Club Competition — July 2026</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { src: "/images/sports/gymnastics/gymnastics_5.jpeg", alt: "Hayley du Toit on the podium — Silver, WRC Inter-Club Competition, July 2026" },
                { src: "/images/sports/gymnastics/gymnastics_7.jpeg", alt: "Hayley du Toit with her WRC Inter-Club certificate and medal, July 2026" },
                { src: "/images/sports/gymnastics/gymnastics_6.jpeg", alt: "Hayley du Toit smiling with her silver medal, WRC Inter-Club Competition, July 2026" },
              ].map(({ src, alt }) => (
                <div key={src} className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4", boxShadow: "var(--shadow-ambient)", border: "1px solid rgba(94,0,129,0.15)" }}>
                  <Image src={src} alt={alt} fill className="object-cover object-top" sizes="(max-width: 640px) 33vw, 25vw" />
                </div>
              ))}
            </div>
          </div>

          {/* Apparatus */}
          <div className="mb-10">
            <h3 className="text-lg font-bold mb-5" style={{ color: "var(--color-on-surface)" }}>Apparatus</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {["Free Dance", "Ribbon", "Rope"].map((apparatus) => (
                <div
                  key={apparatus}
                  className="rounded-xl p-5 text-center font-semibold text-sm"
                  style={{
                    background: "var(--color-surface-container-lowest)",
                    border: "1px solid rgba(94,0,129,0.18)",
                    color: "var(--color-on-surface)",
                    boxShadow: "var(--shadow-ambient)",
                  }}
                >
                  {apparatus}
                </div>
              ))}
            </div>
          </div>

          {/* Pride message */}
          <div
            className="rounded-2xl p-8 text-center"
            style={{ background: "var(--color-primary)", color: "#fff" }}
          >
            <p className="text-lg font-bold mb-2">We are so proud of you, Hayley!</p>
            <p className="text-sm opacity-80">
              Two silver medals, a place at SA Nationals in Cape Town — Hayley, IA Academy stands behind you every step of the way. Go show South Africa what you are made of!
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-8 text-center" style={{ background: "var(--color-surface-container-low)" }}>
        <Link
          href="/spotlight"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-75"
          style={{ color: "var(--color-primary)" }}
        >
          ← Back to Student Spotlight
        </Link>
      </section>
    </>
  );
}
