import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const navigate = useNavigate()

  const handleClick = ()=>{
    //api calls
    navigate("/")
  }
  return (
    <nav className='Navbar'>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/users">users</Link>
            {/* <li navigate={handleClick}>Users</li> */}
            <Link to="/about">About</Link>
            <Link to="/conduct">Contact</Link>

        </ul>
    </nav>
  )
}

export default Navbar