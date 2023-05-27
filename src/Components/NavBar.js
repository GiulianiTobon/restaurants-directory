import React from 'react';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#home">Inicio</a>
        </li>
        <li>
          <a href="#search">Búsqueda de Restaurantes</a>
        </li>
        <li>
          <a href="#new-restaurant">Nuevo Restaurante</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
