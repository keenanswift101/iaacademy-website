"use client";

import { useState } from "react";

type CalendarEvent = {
  month: number; // 0-indexed
  day: number;
  title: string;
  description: string;
  color?: string;
};

const YEAR = 2026;

const events: CalendarEvent[] = [
  // Term dates
  { month: 0,  day: 12, title: "Term 1 Start",     description: "First day of Term 1 — all learners report at 07:15.", color: "primary" },
  { month: 3,  day: 28, title: "Term 1 End",       description: "Last day of Term 1. End of term assessments completed.", color: "gold" },
  { month: 5,  day: 1,  title: "Term 2 Start",     description: "First day of Term 2 — all learners report at 07:15.", color: "primary" },
  { month: 7,  day: 20, title: "Term 2 End",       description: "Last day of Term 2.", color: "gold" },
  { month: 8,  day: 7,  title: "Term 3 Start",     description: "First day of Term 3 — all learners report at 07:15.", color: "primary" },
  { month: 11, day: 4,  title: "Term 3 End",       description: "Last day of Term 3. End of year assessments completed.", color: "gold" },
  // Namibian Public Holidays 2026
  { month: 0,  day: 1,  title: "New Year's Day",   description: "Public holiday — school closed.", color: "holiday" },
  { month: 2,  day: 21, title: "Independence Day", description: "Namibia Independence Day — school closed. Celebrating 36 years of independence.", color: "holiday" },
  { month: 3,  day: 3,  title: "Good Friday",      description: "Public holiday — school closed.", color: "holiday" },
  { month: 3,  day: 6,  title: "Easter Monday",    description: "Public holiday — school closed.", color: "holiday" },
  { month: 4,  day: 1,  title: "Workers' Day",     description: "International Workers' Day — public holiday, school closed.", color: "holiday" },
  { month: 4,  day: 4,  title: "Cassinga Day",     description: "Cassinga Day — public holiday, school closed.", color: "holiday" },
  { month: 4,  day: 14, title: "Ascension Day",    description: "Public holiday — school closed.", color: "holiday" },
  { month: 4,  day: 25, title: "Africa Day",       description: "Africa Day — public holiday, school closed.", color: "holiday" },
  { month: 7,  day: 26, title: "Heroes' Day",      description: "Heroes' Day (Namibia Day) — public holiday, school closed.", color: "holiday" },
  { month: 11, day: 10, title: "Human Rights Day", description: "Human Rights Day — public holiday, school closed.", color: "holiday" },
  { month: 11, day: 25, title: "Christmas Day",    description: "Christmas Day — public holiday, school closed.", color: "holiday" },
  { month: 11, day: 26, title: "Family Day",       description: "Family Day (Boxing Day) — public holiday, school closed.", color: "holiday" },
];

const tbdEvents = [
  { title: "Parent Evening", description: "Meet your child's teacher for a progress discussion. Date to be confirmed." },
  { title: "Sports Day",     description: "Annual sports day — details and time to be confirmed." },
];

const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];
const DAY_NAMES = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

function getDaysInMonth(month: number, year: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(month: number, year: number) {
  return new Date(year, month, 1).getDay();
}

function CalendarMonth({ month, year, events: evts, onDayClick, selectedDay }: {
  month: number;
  year: number;
  events: CalendarEvent[];
  onDayClick: (day: number) => void;
  selectedDay: number | null;
}) {
  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDayOfMonth(month, year);
  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  // pad to complete last row
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div>
      <div className="grid grid-cols-7 mb-2">
        {DAY_NAMES.map((d) => (
          <div key={d} className="py-1 text-center text-xs font-semibold" style={{ color: "var(--color-on-surface-variant)" }}>
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-y-1">
        {cells.map((day, i) => {
          if (!day) return <div key={`empty-${i}`} />;
          const evt = evts.find((e) => e.day === day);
          const isSelected = selectedDay === day;
          const isToday = new Date().getFullYear() === year && new Date().getMonth() === month && new Date().getDate() === day;

          return (
            <button
              key={day}
              onClick={() => evt && onDayClick(day)}
              className="relative mx-auto flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-all"
              style={{
                cursor: evt ? "pointer" : "default",
                background: isSelected && evt
                  ? evt.color === "holiday" ? "#c0392b" : "var(--color-primary)"
                  : evt
                  ? evt.color === "gold" ? "rgba(240,192,64,0.22)" : evt.color === "holiday" ? "rgba(192,57,43,0.12)" : "rgba(94,0,129,0.14)"
                  : "transparent",
                color: isSelected && evt
                  ? "#fff"
                  : evt
                  ? evt.color === "gold" ? "#7a5c00" : evt.color === "holiday" ? "#c0392b" : "var(--color-primary)"
                  : isToday ? "var(--color-primary)" : "var(--color-on-surface)",
                fontWeight: evt || isToday ? 700 : 400,
                outline: isToday && !isSelected ? "2px solid var(--color-primary)" : "none",
                outlineOffset: "1px",
              }}
              aria-label={evt ? `${day}: ${evt.title}` : `${day}`}
            >
              {day}
              {evt && !isSelected && (
                <span
                  className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full"
                  style={{ background: evt.color === "gold" ? "#b8860b" : evt.color === "holiday" ? "#c0392b" : "var(--color-primary)" }}
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function EventsClient() {
  const [view, setView] = useState<"list" | "month">("list");
  const [currentMonth, setCurrentMonth] = useState(() => {
    const now = new Date();
    return now.getFullYear() === YEAR ? now.getMonth() : 0;
  });
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const monthEvents = events.filter((e) => e.month === currentMonth);
  const selectedEvent = selectedDay ? monthEvents.find((e) => e.day === selectedDay) : null;

  function prevMonth() {
    setSelectedDay(null);
    setCurrentMonth((m) => (m === 0 ? 11 : m - 1));
  }
  function nextMonth() {
    setSelectedDay(null);
    setCurrentMonth((m) => (m === 11 ? 0 : m + 1));
  }

  // Group list events by month (exclude holidays from main list — shown separately)
  const termEventsByMonth = MONTH_NAMES.map((name, idx) => ({
    name,
    events: events.filter((e) => e.month === idx && e.color !== "holiday"),
  })).filter((m) => m.events.length > 0);

  const holidaysByMonth = MONTH_NAMES.map((name, idx) => ({
    name,
    events: events.filter((e) => e.month === idx && e.color === "holiday"),
  })).filter((m) => m.events.length > 0);

  return (
    <>
      {/* Toggle bar */}
      <section className="border-b px-6 py-4" style={{ background: "var(--color-surface)", borderColor: "var(--color-surface-container)" }}>
        <div className="mx-auto flex max-w-4xl gap-3">
          {(["list", "month"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className="rounded-full px-5 py-2 text-sm font-semibold transition-all hover:scale-105"
              style={{
                background: view === v ? "var(--color-primary)" : "transparent",
                color: view === v ? "var(--color-on-primary)" : "var(--color-primary)",
                border: "1.5px solid var(--color-primary)",
              }}
              aria-pressed={view === v}
            >
              {v === "list" ? "List View" : "Month View"}
            </button>
          ))}
        </div>
      </section>

      {/* LIST VIEW */}
      {view === "list" && (
        <section className="px-6 py-12" style={{ background: "var(--color-surface)" }}>
          <div className="mx-auto max-w-4xl">
            {termEventsByMonth.map(({ name, events: evts }) => (
              <div key={name} className="mb-10">
                <h2 className="mb-6 text-lg font-bold" style={{ color: "var(--color-on-surface)" }}>{name} {YEAR}</h2>
                <div className="space-y-4">
                  {evts.map(({ day, title, description, color }) => (
                    <div
                      key={`${name}-${day}`}
                      className="flex gap-5 rounded-2xl p-6"
                      style={{ background: "var(--color-surface-container-lowest)", boxShadow: "var(--shadow-ambient)" }}
                    >
                      <div
                        className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl text-center"
                        style={{
                          background: color === "gold" ? "rgba(240,192,64,0.20)" : "rgba(94,0,129,0.12)",
                          color: color === "gold" ? "#7a5c00" : "var(--color-primary)",
                        }}
                      >
                        <span className="text-lg font-bold leading-none">{day}</span>
                        <span className="text-[10px] font-semibold uppercase">{name.slice(0, 3)}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-sm" style={{ color: "var(--color-on-surface)" }}>{title}</p>
                        <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* TBD events */}
            <div className="mb-10">
              <h2 className="mb-6 text-lg font-bold" style={{ color: "var(--color-on-surface)" }}>Date to be confirmed</h2>
              <div className="space-y-4">
                {tbdEvents.map(({ title, description }) => (
                  <div key={title} className="flex gap-5 rounded-2xl p-6" style={{ background: "var(--color-surface-container-lowest)", boxShadow: "var(--shadow-ambient)" }}>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xs font-bold" style={{ background: "var(--color-surface-container)", color: "var(--color-on-surface-variant)" }}>
                      TBC
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "var(--color-on-surface)" }}>{title}</p>
                      <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Public holidays */}
            <div className="mb-6">
              <h2 className="mb-6 text-lg font-bold" style={{ color: "var(--color-on-surface)" }}>Namibian Public Holidays 2026</h2>
              {holidaysByMonth.map(({ name, events: evts }) => (
                <div key={name} className="mb-6">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--color-on-surface-variant)" }}>{name}</h3>
                  <div className="space-y-3">
                    {evts.map(({ day, title, description }) => (
                      <div key={`hol-${name}-${day}`} className="flex gap-5 rounded-2xl p-5" style={{ background: "rgba(192,57,43,0.05)", border: "1px solid rgba(192,57,43,0.15)" }}>
                        <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl text-center" style={{ background: "rgba(192,57,43,0.12)", color: "#c0392b" }}>
                          <span className="text-lg font-bold leading-none">{day}</span>
                          <span className="text-[10px] font-semibold uppercase">{name.slice(0, 3)}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-sm" style={{ color: "var(--color-on-surface)" }}>{title}</p>
                          <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>{description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* MONTH VIEW */}
      {view === "month" && (
        <section className="px-6 py-12" style={{ background: "var(--color-surface)" }}>
          <div className="mx-auto max-w-md">
            {/* Month navigation */}
            <div className="mb-6 flex items-center justify-between">
              <button
                onClick={prevMonth}
                className="flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110"
                style={{ background: "var(--color-surface-container)", color: "var(--color-primary)", border: "1.5px solid var(--color-primary)" }}
                aria-label="Previous month"
              >
                ‹
              </button>
              <h2 className="text-xl font-bold" style={{ color: "var(--color-on-surface)" }}>
                {MONTH_NAMES[currentMonth]} {YEAR}
              </h2>
              <button
                onClick={nextMonth}
                className="flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110"
                style={{ background: "var(--color-surface-container)", color: "var(--color-primary)", border: "1.5px solid var(--color-primary)" }}
                aria-label="Next month"
              >
                ›
              </button>
            </div>

            {/* Calendar grid */}
            <div
              className="rounded-2xl p-5"
              style={{ background: "var(--color-surface-container-lowest)", boxShadow: "var(--shadow-ambient)", border: "1px solid rgba(94,0,129,0.15)" }}
            >
              <CalendarMonth
                month={currentMonth}
                year={YEAR}
                events={monthEvents}
                onDayClick={setSelectedDay}
                selectedDay={selectedDay}
              />
            </div>

            {/* Legend */}
            <div className="mt-4 flex flex-wrap gap-4 px-1">
              <div className="flex items-center gap-2 text-xs" style={{ color: "var(--color-on-surface-variant)" }}>
                <span className="h-3 w-3 rounded-full" style={{ background: "rgba(94,0,129,0.14)", border: "1.5px solid var(--color-primary)" }} />
                Term start
              </div>
              <div className="flex items-center gap-2 text-xs" style={{ color: "var(--color-on-surface-variant)" }}>
                <span className="h-3 w-3 rounded-full" style={{ background: "rgba(240,192,64,0.22)", border: "1.5px solid #b8860b" }} />
                Term end
              </div>
              <div className="flex items-center gap-2 text-xs" style={{ color: "var(--color-on-surface-variant)" }}>
                <span className="h-3 w-3 rounded-full" style={{ background: "rgba(192,57,43,0.12)", border: "1.5px solid #c0392b" }} />
                Public holiday
              </div>
              <div className="flex items-center gap-2 text-xs" style={{ color: "var(--color-on-surface-variant)" }}>
                <span className="h-3 w-3 rounded-full" style={{ outline: "2px solid var(--color-primary)", outlineOffset: "1px" }} />
                Today
              </div>
            </div>

            {/* Selected event detail */}
            {selectedEvent && (
              <div
                className="mt-6 rounded-2xl p-5"
                style={{
                  background: selectedEvent.color === "holiday"
                    ? "rgba(192,57,43,0.07)"
                    : "linear-gradient(135deg, rgba(94,0,129,0.10) 0%, rgba(240,192,64,0.07) 100%)",
                  border: selectedEvent.color === "holiday" ? "1px solid rgba(192,57,43,0.25)" : "1px solid rgba(94,0,129,0.22)",
                }}
              >
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest" style={{ color: selectedEvent.color === "holiday" ? "#c0392b" : "var(--color-primary)" }}>
                  {selectedEvent.color === "holiday" ? "Public Holiday · " : ""}{selectedEvent.day} {MONTH_NAMES[currentMonth]} {YEAR}
                </p>
                <p className="font-bold text-base" style={{ color: "var(--color-on-surface)" }}>{selectedEvent.title}</p>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--color-on-surface-variant)" }}>{selectedEvent.description}</p>
              </div>
            )}

            {monthEvents.length === 0 && (
              <p className="mt-6 text-center text-sm" style={{ color: "var(--color-on-surface-variant)" }}>
                No events scheduled for {MONTH_NAMES[currentMonth]}.
              </p>
            )}
          </div>
        </section>
      )}
    </>
  );
}
