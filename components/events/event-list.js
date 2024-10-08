import React from "react";
import EventItem from "./event-item";
import classes from './event-list.module.css'

export default function EventList({ items }) {
  return (
    <ul className={classes.list}>
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
