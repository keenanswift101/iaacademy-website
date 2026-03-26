import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "High School Curriculum — Grade 8 to 12",
};

export default function HighSchoolCurriculumPage() {
  return (
    <>
      <PageHero
        label="High School Phase"
        title="Cambridge Curriculum — Grade 8 to 12"
        description="From Cambridge Lower Secondary through to IGCSE and AS Level — a pathway to internationally recognised qualifications."
        breadcrumb={[{ label: "High School", href: "/high-school" }, { label: "Curriculum", href: "/high-school/curriculum" }]}
      />
      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl p-10 text-center" style={{ background: "var(--color-surface-container-lowest)", boxShadow: "var(--shadow-ambient)" }}>
            <p className="text-lg font-medium mb-2" style={{ color: "var(--color-primary)" }}>Curriculum details coming soon</p>
            <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>Grade 8–12 curriculum pathways, Cambridge frameworks, and subject overviews will appear here.</p>
          </div>
        </div>
      </section>
    </>
  );
}
