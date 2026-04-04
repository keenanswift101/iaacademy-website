import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Junior Primary Curriculum — Grade 4 to 7",
};

export default function JuniorPrimaryCurriculumPage() {
  return (
    <>
      <PageHero
        label="Junior Primary Phase"
        title="Curriculum — Grade 4 to 7"
        description="Namibian curriculum per grade for Grades 4 through 7 — structured, progressive, and fully supported."
        breadcrumb={[{ label: "Junior Primary", href: "/junior-primary" }, { label: "Curriculum", href: "/junior-primary/curriculum" }]}
      />
      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl p-10 text-center" style={{ background: "var(--color-surface-container-lowest)", boxShadow: "var(--shadow-ambient)" }}>
            <p className="text-lg font-medium mb-2" style={{ color: "var(--color-primary)" }}>Curriculum details coming soon</p>
            <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>Grade 4–7 subject overviews and learning outcomes will appear here.</p>
          </div>
        </div>
      </section>
    </>
  );
}
