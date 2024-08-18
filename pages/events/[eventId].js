import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { getAllEvents, getEventById } from "../../helpers/api-utils";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

export default function EventDetailPage({selectedEvent}) {


  if (!selectedEvent) {
    return <p>No Records Found</p>;
  }
  return (
    <Fragment>
      <EventSummary title={selectedEvent.title} />
      <EventLogistics
        date={selectedEvent.date}
        address={selectedEvent.location}
        image={selectedEvent.image}
        imageAlt={selectedEvent.title}
      />
      <EventContent>{selectedEvent.description}</EventContent>
    </Fragment>
  );
}

export async function getStaticProps(context){
  const eventId = context.params.eventId

  const selectedEvent = await getEventById(eventId)

  return {
    props: {
      selectedEvent
    }
  }
}

export async function getStaticPaths() {
  const allEvents = await getAllEvents()

  const allPaths = allEvents.map((event) => ({params: {eventId: event.id}}))
  return {
    paths: allPaths,
    fallback: false
  }
}