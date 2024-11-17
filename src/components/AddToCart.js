import React, { useContext } from 'react';
import { StateContext } from './context/AppProvider';

function AddToCart() {
  const { cartItems, removeFromCart, clearCart } = useContext(StateContext);

  let finalCart = cartItems.map((item, index) => (
    <div className="cart-item" key={index}>
      <img src={item.image} alt="meal" className="cart-item-image" />
      <div className="cart-item-details">
        <h4 className="cart-item-name">{item.name}</h4>
        <p className="cart-item-price">${item.price}</p>
        <button
          className="remove-item-btn"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  ));

  return (
    <div className="add-to-cart">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button className="clear-cart-btn" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          finalCart
        ) : (
          <div className="empty-cart">
            <h3>Your cart is empty</h3>
            <p>Add some items to your cart to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddToCart;
