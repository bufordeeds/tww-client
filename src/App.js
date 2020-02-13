import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import Cart from "./Cart";
import Home from "./Home";
import Nav from "./Nav";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import OrderConfirmation from './OrderConfirmation'
import OrderHistory from './OrderHistory'
import Map from './Map'

// Fontawesome Shit
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

library.add({ faShoppingCart });

function App() {
  // const [isloggedIn, setIsLoggedIn] = useState(false); // eslint-disable-line
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);

  return (
    <>
      <Nav cartLength={cart.length} setCart={setCart} />
      <Switch>
        <Route exact path="/">
          <Home
            cart={cart}
            setCart={setCart}
            order={order}
            setOrder={setOrder}
          />
        </Route>
        <Route path="/checkout">
          <Cart
            cart={cart}
            order={order}
            setOrder={setOrder}
            setCart={setCart}
          />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/order-confirmation">
          <OrderConfirmation />
        </Route>
        <Route path="/order-history">
          <OrderHistory />
        </Route>
        <Route path="/directions">
          <Map />
        </Route>
      </Switch>
    </>
  );
}

export default withRouter(App);
