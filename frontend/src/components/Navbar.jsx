import React from 'react'
import plusicon from '../assets/plus-svgrepo-com.svg'
import './Nav.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="right">
        <a href="/">Product Store</a>
        </div>
        <div className="right">
            <a href="/create">
                <img src={plusicon} alt="" />
            </a>
        </div>
    </div>
  )
}

export default Navbar