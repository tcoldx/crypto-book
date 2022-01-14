import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Coin, Portfolio } from "pages";
import { NavBar, NavUnder } from "components";
import { GlobalStyle } from "styling/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Container } from "App.css";

function App() {
  const [toggle, setToggle] = useState(false);

  const darkTheme = {
    main: "#191B1F",
    color: "white",
    card: {
      main: "#1F2128",
      secondary: "#2C2F36",
    },
  };

  const lightTheme = {
    main: "#FFFFFF",
    color: "black",
    card: {
      main: "#FCFCFC",
      secondary: "#FCFCFC",
    },
  };

  const handleClick = () => {
    setToggle(toggle ? false : true);
  };

  return (
    <ThemeProvider theme={toggle ? lightTheme : darkTheme}>
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
