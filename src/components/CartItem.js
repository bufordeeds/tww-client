import React from "react";

const CartItem = ({ order }) => {
  return (
    <>
      {order.name}: ${order.price.toFixed(2)} x {order.quantity}
      <br></br>
    </>
  );
};

export default CartItem;
