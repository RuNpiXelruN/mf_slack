import React, { PropTypes } from 'react'
import { Link } from 'react-router'

  Navigation.proptypes = {
    isAuthed: PropTypes.bool.isRequired
  }

  function NavLinks ({isAuthed}) {
    return isAuthed === true
    ? <ul>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='logout' >Logout</Link></li>
      </ul>
    : <ul>
        <li>Home</li>
        <li>Login</li>
      </ul>
  }

export default function Navigation ({isAuthed}) {
  return (
    <div>
      <NavLinks isAuthed={isAuthed} />
    </div>
  )
}
