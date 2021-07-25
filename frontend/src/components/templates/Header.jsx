import React from 'react'
import './Header.css'

export default function Header(props) {
  return (
    <header className="header d-none d-sm-flex flex-column">
      <h1 className="mt-3">
        <i className={`fa fa-${props.icon}`}>{props.title}</i>
      </h1>
      <p className="lead text-muted">{props.subtitle}</p>
    </header>
  )
}
