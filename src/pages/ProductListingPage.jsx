import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { plantsData } from '../data/plantsData';
import './ProductListingPage.css';

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  const isInCart = (id) => {
    return cartItems.some(item => item.id === id);
  };

  // Group plants by category
  const plantsByCategory = plantsData.reduce((acc, plant) => {
    if (!acc[plant.category]) {
      acc[plant.category] = [];
    }
    acc[plant.category].push(plant);
    return acc;
  }, {});

  return (
    <div className="product-listing">
      <h1>Our Plants</h1>
      
      {Object.entries(plantsByCategory).map(([category, plants]) => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <div className="plants-grid">
            {plants.map(plant => (
              <div key={plant.id} className="plant-card">
                <img src={plant.image} alt={plant.name} className="plant-image" />
                <h3>{plant.name}</h3>
                <p className="price">${plant.price.toFixed(2)}</p>
                <button 
                  onClick={() => handleAddToCart(plant)}
                  disabled={isInCart(plant.id)}
                  className={isInCart(plant.id) ? 'btn-disabled' : ''}
                >
                  {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;