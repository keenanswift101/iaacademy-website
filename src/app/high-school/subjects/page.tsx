import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Subject Choices — High School",
};

export default function HighSchoolSubjectsPage() {
  return (
    <>
      <PageHero
        label="High School Phase"
        title="Subject Choices"
        description="IA Academy offers a range of subjects aligned to the Cambridge curriculum, designed to let learners pursue their strengths."
        breadcrumb={[{ label: "High School", href: "/high-school" }, { label: "Subjects", href: "/high-school/subjects" }]}
      />
      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl p-10 text-center" style={{ background: "var(--color-surface-container-lowest)", boxShadow: "var(--shadow-ambient)" }}>
            <p className="text-lg font-medium mb-2" style={{ color: "var(--color-primary)" }}>Subject list coming soon</p>
            <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>Full subject offerings per grade will be listed here once confirmed.</p>
          </div>
        </div>
      </section>
    </>
  );
}
