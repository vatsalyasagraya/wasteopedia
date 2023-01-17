import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/home"  className="nav-logo" onClick={() => scrollTo("Home")}>
            Waste-O-Pedia
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={() => scrollTo("About")}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/problem"
                activeClassName="active"
                className="nav-links"
                onClick={() => scrollTo("Problem")}
              >
                Problem
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/solution"
                activeClassName="active"
                className="nav-links"
                onClick={() => scrollTo("Solution")}
              >
                Solution
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={() => scrollTo("Contact")}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
