import Link from 'next/link'
import React from 'react'

export default function EventItem({title, image, id, date, location}) {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const address = location.replace(', ', '\n')
    const hrefLink = `/events/${id}`
  return (
    <li>
      <img src={'/' + image} alt={title}/>
      <div>
        <div>
            <h1>{title}</h1>
            <div>
                <time>{formattedDate}</time>
            </div>
            <div>
                {address}
            </div>
        </div>
        <div>
            <Link href={hrefLink}>Explore More</Link>
        </div>
      </div>
    </li>
  )
}
