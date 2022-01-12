import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Coin, Portfolio } from "pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/coin" component={Coin} />
          <Route path="/portfolio" component={Portfolio} />
          <Route />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
