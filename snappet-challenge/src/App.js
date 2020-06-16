import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Learning from "./components/Learning";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header} />
      <Switch>
        <Route path="/" component={Learning} />
      </Switch>
    </div>
  );
}

export default App;
