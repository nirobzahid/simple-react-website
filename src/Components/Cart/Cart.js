import React from 'react';

const Cart = (props) => {
  const cart = props.cart;
  return (
    <div>
      <h3>Summary</h3>
  <p>Number of friends: {cart.length}</p>
    </div>
  );
};

export default Cart;