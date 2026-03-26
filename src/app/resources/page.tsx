import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Student Resources",
  description: "Downloadable study guides, worksheets, and learning resources for IA Academy students, organised by grade from Grade R to Grade 12.",
};

const grades = [
  { label: "Grade R", href: "#grade-r" },
  { label: "Grade 1", href: "#grade-1" },
  { label: "Grade 2", href: "#grade-2" },
  { label: "Grade 3", href: "#grade-3" },
  { label: "Grade 4", href: "#grade-4" },
  { label: "Grade 5", href: "#grade-5" },
  { label: "Grade 6", href: "#grade-6" },
  { label: "Grade 7", href: "#grade-7" },
  { label: "Grade 8", href: "#grade-8" },
  { label: "Grade 9", href: "#grade-9" },
  { label: "Grade 10", href: "#grade-10" },
  { label: "Grade 11", href: "#grade-11" },
  { label: "Grade 12", href: "#grade-12" },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        label="Resources"
        title="Student Resources"
        description="Study guides, worksheets, and learning materials organised by grade — from Grade R to Grade 12."
        breadcrumb={[{ label: "Resources", href: "/resources" }]}
      />

      {/* Sub-nav */}
      <section className="px-6 py-4" style={{ background: "var(--color-surface-container-low)" }}>
        <div className="mx-auto max-w-5xl flex flex-wrap gap-2">
          <Link
            href="/resources"
            className="rounded-full px-4 py-1.5 text-sm font-semibold"
            style={{ background: "var(--color-primary)", color: "var(--color-on-primary)" }}
            aria-current="page"
          >
            Student Resources
          </Link>
          <Link
            href="/resources/parents"
            className="rounded-full px-4 py-1.5 text-sm font-medium transition-colors hover:bg-black/5"
            style={{ color: "var(--color-on-surface-variant)" }}
          >
            Parent Resources
          </Link>
        </div>
      </section>

      {/* Grade tabs */}
      <section className="px-6 py-8" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap gap-2 mb-10">
            {grades.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="rounded-full px-4 py-1.5 text-sm font-medium transition-colors hover:bg-black/5 focus-visible:ring-2"
                style={{ background: "var(--color-surface-container-lowest)", color: "var(--color-on-surface-variant)", boxShadow: "var(--shadow-ambient)" }}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="rounded-2xl p-10 text-center" style={{ background: "var(--color-surface-container-lowest)", boxShadow: "var(--shadow-ambient)" }}>
            <p className="text-lg font-medium mb-2" style={{ color: "var(--color-primary)" }}>Resources coming soon</p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
              Downloadable worksheets, study guides, and grade-specific materials will be added here. Check back each term for new content.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
