import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/homepage/HomePage";
import Shop from "./components/pages/shop/Shop";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </>
  );
}

export default App;
