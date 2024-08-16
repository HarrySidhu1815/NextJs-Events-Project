import React from 'react'
import { getAllEvents } from '../../dummy_data'
import EventList from '../../components/events/event-list'

export default function EventPage() {
  const events = getAllEvents()

  return (
    <div>
      <EventList items={events} />
    </div>
  )
}
