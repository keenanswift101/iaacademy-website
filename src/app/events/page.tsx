import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Events Calendar",
  description: "Upcoming events, exam dates, term activities and school functions at Innovative Academics Academy.",
};

const months = ["January", "February", "March"];

const placeholderEvents = [
  { date: "Term 1 Start", description: "First day of Term 1 — all learners report at 07:30." },
  { date: "Parent Evening", description: "Meet your child's teacher for a progress discussion." },
  { date: "Sports Day", description: "Annual sports day — details and time to be confirmed." },
  { date: "Term 1 End", description: "Last day of Term 1. End of term assessments completed." },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        label="Resources"
        title="Events Calendar"
        description="Stay up to date with upcoming school events, exam dates, term activities and important dates."
        breadcrumb={[{ label: "Events Calendar", href: "/events" }]}
      />

      {/* View toggle placeholder */}
      <section className="px-6 py-4 border-b" style={{ background: "var(--color-surface)", borderColor: "var(--color-surface-container)" }}>
        <div className="mx-auto max-w-4xl flex gap-3">
          <button
            className="rounded-full px-5 py-2 text-sm font-semibold"
            style={{ background: "var(--color-primary)", color: "var(--color-on-primary)" }}
            aria-pressed="true"
          >
            List View
          </button>
          <button
            className="rounded-full px-5 py-2 text-sm font-medium transition-colors hover:bg-black/5"
            style={{ color: "var(--color-on-surface-variant)" }}
          >
            Month View
          </button>
        </div>
      </section>

      {/* Events list */}
      <section className="px-6 py-12" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-4xl">
          {months.map((month) => (
            <div key={month} className="mb-10">
              <h2 className="mb-6 text-lg font-bold" style={{ color: "var(--color-on-surface)" }}>{month}</h2>
              <div className="space-y-4">
                {placeholderEvents.map(({ date, description }) => (
                  <div
                    key={`${month}-${date}`}
                    className="flex gap-5 rounded-2xl p-6"
                    style={{ background: "var(--color-surface-container-lowest)", boxShadow: "var(--shadow-ambient)" }}
                  >
                    <div
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-xs font-bold text-center"
                      style={{ background: "var(--color-primary-container)", color: "var(--color-on-primary-container)" }}
                      aria-hidden="true"
                    >
                      TBD
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "var(--color-on-surface)" }}>{date}</p>
                      <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p className="text-center text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
            Full term calendar will be published at the start of each academic year.
          </p>
        </div>
      </section>
    </>
  );
}
