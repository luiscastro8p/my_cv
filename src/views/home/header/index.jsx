import React from "react";
import "./index.css";

const Navbar = () => {
  return (
    <div className="header container ">
      <h2>Portafolio</h2>
      <nav className="menu">
        <ul>
          <li>
            <a data-item="Home">Home</a>
          </li>
          <li>
            <a data-item="Habilidades">Habilidades</a>
          </li>
          <li>
            <a data-item="Servicios">Servicios</a>
          </li>
          <li>
            <a data-item="Reseñas">Reseñas</a>
          </li>
          <li>
            <a data-item="Contacto">Contacto</a>
          </li>
          <li>
            <button className="btn-dark">Más sobre mí</button>

          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
