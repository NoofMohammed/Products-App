import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/product";
import Carousel from "react-bootstrap/Carousel";

const App = () => {
  return (
    <>
      <Navigation />

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  );
};

export default App;
