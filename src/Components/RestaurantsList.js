import React from 'react';
import Restaurant from './Restaurant';

function RestaurantList({ restaurants }) {
    return (
      <div>
        {restaurants.map((restaurant) => (
          <Restaurant key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    );
  }