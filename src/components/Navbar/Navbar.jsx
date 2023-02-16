import React from "react";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Navbar className="nav">
      <NavLink to="/" className="">
        Juan
      </NavLink>
      <NavLink></NavLink>
    </Navbar>
  );
}
export default Navbar;
