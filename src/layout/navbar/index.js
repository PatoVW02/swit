import React from 'react';
import './navbar.css'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
      <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/speakers' activeStyle>
            Speakers
          </NavLink>
          

          <NavLink to='/registration' activeStyle>
            Registration
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>
          
          
        </NavMenu>
        
      </Nav>
    </>
  );
};

export default Navbar;
