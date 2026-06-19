import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Hayley du Toit — Rhythmic Gymnastics",
  description: "Hayley du Toit, Level 6 rhythmic gymnast and silver medallist at the 2026 Namibian Qualifying Competition in Walvis Bay.",
};

export default function HayleyDuToitPage() {
  return (
    <>
      <PageHero
        label="Student Spotlight"
        title="Hayley du Toit"
        description="Rhythmic Gymnastics · Level 6 · Silver Medallist"
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
                Silver Medallist — Namibian 1st Qualifying Competition, Walvis Bay 2026
              </p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-on-surface-variant)" }}>
                Competing at Level 6 — one of the most demanding levels in Namibian rhythmic gymnastics — Hayley took home the silver medal at the inaugural Namibian Rhythmic Gymnastics Qualifying Competition. Her routines in Free Dance, Ribbon, and Rope showcased the discipline, elegance, and hard work she brings to every training session and performance.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "Level 6", label: "Competition Level" },
                  { value: "Silver", label: "Medal — Walvis Bay 2026" },
                  { value: "3", label: "Apparatus (Dance, Ribbon, Rope)" },
                ].map(({ value, label }) => (
                  <div key={label} className="rounded-xl p-4 text-center" style={{ background: "rgba(94,0,129,0.07)" }}>
                    <p className="text-xl font-bold mb-1" style={{ color: "var(--color-primary)" }}>{value}</p>
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
              background: "linear-gradient(135deg, rgba(94,0,129,0.08) 0%, rgba(240,192,64,0.06) 100%)",
              border: "1px solid rgba(94,0,129,0.18)",
            }}
          >
            <h3 className="text-lg font-bold mb-4" style={{ color: "var(--color-primary)" }}>The Competition</h3>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--color-on-surface)" }}>
              <strong>Namibian Rhythmic Gymnastics 1st Qualifying Competition</strong><br />
              Walvis Bay · 12 – 13 June 2026
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
              This qualifying competition brought together gymnasts from across Namibia, with athletes required to participate to advance in the national gymnastics programme. Hayley rose to the occasion at Level 6, earning her silver medal across three apparatus disciplines — a testament to her versatility and technical skill.
            </p>
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
              A silver medal at Level 6 is an outstanding achievement. IA Academy stands behind you every step of the way.
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
