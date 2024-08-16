import React from 'react'
import { getAllEvents } from '../../dummy_data'
import EventList from '../../components/events/event-list'
import EventSearch from '../../components/event-search/event-search'
import { useRouter } from 'next/router'

export default function EventPage() {
  const events = getAllEvents()
  const router = useRouter()

  function handleFilteredData(selectedYear, selectedMonth){
    const fullPath = `/events/${selectedYear}/${selectedMonth}`

    router.push(fullPath)
  }

  return (
    <>
      <EventSearch onSearch={handleFilteredData}/>
      <EventList items={events} />
    </>
  )
}
