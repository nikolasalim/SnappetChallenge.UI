import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import LearningsList from "./components/LearningsList";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header} />
      <Switch>
        <Route path="/" component={LearningsList} />
      </Switch>
    </div>
  );
}

export default App;
