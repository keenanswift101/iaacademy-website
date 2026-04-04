import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AnthemPlayer from "@/components/ui/AnthemPlayer";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Learn about how Innovative Academics Academy was founded and our mission to support every child's unique learning journey in Windhoek, Namibia.",
};

const milestones = [
  { year: "2013", title: "Founded", desc: "Innovative Academics Academy opened its doors in Windhoek, Namibia — built on the belief that every child deserves an education tailored to how they learn." },
  { year: "Today", title: "95 Students Strong", desc: "We remain intentionally small. With 95 students across Grade R to Grade 12 and a maximum of 10 learners per grade, every child is truly known." },
  { year: "Ongoing", title: "Namibian Curriculum", desc: "We deliver the Namibian Curriculum, providing internationally recognised qualifications with a supportive, accessible approach." },
];

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Our Story"
        description="How Innovative Academics Academy came to be — and why every decision we make starts with the child."
        breadcrumb={[{ label: "Our Story", href: "/about/our-story" }]}
      />

      {/* Founding story */}
      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
          <p className="text-lg" style={{ color: "var(--color-on-surface)" }}>
            Innovative Academics Academy was established in <strong>2013</strong> in Windhoek, Namibia, with a simple but powerful conviction: children who learn differently deserve a school that teaches differently.
          </p>
          <p>
            From the very beginning, we built everything around the individual learner. Small classes. Structured routines. A calm, distraction-managed environment. And educators who genuinely understand ADHD, ADD, Dyslexia, and slow learning — not as limitations, but as different ways of being brilliant.
          </p>
          <p>
            Today we are home to <strong>95 students</strong> across Grade R through Grade 12. We have grown — but never beyond what allows us to know every child by name, by story, and by strength.
          </p>
        </div>
      </section>

      {/* Milestones */}
      <section className="px-6 py-12" style={{ background: "var(--color-surface-container-low)" }}>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-2xl font-bold" style={{ color: "var(--color-on-surface)" }}>Key Milestones</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {milestones.map(({ year, title, desc }) => (
              <div
                key={year}
                className="rounded-2xl p-6"
                style={{ background: "linear-gradient(135deg, rgba(94,0,129,0.10) 0%, rgba(240,192,64,0.07) 100%)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(94,0,129,0.20)", borderTop: "3px solid var(--color-gold)", boxShadow: "0 8px 32px rgba(94,0,129,0.10), inset 0 1px 0 rgba(255,255,255,0.55)" }}
              >
                <p className="text-2xl font-bold mb-1" style={{ color: "var(--color-primary)" }}>{year}</p>
                <p className="font-semibold mb-2" style={{ color: "var(--color-on-surface)" }}>{title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold tracking-[0.16em] uppercase" style={{ color: "var(--color-primary)" }}>
              Who We Are
            </p>
            <h2 className="text-3xl font-bold" style={{ color: "var(--color-on-surface)" }}>
              Our Vision &amp; Mission
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Vision */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: "linear-gradient(135deg, rgba(94,0,129,0.12) 0%, rgba(240,192,64,0.06) 100%)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(94,0,129,0.22)",
                borderTop: "3px solid var(--color-primary)",
                boxShadow: "0 8px 32px rgba(94,0,129,0.10), inset 0 1px 0 rgba(255,255,255,0.55)",
              }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "rgba(94,0,129,0.10)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" width={24} height={24} aria-hidden="true" style={{ color: "var(--color-primary)" }}>
                  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold" style={{ color: "var(--color-primary)" }}>Vision</h3>
              <p className="leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
                To develop each student to his/her full potential.
              </p>
            </div>
            {/* Mission */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: "linear-gradient(135deg, rgba(240,192,64,0.08) 0%, rgba(94,0,129,0.10) 100%)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(94,0,129,0.22)",
                borderTop: "3px solid var(--color-gold)",
                boxShadow: "0 8px 32px rgba(94,0,129,0.10), inset 0 1px 0 rgba(255,255,255,0.55)",
              }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "rgba(116,91,0,0.10)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" width={24} height={24} aria-hidden="true" style={{ color: "var(--color-secondary)" }}>
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold" style={{ color: "var(--color-secondary)" }}>Mission</h3>
              <p className="leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
                To provide a high-quality and meaningful education to each student in a multi-diverse society.
              </p>
              <p className="mt-4 leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
                Each student will be treated as an individual and will be educated to function as a productive member of our society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School Anthem */}
      <section className="px-6 py-16" style={{ background: "var(--color-surface-container-low)" }}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.16em] uppercase" style={{ color: "var(--color-primary)" }}>
            Est. 2026
          </p>
          <h2 className="mb-2 text-3xl font-bold" style={{ color: "var(--color-on-surface)" }}>
            IA Academy Anthem
          </h2>
          <div
            className="mx-auto mt-10 rounded-2xl p-10 text-left"
            style={{
              background: "linear-gradient(135deg, rgba(94,0,129,0.07) 0%, rgba(240,192,64,0.06) 100%)",
              border: "1px solid rgba(94,0,129,0.18)",
              boxShadow: "var(--shadow-ambient)",
            }}
          >
            {/* Verse */}
            <p className="mb-2 text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--color-primary)" }}>Verse</p>
            <p className="mb-6 leading-8 italic" style={{ color: "var(--color-on-surface-variant)", fontSize: "1.05rem" }}>
              From every land we gather, strong and free,<br />
              Inspired minds, united in destiny.<br />
              Excellence our flame, creativity our song,<br />
              Together we rise, where bright futures belong.
            </p>
            {/* Chorus */}
            <div className="rounded-xl px-6 py-5" style={{ background: "rgba(94,0,129,0.06)", borderLeft: "3px solid var(--color-primary)" }}>
              <p className="mb-2 text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: "var(--color-primary)" }}>Chorus</p>
              <p className="leading-8 font-medium italic" style={{ color: "var(--color-on-surface)", fontSize: "1.05rem" }}>
                Hail to our school, where young minds brightly grow,<br />
                A future blooming, like the seeds we sow.<br />
                Together bound in knowledge and in grace,<br />
                For Namibia&apos;s progress, we take our place!
              </p>
            </div>
            {/* Audio player */}
            <div className="mt-8">
              <AnthemPlayer />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
