import React from "react";
import CardContainer from "./components/Card/CardContainer";
import CartItem from './components/CartItem';

const Cart = ({ cart }) => {
  return (
    <CardContainer>
      {cart.map(item => ( <CartItem key={item.id} item={item} /> ))}
    </CardContainer>
  );
};

export default Cart;
