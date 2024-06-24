import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='Navbar'>
        <h1>Hello World</h1>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/users">users</Link>
            <Link to="/about">About</Link>
            <Link to="/conduct">Contact</Link>

        </ul>
    </nav>
  )
}

export default Navbar