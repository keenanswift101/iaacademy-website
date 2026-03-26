import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "High School — Grade 8 to Grade 12",
  description: "Innovative Academics Academy's High School phase covers Grade 8 to 12, including Cambridge curriculum, partial online blended learning in Grades 8–9, and full online pathways for Grade 12 via TAPE, Mobimax and Cambridge.",
};

export default function HighSchoolPage() {
  return (
    <>
      <PageHero
        label="High School Phase"
        title="Grade 8 to Grade 12"
        description="The senior years — where learners find their identity, develop independence, and prepare for life beyond school. With support at every step."
        breadcrumb={[{ label: "High School", href: "/high-school" }]}
      />
      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-4xl">
          {/* Online learning callout */}
          <div
            className="rounded-2xl p-6 mb-8 flex flex-col sm:flex-row gap-4 items-start"
            style={{
              background: "rgba(94, 0, 129, 0.08)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(94, 0, 129, 0.20)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5), 0 8px 32px rgba(94,0,129,0.10)",
            }}
          >
            <div className="flex-1">
              <p className="text-sm font-bold uppercase tracking-wide mb-1" style={{ color: "var(--color-primary)" }}>Blended &amp; Online Learning</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface)" }}>
                <strong>Grades 8 &amp; 9</strong> follow a partial online blended model.
                <strong> Grade 12</strong> students have access to full online programmes through
                TAPE, Mobimax, and Cambridge International — all supervised on campus.
              </p>
            </div>
            <Link
              href="/online-learners"
              className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-semibold rounded-full px-4 py-2 transition-transform hover:scale-105"
              style={{ background: "var(--color-primary)", color: "#fff" }}
            >
              Learn more
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { label: "Cambridge Curriculum", href: "/high-school/curriculum", desc: "Cambridge Lower & Upper Secondary, IGCSE and AS Level pathways." },
              { label: "Subject Choices", href: "/high-school/subjects", desc: "Subjects offered per grade, helping learners play to their strengths." },
              { label: "Learning Support", href: "/high-school/learning-support", desc: "Transition support, study skills, and exam preparation." },
              { label: "Book a Tour", href: "/contact/book-a-tour", desc: "See our High School environment in person." },
            ].map(({ label, href, desc }) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl p-8 block transition-transform hover:scale-[1.02] focus-visible:ring-2"
                style={{ background: "linear-gradient(135deg, rgba(94,0,129,0.10) 0%, rgba(240,192,64,0.07) 100%)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(94,0,129,0.20)", boxShadow: "0 8px 32px rgba(94,0,129,0.10), inset 0 1px 0 rgba(255,255,255,0.55)" }}
              >
                <p className="font-semibold mb-2" style={{ color: "var(--color-on-surface)" }}>{label}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
