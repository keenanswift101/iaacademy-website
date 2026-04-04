import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Primary Curriculum — Grade R to 3",
  description: "Namibian curriculum — Early Years and Lower Primary at IA Academy, supporting learners from Grade R through Grade 3.",
};

export default function PrimaryCurriculumPage() {
  return (
    <>
      <PageHero
        label="Primary Phase"
        title="Curriculum — Grade R to 3"
        description="A Namibian curriculum Early Years and Lower Primary programme, delivered with the care and flexibility that young learners need."
        breadcrumb={[{ label: "Primary", href: "/primary" }, { label: "Curriculum", href: "/primary/curriculum" }]}
      />
      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl p-10 text-center" style={{ background: "var(--color-surface-container-lowest)", boxShadow: "var(--shadow-ambient)" }}>
            <p className="text-lg font-medium mb-2" style={{ color: "var(--color-primary)" }}>Curriculum details coming soon</p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>This page will contain detailed grade-by-grade curriculum information, learning outcomes, and subject overviews for Grade R to Grade 3.</p>
          </div>
        </div>
      </section>
    </>
  );
}
