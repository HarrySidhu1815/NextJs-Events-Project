import React from "react";
import EventItem from "./event-item";

export default function EventList({ items }) {
  return (
    <ul>
      {items.map((event) => (
        <EventItem
          key={event.id}
          title={event.title}
          image={event.image}
          id={event.id}
          location={event.location}
          date={event.date}
        />
      ))}
    </ul>
  );
}
