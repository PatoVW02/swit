import React from 'react';
import logo from '../../assets/logo.jpeg';
import './navbar.css'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/" exact className="logo">
          <img src={logo} alt="Home" style={{ height: "3rem" }} />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/speakers" activeStyle>
            Conferencistas
          </NavLink>

          <NavLink to="/registration" activeStyle>
            Registro
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contacto
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
