import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Term Dates",
  description: "IA Academy term dates, school calendar, and downloadable term schedule for the current academic year.",
};

const terms = [
  { name: "Term 1", start: "TBC", end: "TBC", weeks: "~10" },
  { name: "Term 2", start: "TBC", end: "TBC", weeks: "~10" },
  { name: "Term 3", start: "TBC", end: "TBC", weeks: "~10" },
  { name: "Term 4", start: "TBC", end: "TBC", weeks: "~9" },
];

export default function TermDatesPage() {
  return (
    <>
      <PageHero
        label="Admissions"
        title="Term Dates"
        description="Plan ahead with IA Academy's school calendar. Download or save these dates to your calendar."
        breadcrumb={[{ label: "Admissions", href: "/admissions" }, { label: "Term Dates", href: "/admissions/term-dates" }]}
      />

      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-3xl">
          {/* Term table */}
          <div
            className="rounded-2xl overflow-hidden mb-8"
            style={{
              background: "linear-gradient(135deg, rgba(94,0,129,0.10) 0%, rgba(240,192,64,0.07) 100%)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(94,0,129,0.20)",
              boxShadow: "0 8px 32px rgba(94,0,129,0.10), inset 0 1px 0 rgba(255,255,255,0.55)",
            }}
          >
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "var(--color-primary)", color: "var(--color-on-primary)" }}>
                  <th className="px-6 py-4 text-left font-semibold">Term</th>
                  <th className="px-6 py-4 text-left font-semibold">Start Date</th>
                  <th className="px-6 py-4 text-left font-semibold">End Date</th>
                  <th className="px-6 py-4 text-left font-semibold">~Weeks</th>
                </tr>
              </thead>
              <tbody>
                {terms.map(({ name, start, end, weeks }, i) => (
                  <tr
                    key={name}
                    style={{
                      background: i % 2 === 0 ? "var(--color-surface-container-lowest)" : "var(--color-surface-container)",
                      color: "var(--color-on-surface-variant)",
                    }}
                  >
                    <td className="px-6 py-4 font-medium" style={{ color: "var(--color-on-surface)" }}>{name}</td>
                    <td className="px-6 py-4">{start}</td>
                    <td className="px-6 py-4">{end}</td>
                    <td className="px-6 py-4">{weeks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Download / save buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              disabled
              className="inline-flex h-10 items-center gap-2 rounded-full px-5 text-sm font-semibold opacity-50 cursor-not-allowed"
              style={{ background: "var(--color-surface-container)", color: "var(--color-on-surface-variant)" }}
              aria-label="Download term dates PDF — coming soon"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={16} height={16} aria-hidden="true"><path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z"/><path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z"/></svg>
              Download PDF
            </button>
            <button
              type="button"
              disabled
              className="inline-flex h-10 items-center gap-2 rounded-full px-5 text-sm font-semibold opacity-50 cursor-not-allowed"
              style={{ background: "var(--color-surface-container)", color: "var(--color-on-surface-variant)" }}
              aria-label="Add to calendar — coming soon"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width={16} height={16} aria-hidden="true"><path d="M5.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V12ZM6 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H6ZM7.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75V12Z"/><path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clipRule="evenodd"/></svg>
              Add to Calendar
            </button>
          </div>
          <p className="mt-4 text-xs" style={{ color: "var(--color-on-surface-variant)" }}>
            Term dates for the upcoming academic year will be confirmed and downloads enabled once published.
          </p>
        </div>
      </section>
    </>
  );
}
