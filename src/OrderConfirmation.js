import React from 'react';
import { Link } from 'react-router-dom'

const OrderConfirmation = () => {
  return (
    <div>
      <h3>We've got your order and it will be ready in 15-20 minutes!</h3>
      <Link to='/'>Home</Link> <Link to='/order-history'>Order History</Link>
    </div>
  );
}

export default OrderConfirmation;
