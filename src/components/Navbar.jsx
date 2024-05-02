import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../index.css'

export const Navbar = () => {
  return (
    <nav>
            <Link to='/' className='nav-title'>
                WTF
            </Link>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/Modules'>Modules</NavLink>
                    <NavLink to='/Discuss'>Discussion Forum</NavLink>
                    <NavLink to='/ContactUs'>Contact Us</NavLink>
                    <NavLink to='/LoginSignup'>Login/SignUp</NavLink>
    </nav>
  )
}