import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Notice Board",
  description: "Important school announcements, notices, and updates for IA Academy parents and students.",
};

const noticePlaceholders = [
  { date: "Coming soon", category: "General", title: "Welcome to the IA Academy Notice Board", body: "School announcements and important notices will appear here. Check back regularly for updates from the administration." },
  { date: "—", category: "Academic", title: "Term dates and exam schedules", body: "Term dates, examination timetables, and academic calendar events will be posted here each term." },
  { date: "—", category: "Events", title: "Upcoming school events", body: "Event notices, invitation letters, and activity updates will be shared here for parents and students." },
];

const categoryColors: Record<string, string> = {
  General: "var(--color-primary-container)",
  Academic: "var(--color-secondary-container)",
  Events: "var(--color-tertiary-container)",
};
const categoryTextColors: Record<string, string> = {
  General: "var(--color-on-primary-container)",
  Academic: "var(--color-on-secondary-container)",
  Events: "var(--color-on-tertiary-container)",
};

export default function NoticeBoardPage() {
  return (
    <>
      <PageHero
        label="Resources"
        title="Notice Board"
        description="Important announcements, news, and updates from IA Academy administration."
        breadcrumb={[{ label: "Notice Board", href: "/notice-board" }]}
      />

      <section className="px-6 py-16" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-3xl space-y-6">
          {noticePlaceholders.map(({ date, category, title, body }) => (
            <article
              key={title}
              className="rounded-2xl p-8"
              style={{ background: "var(--color-surface-container-lowest)", boxShadow: "var(--shadow-ambient)" }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <span
                  className="rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ background: categoryColors[category], color: categoryTextColors[category] }}
                >
                  {category}
                </span>
                <time className="text-xs font-medium" style={{ color: "var(--color-on-surface-variant)" }}>{date}</time>
              </div>
              <h2 className="mb-3 text-lg font-semibold leading-snug" style={{ color: "var(--color-on-surface)" }}>{title}</h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>{body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
