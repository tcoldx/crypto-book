import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, StyledNotify } from "./App.styles";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styling/GlobalStyle";
import { NavBar, NavUnder, MobileSearch } from "./components";
import { Home, Coin, Portfolio, Chat, WatchList } from "./pages";
import { darkTheme, lightTheme } from "./styling/theme";
import MobileNavBar from "./components/MobileNavBar";
function App() {
  const [toggle, setToggle] = useState(true);
  const toggleTheme = () => setToggle(!toggle);
  const theme = toggle ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StyledNotify autoClose={1300}/>
        <GlobalStyle />
        <Router>
          <NavBar toggle={toggleTheme} />
          <NavUnder />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/coin/:coinId" component={Coin} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/chat" component={Chat}/>
            <Route exact path="/search" component={MobileSearch} />
            <Route exact path="/watchlist" component={WatchList}/>
          </Switch>
          <MobileNavBar />
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
