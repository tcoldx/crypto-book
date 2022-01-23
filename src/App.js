import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styling/GlobalStyle";
import { NavBar, NavUnder } from "components";
import { Home, Coin, Portfolio } from "pages";

import { darkTheme, lightTheme } from "styling/theme";
import { Container } from "App.css";

function App() {
  const [toggle, setToggle] = useState(true);
  const toggleTheme = () => setToggle(!toggle);
  const theme = toggle ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Router>
          <NavBar toggle={toggleTheme} />
          <NavUnder />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/coin/coinId" component={Coin} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
