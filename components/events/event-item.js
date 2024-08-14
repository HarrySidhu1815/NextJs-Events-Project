import Button from '../UI/button.js'
import React from 'react'
import classes from './event-item.module.css'
import DateIcon from '../icons/date-icon.js'
import AddressIcon from '../icons/address-icon.js'
import ArrowRightIcon from '../icons/arrow-right-icon.js'

export default function EventItem({title, image, id, date, location}) {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const address = location.replace(', ', '\n')
    const hrefLink = `/events/${id}`
  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title}/>
      <div className={classes.content}>
        <div className={classes.summary}>
            <h2>{title}</h2>
            <div className={classes.date}>
                <DateIcon />
                <time>{formattedDate}</time>
            </div>
            <div className={classes.address}>
                <AddressIcon />
                <address>{address}</address>
            </div>
        </div>
        <div className={classes.actions}>
            <Button link={hrefLink}>
            <span>Explore Me</span>
            <span className={classes.icon}><ArrowRightIcon /></span>
            </Button>
        </div>
      </div>
    </li>
  )
}
