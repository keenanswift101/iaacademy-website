import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Aftercare — Junior Primary Phase",
};

export default function AftercareePage() {
  return (
    <>
      <PageHero
        label="Junior Primary Phase"
        title="Aftercare"
        description="Safe, supervised aftercare for Grade 4–7 learners — a calm space to relax, do homework, and stay connected."
        breadcrumb={[{ label: "Junior Primary", href: "/junior-primary" }, { label: "Aftercare", href: "/junior-primary/aftercare" }]}
      />
      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl p-10 text-center" style={{ background: "var(--color-surface-container-lowest)", boxShadow: "var(--shadow-ambient)" }}>
            <p className="text-lg font-medium mb-2" style={{ color: "var(--color-primary)" }}>Aftercare details coming soon</p>
            <p className="text-sm" style={{ color: "var(--color-on-surface-variant)" }}>Hours, fees, and activities will be listed here. Contact us in the meantime for availability.</p>
          </div>
        </div>
      </section>
    </>
  );
}
