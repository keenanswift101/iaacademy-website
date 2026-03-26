import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Online Learners — Supervised School Environment",
  description: "IA Academy provides a structured, supervised school environment for children enrolled in online curricula who need peer interaction and daily routine.",
};

const included = [
  { title: "Supervised Study Space", desc: "A calm, structured environment where your child can follow their online curriculum without distraction." },
  { title: "Peer Interaction", desc: "Daily social interaction with other learners — essential for healthy development and wellbeing." },
  { title: "Structured Daily Routine", desc: "Predictable timetables with breaks, lunchtime, and a clear start and end to the school day." },
  { title: "Teacher Oversight", desc: "A qualified educator on-site at all times — able to assist, guide, and support as needed." },
  { title: "Safe, Supervised Environment", desc: "Parents can work knowing their child is in a safe, caring, professional school setting." },
  { title: "Flexible Curriculum", desc: "Your child remains enrolled in their chosen online programme — we simply provide the environment." },
];

export default function OnlineLearnersPage() {
  return (
    <>
      <PageHero
        label="Online Learners"
        title="A School Environment for Online Learners"
        description="Is your child enrolled in an online curriculum but needs structure, supervision, and social connection? We have a place for them."
        breadcrumb={[{ label: "Online Learners", href: "/online-learners" }]}
      />

      {/* What this is */}
      <section className="px-6 py-14" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold" style={{ color: "var(--color-on-surface)" }}>What does this mean in practice?</h2>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
            <p>
              Many families choose online curricula — whether for flexibility, specific learning approaches, or personal reasons. But online learning at home can be isolating and hard to manage without the structure of a school day.
            </p>
            <p>
              At IA Academy, online learners come to our campus each day, follow their own online curriculum, but do so within a professional school environment — with qualified oversight, peer company, and a structured routine.
            </p>
            <p>
              This is not tutoring. This is a full school experience, without changing your child&apos;s existing academic programme.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="px-6 py-14" style={{ background: "var(--color-surface-container-low)" }}>
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-2xl font-bold" style={{ color: "var(--color-on-surface)" }}>What&apos;s included</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {included.map(({ title, desc }) => (
              <div
                key={title}
                className="rounded-2xl p-6"
                style={{ background: "linear-gradient(135deg, rgba(94,0,129,0.10) 0%, rgba(240,192,64,0.07) 100%)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(94,0,129,0.20)", boxShadow: "0 8px 32px rgba(94,0,129,0.10), inset 0 1px 0 rgba(255,255,255,0.55)" }}
              >
                <h3 className="mb-2 font-semibold" style={{ color: "var(--color-on-surface)" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12 text-center" style={{ background: "var(--color-surface)" }}>
        <h2 className="mb-4 text-2xl font-bold" style={{ color: "var(--color-on-surface)" }}>Interested?</h2>
        <p className="mb-8 text-base" style={{ color: "var(--color-on-surface-variant)" }}>
          Contact us to discuss availability and arrangements for your child.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact/book-a-tour"
            className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold transition-transform hover:scale-105 focus-visible:ring-2"
            style={{ background: "var(--color-gold)", color: "var(--color-on-surface)" }}
          >
            Book a Tour
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold transition-transform hover:scale-105 focus-visible:ring-2"
            style={{ background: "var(--color-primary)", color: "var(--color-on-primary)" }}
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Grade-specific online info */}
      <section className="px-6 py-14" style={{ background: "var(--color-surface-container-low)" }}>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-2xl font-bold" style={{ color: "var(--color-on-surface)" }}>
            Online Learning at IA Academy
          </h2>
          <p className="mb-8 text-base leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
            We integrate online and blended learning progressively as students advance through the grades,
            preparing them for independent study while maintaining full supervision and support.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div
              className="rounded-2xl p-6"
              style={{ background: "linear-gradient(135deg, rgba(94,0,129,0.10) 0%, rgba(240,192,64,0.07) 100%)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(94,0,129,0.20)", boxShadow: "0 8px 32px rgba(94,0,129,0.10), inset 0 1px 0 rgba(255,255,255,0.55)" }}
            >
              <p className="text-sm font-bold uppercase tracking-wide mb-1" style={{ color: "var(--color-gold-on-container, #745b00)" }}>
                Grades 7, 8 &amp; 9
              </p>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--color-on-surface)" }}>
                Partial Online Classes
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
                Students in Grades 7, 8, and 9 participate in a <strong>blended model</strong> — a combination
                of face-to-face teaching and supervised online lessons. This builds digital literacy and
                self-directed learning habits while retaining full teacher oversight.
              </p>
            </div>
            <div
              className="rounded-2xl p-6"
              style={{ background: "var(--color-surface-container-lowest)", boxShadow: "var(--shadow-ambient)", borderLeft: "4px solid var(--color-primary)" }}
            >
              <p className="text-sm font-bold uppercase tracking-wide mb-1" style={{ color: "var(--color-primary)" }}>
                Grade 12
              </p>
              <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--color-on-surface)" }}>
                Full Online Programme
              </h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--color-on-surface-variant)" }}>
                Grade 12 students complete their final year through recognised online platforms,
                with full supervision at our campus. Programmes offered include:
              </p>
              <ul className="space-y-1.5">
                {["TAPE (The Answer Portal for Education)", "Mobimax", "Cambridge International"].map((platform) => (
                  <li key={platform} className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--color-primary)" }}>
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "var(--color-gold)" }}
                    />
                    {platform}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
