import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/HomePage";

const Hats = (props) => {
  console.log(props);
  return <h1>HATS PAGE </h1>;
};

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={Hats} />
      </Switch>
    </>
  );
}

export default App;
