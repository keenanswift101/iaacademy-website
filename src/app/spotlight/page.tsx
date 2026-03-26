import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Student Spotlight",
  description: "Celebrating the achievements, growth, and stories of IA Academy students.",
};

export default function SpotlightPage() {
  return (
    <>
      <PageHero
        label="Student Spotlight"
        title="Celebrating Our Learners"
        description="Every child at IA Academy has a story worth telling. This is where we share them."
        breadcrumb={[{ label: "Student Spotlight", href: "/spotlight" }]}
      />

      {/* Placeholder spotlights */}
      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="rounded-2xl p-8"
                style={{ background: "var(--color-surface-container-lowest)", boxShadow: "var(--shadow-ambient)" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full text-lg font-bold"
                    style={{ background: "var(--color-primary-container)", color: "var(--color-on-primary-container)" }}
                    aria-hidden="true"
                  >
                    IA
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: "var(--color-on-surface)" }}>A IA Academy Learner</p>
                    <p className="text-xs" style={{ color: "var(--color-primary)" }}>Spotlight coming soon</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
                  Student spotlight stories will be featured here, celebrating growth, achievements, and the individuals who make our school community special. All stories are shared with full parent consent and do not include surnames.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nominate CTA */}
      <section className="px-6 py-12 text-center" style={{ background: "var(--color-surface-container-low)" }}>
        <h2 className="mb-2 text-2xl font-bold" style={{ color: "var(--color-on-surface)" }}>Know a student who deserves recognition?</h2>
        <p className="mb-6 text-base" style={{ color: "var(--color-on-surface-variant)" }}>Nominate a student for the next spotlight feature.</p>
        <Link
          href="/contact"
          className="inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-semibold transition-transform hover:scale-105 focus-visible:ring-2"
          style={{ background: "var(--color-primary)", color: "var(--color-on-primary)" }}
        >
          Submit a nomination
        </Link>
      </section>
    </>
  );
}
