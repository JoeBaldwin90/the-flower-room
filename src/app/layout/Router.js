import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./../Home";
import Shop from "./../Shop";
import About from "./../About";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/shop" component={Shop} />
    <Route path="/about" component={About} />
  </Switch>
);
export default Router;
