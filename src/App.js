import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Coin, Portfolio } from "pages";
import { NavBar, NavUnder } from "components";
import { GlobalStyle } from "styling/GlobalStyle";
import { darkTheme, lightTheme } from "styling/theme";
import { ThemeProvider } from "styled-components";
import { Container } from "App.css";

function App() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(toggle ? false : true);
  const toggleTheme = () => (toggle ? lightTheme : darkTheme);
  return (
    <ThemeProvider theme={toggleTheme}>
      <Container>
        <GlobalStyle />
        <Router>
          <NavBar handleClick={handleClick} />
          <NavUnder />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/coin" component={Coin} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route />
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
