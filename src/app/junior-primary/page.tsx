import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Junior Primary — Grade 4 to Grade 7",
  description: "IA Academy's Junior Primary phase covers Grade 4 to 7, supporting learners through the middle years with Cambridge curriculum and specialised learning support.",
};

export default function JuniorPrimaryPage() {
  return (
    <>
      <PageHero
        label="Junior Primary Phase"
        title="Grade 4 to Grade 7"
        description="The middle years. Academic demands grow — and so does our support. Every Grade 4–7 learner is known by name, not number."
        breadcrumb={[{ label: "Junior Primary", href: "/junior-primary" }]}
      />
      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-4xl">
          {/* Grade 7 online callout */}
          <div
            className="rounded-2xl p-5 mb-8 flex gap-4 items-start"
            style={{ background: "linear-gradient(135deg, rgba(94,0,129,0.10) 0%, rgba(240,192,64,0.07) 100%)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(94,0,129,0.20)", boxShadow: "0 8px 32px rgba(94,0,129,0.10), inset 0 1px 0 rgba(255,255,255,0.55)" }}
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-wide mb-1" style={{ color: "#745b00" }}>Grade 7 — Blended Learning</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface)" }}>
                Grade 7 students begin our blended learning model — a mix of
                face-to-face teaching and supervised online lessons that prepares them
                for the High School phase.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { label: "Curriculum", href: "/junior-primary/curriculum", desc: "Cambridge curriculum per grade for Grades 4–7." },
              { label: "Learning Support", href: "/junior-primary/learning-support", desc: "Support strategies as academic demands increase in the middle years." },
              { label: "Aftercare", href: "/junior-primary/aftercare", desc: "Aftercare availability, hours, and facilities." },
              { label: "Book a Tour", href: "/contact/book-a-tour", desc: "Visit our Junior Primary classrooms." },
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
