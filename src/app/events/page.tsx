import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import EventsClient from "./EventsClient";

export const metadata: Metadata = {
  title: "Events Calendar",
  description: "Upcoming events, exam dates, term activities and school functions at Innovative Academics Academy.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        label="Resources"
        title="Events Calendar"
        description="Stay up to date with upcoming school events, exam dates, term activities and important dates."
        breadcrumb={[{ label: "Events Calendar", href: "/events" }]}
      />
      <EventsClient />
    </>
  );
}
