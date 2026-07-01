import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Football — IA Academy vs Parkies Primary School 2026",
  description: "IA Academy Private School took on Parkies Primary School in a two-game football fixture on 30 June 2026. Game 1 win 2–1, Game 2 loss 1–3.",
};

export default function FootballVsParkiesPage() {
  return (
    <>
      <PageHero
        label="Student Spotlight"
        title="Football vs Parkies Primary School"
        description="IA Academy PS · 30 June 2026"
        breadcrumb={[
          { label: "Student Spotlight", href: "/spotlight" },
          { label: "Football vs Parkies 2026", href: "/spotlight/football-vs-parkies-2026" },
        ]}
      />

      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-4xl">

          {/* Match poster */}
          <div
            className="rounded-2xl overflow-hidden mb-12"
            style={{ boxShadow: "var(--shadow-ambient)", border: "1px solid rgba(94,0,129,0.18)" }}
          >
            <Image
              src="/images/sports/soccer_match1.png"
              alt="IA Academy PS vs Parkies Primary School — Football Match 30 June 2026"
              width={900}
              height={1125}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </div>

          {/* Results */}
          <h3 className="text-lg font-bold mb-5" style={{ color: "var(--color-on-surface)" }}>Match Results</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {/* Game 1 — Win */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(26,115,64,0.10) 0%, rgba(26,115,64,0.05) 100%)",
                border: "1px solid rgba(26,115,64,0.30)",
              }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#1a7340" }}>Game 1 — Win</p>
              <p className="text-4xl font-black mb-1" style={{ color: "var(--color-on-surface)" }}>2 – 1</p>
              <p className="text-sm font-semibold" style={{ color: "var(--color-on-surface-variant)" }}>IA Academy PS vs Parkies PS</p>
              <span
                className="inline-block mt-3 rounded-full px-3 py-1 text-xs font-bold"
                style={{ background: "rgba(26,115,64,0.15)", color: "#1a7340" }}
              >
                Victory
              </span>
            </div>

            {/* Game 2 — Loss */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(94,0,129,0.08) 0%, rgba(94,0,129,0.04) 100%)",
                border: "1px solid rgba(94,0,129,0.20)",
              }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--color-primary)" }}>Game 2 — Loss</p>
              <p className="text-4xl font-black mb-1" style={{ color: "var(--color-on-surface)" }}>1 – 3</p>
              <p className="text-sm font-semibold" style={{ color: "var(--color-on-surface-variant)" }}>IA Academy PS vs Parkies PS</p>
              <span
                className="inline-block mt-3 rounded-full px-3 py-1 text-xs font-bold"
                style={{ background: "rgba(94,0,129,0.10)", color: "var(--color-primary)" }}
              >
                Defeat
              </span>
            </div>
          </div>

          {/* Match summary */}
          <div
            className="rounded-2xl p-8 mb-10"
            style={{
              background: "linear-gradient(135deg, rgba(94,0,129,0.08) 0%, rgba(240,192,64,0.06) 100%)",
              border: "1px solid rgba(94,0,129,0.18)",
            }}
          >
            <h3 className="text-lg font-bold mb-4" style={{ color: "var(--color-primary)" }}>About the Match</h3>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--color-on-surface)" }}>
              <strong>IA Academy Private School vs Parkies Primary School</strong><br />
              30 June 2026 · 15h30
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
              Our football team put in a tremendous effort across two hard-fought games against Parkies Primary School. A strong first game saw IA Academy claim victory 2–1, showcasing great teamwork and determination. The second game was a tough battle, ending 1–3 — but our players gave everything on the pitch and represented the school with pride.
            </p>
          </div>

          {/* Pride message */}
          <div
            className="rounded-2xl p-8 text-center"
            style={{ background: "var(--color-primary)", color: "#fff" }}
          >
            <p className="text-lg font-bold mb-2">Well played, IA Academy!</p>
            <p className="text-sm opacity-80">
              Win or lose, every player who wore the purple shirt represented our school with heart. We are proud of each and every one of you.
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
