import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Learning Support — High School Phase",
};

export default function HighSchoolLearningSupportPage() {
  return (
    <>
      <PageHero
        label="High School Phase"
        title="Learning Support — Grade 8 to 12"
        description="The transition to senior school can be overwhelming. Our High School team provides structured support so every learner can finish strong."
        breadcrumb={[{ label: "High School", href: "/high-school" }, { label: "Learning Support", href: "/high-school/learning-support" }]}
      />
      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-3xl space-y-4 text-base leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
          <p>High school marks a critical period for learners with ADHD, ADD, Dyslexia and slow learning. Exam pressure, increased workload, and social complexity all intensify. We meet learners where they are and build skills that carry them beyond graduation.</p>
          <p>Study skills, exam preparation strategies, and accommodation support will be detailed on this page.</p>
        </div>
      </section>
    </>
  );
}
