import React from "react";
import { Route,Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <>
      <Navigation />

      <Switch>
        <Route path="/register" component={Register} /> 
          <Route path="/login" component={Login} /> 
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  );
};

export default App;
