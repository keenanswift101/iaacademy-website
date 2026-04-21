import PageHero from "@/components/ui/PageHero";
import RequestMeetingForm from "@/components/ui/RequestMeetingForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Meeting | Innovative Academics Academy",
  description:
    "Request a one-on-one meeting with the IA Academy team. We believe in personal conversations before any decisions are made about your child's education.",
};

const whatHappensNext = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    title: "We'll reach out within 24 hours",
    description:
      "A member of our team will contact you by phone or WhatsApp to confirm a date and time that works for you.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
      </svg>
    ),
    title: "A relaxed, personal conversation",
    description:
      "No pressure, no sales pitch. We sit down, listen to your situation, and honestly share whether IA Academy is the right fit.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </svg>
    ),
    title: "Your questions answered",
    description:
      "Whether it's about fees, curriculum, learning support, or how we handle ADHD — bring all your questions. We'll answer them honestly.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
      </svg>
    ),
    title: "No obligation to enrol",
    description:
      "The meeting is purely to help you make an informed decision. We only invite families to apply once we're confident it's a mutual fit.",
  },
];

export default function RequestMeetingPage() {
  return (
    <div>
      <PageHero
        label="Admissions"
        title="Request a Meeting"
        description="We believe the best way to start is with a real conversation. Request a one-on-one meeting with our team — no forms, no pressure, just an honest chat about your child."
        breadcrumb={[
          { label: "Admissions", href: "/admissions" },
          { label: "Request a Meeting", href: "/admissions/request-meeting" },
        ]}
      />

      <section
        style={{ background: "var(--color-surface)" }}
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Form */}
            <div>
              <RequestMeetingForm />
            </div>

            {/* Right: What happens next */}
            <div className="space-y-8">
              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: "var(--color-primary)" }}
                >
                  What Happens After You Request a Meeting?
                </h2>
                <p
                  className="text-base leading-relaxed mb-8"
                  style={{ color: "var(--color-on-surface)" }}
                >
                  We don&apos;t believe in rushing families into decisions. Our
                  approach starts with listening &mdash; understanding your child,
                  your concerns, and what you&apos;re looking for in a school.
                </p>

                <div className="space-y-5">
                  {whatHappensNext.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{
                          background: "var(--color-primary)",
                          color: "#ffffff",
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h3
                          className="font-semibold text-base mb-1"
                          style={{ color: "var(--color-on-surface)" }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--color-on-surface)" }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prefer WhatsApp */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "linear-gradient(135deg, rgba(94,0,129,0.10) 0%, rgba(240,192,64,0.07) 100%)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(94,0,129,0.20)",
                  boxShadow: "0 8px 32px rgba(94,0,129,0.10), inset 0 1px 0 rgba(255,255,255,0.55)",
                }}
              >
                <h3
                  className="font-bold text-base mb-2"
                  style={{ color: "var(--color-primary)" }}
                >
                  Prefer to Message Us First?
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{ color: "var(--color-on-surface)" }}
                >
                  Send us a quick WhatsApp &mdash; no forms required. We respond to
                  all enquiries, usually within a few hours.
                </p>
                <a
                  href="https://wa.me/264817296626?text=Hi%21+I%27d+like+to+request+a+meeting+at+IA+Academy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{ background: "#25D366", color: "#ffffff" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.523 5.854L.057 23.077a.75.75 0 00.921.921L6.2 22.481A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.497-5.197-1.367l-.374-.216-3.877 1.017 1.018-3.804-.234-.387A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  Message Us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
