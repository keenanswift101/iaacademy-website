import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Gallery — Life at IA Academy",
  description: "Photos of student life, campus, activities and events at Innovative Academics Academy in Windhoek, Namibia.",
};

const galleryItems = [
  { id: 1, label: "Classroom environment", aspect: "aspect-[4/3]" },
  { id: 2, label: "Children studying together", aspect: "aspect-[3/4]" },
  { id: 3, label: "One-on-one learning", aspect: "aspect-[4/3]" },
  { id: 4, label: "Reading and books", aspect: "aspect-square" },
  { id: 5, label: "School activities", aspect: "aspect-[4/3]" },
  { id: 6, label: "Group work", aspect: "aspect-[3/4]" },
  { id: 7, label: "Creative learning", aspect: "aspect-[4/3]" },
  { id: 8, label: "Arts and creativity", aspect: "aspect-square" },
  { id: 9, label: "Teacher support", aspect: "aspect-[3/4]" },
  { id: 10, label: "Student focus", aspect: "aspect-[4/3]" },
  { id: 11, label: "Campus grounds", aspect: "aspect-[4/3]" },
  { id: 12, label: "Group collaboration", aspect: "aspect-square" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        label="Gallery"
        title="Life at IA Academy"
        description="A glimpse into the environment, activities, and daily life that make IA Academy a place where children feel at home."
        breadcrumb={[{ label: "Gallery", href: "/gallery" }]}
      />

      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-5xl">
          <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
            {galleryItems.map(({ id, label, aspect }) => (
              <div
                key={id}
                className={`mb-4 overflow-hidden rounded-2xl break-inside-avoid ${aspect}`}
                style={{ background: "var(--color-surface-container)", boxShadow: "var(--shadow-ambient)", position: "relative", border: "1px solid rgba(94,0,129,0.22)" }}
                role="img"
                aria-label={`${label} — photo coming soon`}
              >
                <div className="calm-pulse" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(94,0,129,0.12) 0%, rgba(94,0,129,0) 70%)", pointerEvents: "none" }} aria-hidden="true" />
                <div className="flex h-full flex-col items-center justify-center gap-2" style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ width: 56, height: 56, background: "#000000", borderRadius: "9999px", border: "2px solid rgba(240,192,64,0.45)", boxShadow: "0 4px 16px rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image src="/logo-trns.png" alt="" width={44} height={44} className="object-contain" aria-hidden="true" />
                  </div>
                  <p className="text-xs font-medium text-center px-2" style={{ color: "rgba(94,0,129,0.55)", lineHeight: 1.3 }}>{label}<br />coming soon</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm" style={{ color: "var(--color-on-surface-muted)" }}>
            School photography coming soon — check back shortly.
          </p>
        </div>
      </section>
    </>
  );
}
