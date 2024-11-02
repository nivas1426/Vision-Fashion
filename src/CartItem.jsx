import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping, reactivateAddButton }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    if (cart.length === 0) return (0)
    return cart.reduce((total, item) => total + calculateTotalCost(item), 0);
  };

  const handleContinueShopping = () => {
    onContinueShopping && onContinueShopping();
    };
  
  const handleIncrement = (item) => {
    const quantity=item.quantity+1;   
    dispatch(updateQuantity({name:item.name,quantity:quantity}));
  };

  const handleDecrement = (item) => {
    if (item && item.quantity > 1) {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else if (item && item.quantity === 1) {
        handleRemove(item);
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
    if (reactivateAddButton) {
      reactivateAddButton(item);
    }
  };

  const calculateTotalCost = (item) => {
    const numericCost = parseFloat(item.cost.replace('$', ''));
    const cost=item.quantity * numericCost;
    return cost;
  };
  const handleCheckoutShopping = (e) => {
    e.preventDefault();
    alert('To be Updated soon');
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.length === 0 ? (
            <p>Your cart is empty.</p>
            ) : (
            cart.map(item => (
            <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))
        )}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={handleContinueShopping}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={handleCheckoutShopping}>
            Checkout
        </button>

      </div>
    </div>
  );
};

export default CartItem;