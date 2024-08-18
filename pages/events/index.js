import React from 'react'
import { getAllEvents } from '../../helpers/api-utils'
import EventList from '../../components/events/event-list'
import EventSearch from '../../components/event-search/event-search'
import { useRouter } from 'next/router'

export default function EventPage(props) {
  const {events} = props
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

export async function getStaticProps() {
  const events = await getAllEvents()

  return {
    props: {
      events: events
    },
    revalidate: 60
  }
}
