import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./../Home";
import Shop from "./../Shop";
import Info from "./../Info";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/shop" component={Shop} />
    <Route path="/info" component={Info} />
  </Switch>
);
export default Router;
