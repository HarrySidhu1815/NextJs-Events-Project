import React from 'react'
import { getFeaturedEvents } from '../dummy_data'
import EventList from '../components/event-list'

export default function HomePage() {
    const featuredEvents = getFeaturedEvents()
  return (
    <EventList items={featuredEvents} />
  )
}
