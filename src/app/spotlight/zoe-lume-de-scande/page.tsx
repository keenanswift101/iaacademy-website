import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Zoé Lumé de Scande — Rhythmic Gymnastics",
  description: "Zoé Lumé de Scande, Level 1 rhythmic gymnast and gold medallist at the 2026 Namibian Qualifying Competition in Walvis Bay.",
};

export default function ZoeLumeDeScandePage() {
  return (
    <>
      <PageHero
        label="Student Spotlight"
        title="Zoé Lumé de Scande"
        description="Rhythmic Gymnastics · Level 1 · Gold Medallist"
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
                Gold Medallist — Namibian 1st Qualifying Competition, Walvis Bay 2026
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-on-surface-variant)" }}>
                Standing proudly on the top step of the podium, Zoé Lumé de Scande claimed first place at the Namibian Rhythmic Gymnastics 1st Qualifying Competition in Walvis Bay. Competing at Level 1 in Free Dance and Ball, Zoé showed extraordinary focus, grace, and confidence for her age — and a love for gymnastics that is clearly just beginning to bloom.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "Level 1", label: "Competition Level" },
                  { value: "Gold", label: "Medal — Walvis Bay 2026" },
                  { value: "1st", label: "Place — Overall Finish" },
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
            <h3 className="text-lg font-bold mb-4" style={{ color: "var(--color-primary)" }}>The Competition</h3>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--color-on-surface)" }}>
              <strong>Namibian Rhythmic Gymnastics 1st Qualifying Competition</strong><br />
              Walvis Bay · 12 – 13 June 2026
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
              This milestone event brought gymnasts together from across Namibia. For Zoé, it was an opportunity to shine — and shine she did, taking the gold medal in her level and stepping onto the top of the podium with deserved pride. Her performance in Free Dance and Ball demonstrated both technical skill and the joy of the sport.
            </p>
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
            <p className="text-lg font-bold mb-2">Congratulations, Zoé!</p>
            <p className="text-sm opacity-80">
              A gold medal and first place finish is an incredible achievement. We are beaming with pride — the whole IA Academy family celebrates you today.
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
