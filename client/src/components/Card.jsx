import React from 'react';

const Card = ({ restaurant }) => {
  const categories = [];

  for (let i = 0; i < restaurant.categories.length; i++) {
    categories.push(restaurant.categories[i].title);
  }

  return (
    <div className="card">
      <div
        className="card-img"
        style={{ backgroundImage: `url(${restaurant.image_url})` }}
      />
      <p>Category: { categories.join(', ') }</p>
      <p>Name: {restaurant.name}</p>
      <p>Rating: {restaurant.rating}</p>
      <p>Price: {restaurant.price}</p>
    </div>
  )
}

export default Card;