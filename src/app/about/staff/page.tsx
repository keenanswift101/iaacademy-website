import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Leadership & Staff",
  description: "Meet the educators and support staff at Innovative Academics Academy — a team dedicated to every learner.",
};

const staffPlaceholders = [
  { initials: "AB", name: "Staff Member", role: "Principal" },
  { initials: "CD", name: "Staff Member", role: "Grade R–3 Educator" },
  { initials: "EF", name: "Staff Member", role: "Grade 4–7 Educator" },
  { initials: "GH", name: "Staff Member", role: "Grade 8–12 Educator" },
  { initials: "IJ", name: "Staff Member", role: "Learning Support Specialist" },
  { initials: "KL", name: "Staff Member", role: "Administrative Staff" },
];

export default function StaffPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Leadership & Staff"
        description="Our team of dedicated educators and support staff share one mission: to help every child reach their full potential."
        breadcrumb={[{ label: "Staff", href: "/about/staff" }]}
      />

      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {staffPlaceholders.map(({ initials, name, role }) => (
              <div
                key={role}
                className="rounded-2xl p-8 text-center"
                style={{ background: "var(--color-surface-container-lowest)", boxShadow: "var(--shadow-ambient)" }}
              >
                <div
                  className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full text-xl font-bold"
                  style={{ background: "var(--color-primary-container)", color: "var(--color-on-primary-container)" }}
                  aria-hidden="true"
                >
                  {initials}
                </div>
                <p className="font-semibold" style={{ color: "var(--color-on-surface)" }}>{name}</p>
                <p className="mt-1 text-sm" style={{ color: "var(--color-primary)" }}>{role}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
            Staff profiles will be updated once photographs and bios are provided by the school.
          </p>
        </div>
      </section>
    </>
  );
}
