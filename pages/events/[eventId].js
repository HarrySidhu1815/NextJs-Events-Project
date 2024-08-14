import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { getEventById } from "../../dummy_data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

export default function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;

  const event = getEventById(eventId);

  if (!event) {
    return <p>No Records Found</p>;
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>{event.description}</EventContent>
    </Fragment>
  );
}
