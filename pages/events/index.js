import React from 'react'
import { getAllEvents } from '../../dummy_data'
import EventList from '../../components/events/event-list'
import EventSearch from '../../components/event-search/event-search'

export default function EventPage() {
  const events = getAllEvents()

  return (
    <>
      <EventSearch />
      <EventList items={events} />
    </>
  )
}
