import React from "react";
import {
  NavLink,
  Nav,
  Bars,
  NavMenu,
  KontaktForma,
  Wrap,
} from "../styles/Navbar.style";
import { BrowserRouter as Router } from "react-router-dom";
export const Navbar = ({}) => {
  return (
    <Router>
      <Wrap>
        <Nav>
          <NavMenu>
            <NavLink to="/Ivan">Ivan</NavLink>
            <NavLink
              activeStyle={{ "box-shadow": "inset 0 -5px 0 #FC91BD" }}
              to="/Karlo"
            >
              Karlo
            </NavLink>
            <NavLink
              activeStyle={{ "box-shadow": "inset 0 -5px 0 #D14C36" }}
              to="/Anja"
            >
              Anja
            </NavLink>
            <NavLink
              activeStyle={{ "box-shadow": "inset 0 -5px 0 #FFE36F" }}
              to="/Matija"
            >
              Matija
            </NavLink>
            <NavLink
              activeStyle={{ "box-shadow": "inset 0 -5px 0 #C6C9D2" }}
              to="/Lea"
            >
              Lea
            </NavLink>
          </NavMenu>
          <Bars />
          <KontaktForma to="/kontakt">
            <span>Forma za kontakt</span>
          </KontaktForma>
        </Nav>
      </Wrap>
    </Router>
  );
};

export default Navbar;
