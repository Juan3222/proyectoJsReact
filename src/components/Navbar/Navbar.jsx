import React from "react";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="nav">
        <h1>Librería PandaPerezoso</h1>
        <div className="category">
          <ul>
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Libros</a>
            </li>
            <li>
              <a href="">Comics</a>
            </li>
          </ul>
          <CartWidget />
        </div>
      </nav>
    </>
  );
}
export default Navbar;
