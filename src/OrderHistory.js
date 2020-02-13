import React, { useState, useEffect } from "react";
import axios from "axios";
import CardContainer from "./components/Card/CardContainer";
import Moment from "react-moment";


const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const customer = localStorage.customer && JSON.parse(localStorage.customer);
  useEffect(() => {
    const api = "http://localhost:3000/api/v1/orders";
    axios.get(api).then(res => {
      setOrders(res.data);
    });
  }, []);

  const customerOrders = orders.filter(
    order => order.customer_id === customer.id
  );
  return (
    <div>
      <div>
        <h2>Order History</h2>

        {customerOrders.map(order => (
          <CardContainer key={order.id}>
            <h5>Order Picture Goes Here</h5>
            <div>
              <p>Order date:</p>{" "}
              <Moment format="MM/DD/YYYY hh:mm A">{order.updated_at}</Moment>
              <br></br>
            </div>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
