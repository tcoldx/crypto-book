import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Coin, Portfolio } from "pages";
import { NavBar, NavUnder } from "components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <NavUnder />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/coin" component={Coin} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
