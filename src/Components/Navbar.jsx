import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar'>
            <ul>
                <li><NavLink className={'nav'} to="/">Home</NavLink></li>
                <li><NavLink className={'nav'} to="/about">About</NavLink></li>
                <li><NavLink className={'nav'} to="/contact">Contact</NavLink></li>
                <li><NavLink className={'nav'} to="/projects">Projects</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar