import React from "react";
import "./App.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Switch, Route, withRouter } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import Nav from "./Nav";
import FilterNav from "./FilterNav";

function App() {
  // eslint-disable-next-line
  const [isloggedIn, setIsLoggedIn] = useState(false);
  
  return (
      <>
      <Nav setIsLoggedIn={setIsLoggedIn} />
      <FilterNav />
      <Switch>
        <Route exact path="/">
          <Home />
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
