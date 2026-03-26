import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Learning Support — Junior Primary Phase",
};

export default function JuniorPrimaryLearningSupportPage() {
  return (
    <>
      <PageHero
        label="Junior Primary Phase"
        title="Learning Support — Grade 4 to 7"
        description="As academic expectations grow through Grades 4–7, our learning support grows with them. Every learner keeps pace — in their own way."
        breadcrumb={[{ label: "Junior Primary", href: "/junior-primary" }, { label: "Learning Support", href: "/junior-primary/learning-support" }]}
      />
      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-3xl space-y-4 text-base leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>
          <p>During the middle years, the gap between learners with and without support can widen significantly. At IA Academy, we counter this with consistent, individualised strategies that adapt as each child&apos;s needs evolve.</p>
          <p>Full details on our Grade 4–7 learning support approach will be published here.</p>
        </div>
      </section>
    </>
  );
}
