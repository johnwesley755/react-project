import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';
import './ShoppingCartPage.css';

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  
  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    alert('Coming Soon!');
  };

  return (
    <div className="shopping-cart">
      <h1>Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/products" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-summary">
            <p>Total Items: {totalQuantity}</p>
            <p>Total Cost: ${totalCost.toFixed(2)}</p>
          </div>
          
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)} each</p>
                </div>
                <div className="item-controls">
                  <button onClick={() => handleDecrease(item.id)} className="quantity-btn">
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button onClick={() => handleIncrease(item.id)} className="quantity-btn">
                    +
                  </button>
                </div>
                <button onClick={() => handleRemove(item.id)} className="remove-btn">
                  Delete
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-actions">
            <button onClick={handleCheckout} className="checkout-btn">
              Checkout
            </button>
            <Link to="/products" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCartPage;