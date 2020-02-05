import React, { useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import Cart from "./Cart";
import Home from "./Home";
import Nav from "./Nav";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

// Fontawesome Shit
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

library.add({ faShoppingCart });

function App() {
  const [isloggedIn, setIsLoggedIn] = useState(false); // eslint-disable-line
  const [cart, setCart] = useState([]);

  return (
    <>
      <Nav setIsLoggedIn={setIsLoggedIn} cartLength={cart.length} />
      <Switch>
        <Route exact path="/">
          <Home cart={cart} setCart={setCart} />
        </Route>
        <Route path="/checkout">
          <Cart cart={cart} />
        </Route>
        <Route path="/sign-in">
          <SignIn setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/sign-up">
          <SignUp setIsLoggedIn={setIsLoggedIn} />
        </Route>
      </Switch>
    </>
  );
}

export default withRouter(App);
