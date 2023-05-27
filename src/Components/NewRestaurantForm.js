import React, { useState } from 'react';
import restaurantsData from './data/RestaurantsData';

function NewRestaurantForm() {
  // Estado local para almacenar los datos del nuevo restaurante
  const [newRestaurant, setNewRestaurant] = useState({
    name: '',
    description: '',
    address: '',
    image: '',
  });

  // Manejador para guardar el nuevo restaurante en la lista
  const handleSaveRestaurant = (event) => {
    event.preventDefault();
    const updatedRestaurantsData = [...restaurantsData, newRestaurant];
    // Actualizar los datos de los restaurantes en restaurantsData.js
    restaurantsData.splice(0, restaurantsData.length, ...updatedRestaurantsData);
    // Reiniciar los datos del nuevo restaurante
    setNewRestaurant({
      name: '',
      description: '',
      address: '',
      image: '',
    });
  };

  // Manejadores de cambio para actualizar el estado del nuevo restaurante
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewRestaurant((prevRestaurant) => ({ ...prevRestaurant, [name]: value }));
  };

  // Renderizar el formulario para crear un nuevo restaurante
  return (
    <form onSubmit={handleSaveRestaurant}>
      <input
        type="text"
        name="name"
        value={newRestaurant.name}
        onChange={handleChange}
        placeholder="Nombre"
      />
      <input
        type="text"
        name="description"
        value={newRestaurant.description}
        onChange={handleChange}
        placeholder="Descripción"
      />
      <input
        type="text"
        name="address"
        value={newRestaurant.address}
        onChange={handleChange}
        placeholder="Dirección"
      />
      <input
        type="text"
        name="image"
        value={newRestaurant.image}
        onChange={handleChange}
        placeholder="URL de la imagen"
      />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default NewRestaurantForm;
