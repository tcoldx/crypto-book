import React from "react";
import Theme from "assets/Images/ThemeIcon.svg";
import SearchIcon from "assets/Images/SearchIcon.svg";
import CurrencySign from "assets/Images/Currency.svg";
import {
  NavWrap,
  NavRight,
  NavLeft,
  Nav,
  Search,
  Button,
  SearchWrap,
  ThemeChange,
  SelectWrap,
  CurrencyWrap,
  Select,
} from "./NavBar.styles";

const NavBar = () => {
  return (
    <NavWrap>
      <Nav>
        <NavLeft>
          <Button to="/">Coins</Button>
          <Button to="/portfolio">Portfolio</Button>
        </NavLeft>
        <NavRight>
          <SearchWrap>
            <img width={15} height={15} src={SearchIcon} alt="search" />
            <Search type="search" placeholder="Search..." />
          </SearchWrap>
          <SelectWrap>
            <CurrencyWrap>
              <img src={CurrencySign} width={15} height={15} alt="sign" />
            </CurrencyWrap>
            <Select>
              <option>BTC</option>
            </Select>
          </SelectWrap>
          <ThemeChange>
            <img src={Theme} width={20} height={20} alt="theme" />
          </ThemeChange>
        </NavRight>
      </Nav>
    </NavWrap>
  );
};

export default NavBar;
