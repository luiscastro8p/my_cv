import React from "react";
import "./index.css";

const Navbar = () => {
  return (
    <div className="header container ">
      <h2>Portafolio</h2>
      <nav className="menu">
        <ul>
          <li>
            <a>Inicio</a>
          </li>
          <li>
            <a>Habilidades</a>
          </li>
          <li>
            <a>Servicios</a>
          </li>
          <li>
            <a>Reseñas</a>
          </li>
          <li>
            <a>Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
