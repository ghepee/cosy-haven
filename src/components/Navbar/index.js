import React from 'react'
import logo from '../../images/logo.png'
import '../../App.css'
import { Nav, NavLink, Bars, NavMenu} from './NavbarElements'

const Navbar = () => { 
  return (
    <>
     <Nav>
       <NavLink to="/">
           <img className='navbar__logo' src={logo} alt='logo' />
       </NavLink>
       <Bars />
       <NavMenu className='navbar__menu'>
       <NavLink to="/" activeStyle>
         Home
       </NavLink>
       <NavLink to="/about-us" activeStyle>
         About Us
       </NavLink>
       <NavLink to="/services" activeStyle>
         Services
       </NavLink>
       <NavLink to="/contact-us" activeStyle>
         Contact Us
       </NavLink>
       </NavMenu>
     </Nav>
    </>
  )
}

export default Navbar