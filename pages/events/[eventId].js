import React, { Fragment } from "react";
import { getEventById, getFeaturedEvents } from "../../helpers/api-utils";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import Head from "next/head";

export default function EventDetailPage({selectedEvent}) {


  if (!selectedEvent) {
    return <p>No Records Found</p>;
  }
  return (
    <Fragment>
      <Head>
      <title>{selectedEvent.title}</title>
        <meta
          name="description"
          content={selectedEvent.description}
        />
      </Head>
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
    },
    revalidate: 30
  }
}

export async function getStaticPaths() {
  const allEvents = await getFeaturedEvents()

  const allPaths = allEvents.map((event) => ({params: {eventId: event.id}}))
  return {
    paths: allPaths,
    fallback: 'blocking'
  }
}