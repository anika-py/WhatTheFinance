import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../index.css'

export const Navbar = () => {
  return (
    <nav>
            <Link to='/WhatTheFinance' className='nav-title'>
                WTF
            </Link>
                    <NavLink to='/WhatTheFinance'>Home</NavLink>
                    <NavLink to='/Modules'>Modules</NavLink>
                    <NavLink to='/Discuss'>Discussion Forum</NavLink>
                    <NavLink to='/ContactUs'>Contact Us</NavLink>
                    <NavLink to='/Login'>Login/SignUp</NavLink>
    </nav>
  )
}