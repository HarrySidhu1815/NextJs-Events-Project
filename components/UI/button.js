import Link from 'next/link'
import React from 'react'
import classes from './button.module.css'

export default function button({link, onClick, children}) {
  if(link){
    return (
      <Link href={link} className={classes.btn}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes.btn} onClick={onClick}>{children}</button>
  )
}
