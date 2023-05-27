import React, { useState } from 'react';
import { restaurantData } from '../data/restaurantData';

function RestaurantSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Función para realizar la búsqueda
  const handleSearch = (event) => {
    event.preventDefault();
    const filteredResults = restaurantData.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  // Función para manejar cambios en el campo de búsqueda
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h1>Búsqueda de restaurantes</h1>

      <form onSubmit={handleSearch}>
        <input type="text" value={searchQuery} onChange={handleChange} placeholder="Buscar por nombre" />
        <button type="submit">Buscar</button>
      </form>

      {/* Mostrar los resultados de la búsqueda */}
      {searchResults.map((restaurant) => (
        <div key={restaurant.id}>
          <h3>{restaurant.name}</h3>
          <p>{restaurant.description}</p>
          <p>{restaurant.address}</p>
          <img src={restaurant.image} alt={restaurant.name} />
        </div>
      ))}
    </div>
  );
}

export default RestaurantSearch;

  