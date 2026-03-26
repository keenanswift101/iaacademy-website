import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Gallery — Life at IA Academy",
  description: "Photos of student life, campus, activities and events at Innovative Academics Academy in Windhoek, Namibia.",
};

/* Unsplash stock photos — replace with actual school photos when available */
const galleryItems = [
  { id: 1, src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=450&fit=crop&q=80", label: "Classroom environment", aspect: "aspect-[4/3]" },
  { id: 2, src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=800&fit=crop&q=80", label: "Children studying together", aspect: "aspect-[3/4]" },
  { id: 3, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=450&fit=crop&q=80", label: "One-on-one learning", aspect: "aspect-[4/3]" },
  { id: 4, src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=600&fit=crop&q=80", label: "Reading and books", aspect: "aspect-square" },
  { id: 5, src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=450&fit=crop&q=80", label: "School activities", aspect: "aspect-[4/3]" },
  { id: 6, src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=800&fit=crop&q=80", label: "Group work", aspect: "aspect-[3/4]" },
  { id: 7, src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=450&fit=crop&q=80", label: "Creative learning", aspect: "aspect-[4/3]" },
  { id: 8, src: "https://images.unsplash.com/photo-1560523159-4a9692d222ef?w=600&h=600&fit=crop&q=80", label: "Art and expression", aspect: "aspect-square" },
  { id: 9, src: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&h=800&fit=crop&q=80", label: "Teacher support", aspect: "aspect-[3/4]" },
  { id: 10, src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=450&fit=crop&q=80", label: "Student focus", aspect: "aspect-[4/3]" },
  { id: 11, src: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&h=450&fit=crop&q=80", label: "Quiet study time", aspect: "aspect-[4/3]" },
  { id: 12, src: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=600&h=600&fit=crop&q=80", label: "Learning together", aspect: "aspect-square" },
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
            {galleryItems.map(({ id, src, label, aspect }) => (
              <div
                key={id}
                className={`mb-4 overflow-hidden rounded-2xl break-inside-avoid ${aspect}`}
                style={{ boxShadow: "var(--shadow-card)", backgroundColor: "#ededf0" }}
                role="img"
                aria-label={label}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={label}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm" style={{ color: "var(--color-on-surface-muted)" }}>
            These photos will be replaced with actual school photography as assets become available.
          </p>
        </div>
      </section>
    </>
  );
}
