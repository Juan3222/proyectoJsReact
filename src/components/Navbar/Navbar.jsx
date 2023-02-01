import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="nav">
        <h1>Librería PandaPerezoso</h1>
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
      </nav>
    </>
  );
}
export default Navbar;
