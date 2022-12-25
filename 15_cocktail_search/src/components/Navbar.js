import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="cock-tail-db-logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
