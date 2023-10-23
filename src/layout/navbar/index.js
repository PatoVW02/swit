import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/speakers" activeClassName="active">
            Speakers
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/registration" activeClassName="active">
            Registration
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
