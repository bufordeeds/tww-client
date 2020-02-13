import React from "react";
import CardContainer from "./components/Card/CardContainer";
import CartItem from "./components/CartItem";
import axios from "axios";
import {Link} from 'react-router-dom'

const Cart = ({ cart, setCart }) => {
  const orders = [];

  const getTotal = cart => {
    let total = 0;
    cart.forEach(item => {
      total += item.price;
    });
    return total;
  };
  const total = getTotal(cart)
  const tax = getTotal(cart) * 0.0825
  const customer = localStorage.customer && JSON.parse(localStorage.customer);
  let orderId;

  cart.forEach(item => {
    const foundOrder = orders.find(el => {
      return item.name === el.name;
    });
    if (foundOrder) {
      foundOrder.quantity++;
    } else {
      const newOrder = {};

      newOrder.id = item.id;
      newOrder.name = item.name;
      newOrder.price = item.price;
      newOrder.quantity = 1;

      orders.push(newOrder);
    }
  });

  const createOrder = () => {
    axios
      .post("http://localhost:3000/api/v1/orders", {
        completed: false,
        customer_id: customer.id
      })
      .then(result => {
        localStorage.setItem("orderId", result.data.order.id);
        orderId = result.data.order.id;
        postOrder();
        console.log(result.data, "uncompleted order created");
      })
      .catch(err => {
        console.log(err, "error");
      });
  };

  const postOrder = () => {
    orders.forEach(orderItem => {
      axios
        .post("http://localhost:3000/api/v1/order_items", {
          item_id: orderItem.id,
          order_id: orderId,
          quantity: orderItem.quantity
        })
        .then(result => {
          console.log(result, "adding order item/s to order");
        })
        .catch(err => {
          console.log(err, "error");
        });
    });
    orderComplete();
  };

  const orderComplete = () => {
    axios
      .patch(`http://localhost:3000/api/v1/orders/${orderId}`, {
        completed: true
      })
      .then(() => { localStorage.removeItem("orderId")})
      .catch(error => {
        console.log(error);
      });
      setCart([])
  };

  return (
    <CardContainer>
      <h2>Ordering from Rainy Street Location</h2>
      {orders.map((order, id) => (
        <CartItem key={id} order={order} />
      ))}
      -----------------<br></br>
      Subtotal: ${total.toFixed(2)}
      <br />
      Sales Tax: ${tax.toFixed(2)}
      <br />
      Total: ${(total + tax).toFixed(2)}
      <br />
      <br></br>
      {localStorage.jwt ? (
        <>
          {" "}
          <Link to="/">Order More</Link>{" "}
          <Link
            to="/order-confirmation"
            onClick={() => {
              createOrder();
            }}
          >
            Pay At Restaurant
          </Link>
        </>
      ) : (
        <Link to="/sign-in">Sign In To Pay</Link>
      )}
    </CardContainer>
  );
};

export default Cart;
