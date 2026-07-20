import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Zoé Lumé de Scande — Rhythmic Gymnastics",
  description: "Zoé Lumé de Scande, Level 1 rhythmic gymnast and back-to-back gold medallist at the 2026 Namibian Qualifying Competition and WRC Inter-Club Competition.",
};

export default function ZoeLumeDeScandePage() {
  return (
    <>
      <PageHero
        label="Student Spotlight"
        title="Zoé Lumé de Scande"
        description="Rhythmic Gymnastics · Level 1 · Back-to-Back Gold Medallist"
        breadcrumb={[
          { label: "Student Spotlight", href: "/spotlight" },
          { label: "Zoé Lumé de Scande", href: "/spotlight/zoe-lume-de-scande" },
        ]}
      />

      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-4xl">

          {/* Hero card */}
          <div
            className="rounded-2xl overflow-hidden flex flex-col sm:flex-row mb-12"
            style={{ background: "var(--color-surface-container-lowest)", boxShadow: "var(--shadow-ambient)", border: "1px solid rgba(94,0,129,0.18)" }}
          >
            <div className="relative w-full sm:w-80 shrink-0 overflow-hidden" style={{ minHeight: "420px" }}>
              <Image
                src="/images/sports/gymnastics/gymnastics_1.png"
                alt="Zoé Lumé de Scande on the podium in first place at the Namibian Rhythmic Gymnastics Qualifying Competition"
                fill
                className="object-cover"
                style={{ objectPosition: "50% 55%" }}
                sizes="(max-width: 640px) 100vw, 320px"
                priority
              />
            </div>
            <div className="flex-1 p-8">
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--color-primary)" }}>
                Rhythmic Gymnastics · Level 1
              </p>
              <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--color-on-surface)" }}>Zoé Lumé de Scande</h2>
              <p className="text-sm font-semibold mb-4" style={{ color: "#b8860b" }}>
                Back-to-Back Gold — Walvis Bay June 2026 &amp; WRC Inter-Club July 2026
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-on-surface-variant)" }}>
                Zoé Lumé de Scande has claimed gold at two competitions in 2026 — first at the Namibian 1st Qualifying Competition in Walvis Bay (June 2026), and again at the WRC Inter-Club Competition (July 2026). Competing at Level 1 in Free Dance and Ball, Zoé shows extraordinary focus, grace, and confidence — and a love for gymnastics that is clearly just beginning to bloom.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "Level 1", label: "Competition Level" },
                  { value: "2× Gold", label: "Medals — 2026 Season" },
                  { value: "1st", label: "Place — Both Competitions" },
                ].map(({ value, label }) => (
                  <div key={label} className="rounded-xl p-4 text-center" style={{ background: "rgba(240,192,64,0.12)" }}>
                    <p className="text-xl font-bold mb-1" style={{ color: "#7a5c00" }}>{value}</p>
                    <p className="text-xs leading-snug" style={{ color: "var(--color-on-surface-variant)" }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Competition detail */}
          <div
            className="rounded-2xl p-8 mb-10"
            style={{
              background: "linear-gradient(135deg, rgba(240,192,64,0.10) 0%, rgba(94,0,129,0.06) 100%)",
              border: "1px solid rgba(240,192,64,0.30)",
            }}
          >
            <h3 className="text-lg font-bold mb-6" style={{ color: "var(--color-primary)" }}>2026 Season Results</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>
                  🥇 WRC Inter-Club Competition · July 2026
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
                  Gold at the Windhoek Rhythmic Club Inter-Club Competition — Zoé's second gold of the season and proof that her first win was no fluke. A dominant, consistent performance at the top of her level.
                </p>
              </div>
              <div style={{ borderTop: "1px solid rgba(240,192,64,0.30)", paddingTop: "1rem" }}>
                <p className="text-sm font-semibold mb-1" style={{ color: "var(--color-on-surface)" }}>
                  🥇 Namibian 1st Qualifying Competition · Walvis Bay · 12 – 13 June 2026
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
                  Gold medal in Free Dance and Ball — Zoé stepped onto the top of the podium with deserved pride at her first major national event.
                </p>
              </div>
            </div>
          </div>

          {/* WRC photo */}
          <div className="mb-10">
            <h3 className="text-lg font-bold mb-5" style={{ color: "var(--color-on-surface)" }}>WRC Inter-Club Competition — July 2026</h3>
            <div className="overflow-hidden rounded-2xl" style={{ boxShadow: "var(--shadow-ambient)", border: "1px solid rgba(240,192,64,0.30)" }}>
              <Image
                src="/images/sports/gymnastics/gymnastics_8.jpeg"
                alt="Zoé Lumé de Scande — Gold at the WRC Inter-Club Competition podium, July 2026"
                width={1280}
                height={720}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Apparatus */}
          <div className="mb-10">
            <h3 className="text-lg font-bold mb-5" style={{ color: "var(--color-on-surface)" }}>Apparatus</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Free Dance", "Ball"].map((apparatus) => (
                <div
                  key={apparatus}
                  className="rounded-xl p-5 text-center font-semibold text-sm"
                  style={{
                    background: "var(--color-surface-container-lowest)",
                    border: "1px solid rgba(240,192,64,0.30)",
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
            style={{ background: "linear-gradient(135deg, #f0c040 0%, #c89a00 100%)", color: "#1a1c1e" }}
          >
            <p className="text-lg font-bold mb-2">Back-to-back gold — Congratulations, Zoé!</p>
            <p className="text-sm opacity-80">
              Two competitions, two gold medals. The whole IA Academy family is beaming with pride — keep shining, Zoé!
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
