import React from 'react';
import RestaurantList from './RestaurantList';
import restaurantsData from './data/restaurantsData';

function HomePage() {
    return (
      <div>
        <h2>Restaurantes</h2>
        {restaurantsData.map((restaurant) => (
          <div key={restaurant.id}>
            <img src={restaurant.image} alt={restaurant.name} />
            <h3>{restaurant.name}</h3>
            <p>{restaurant.address}</p>
            <p>{restaurant.description}</p>          
          </div>
        ))}
      </div>
    );
  } 
  