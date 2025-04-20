import React from 'react'
import plusicon from '../assets/plus-svgrepo-com.svg'
import './Nav.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <a href="/">Product Store</a>
        <div className="right">
        </div>
        <div className="right">
            <a href="/create">
            Create Product
                <img src={plusicon} alt="" />
            </a>
        </div>
    </div>
  )
}

export default Navbar