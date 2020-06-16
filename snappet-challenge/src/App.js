import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header} />
      <Switch></Switch>
    </div>
  );
}

export default App;
