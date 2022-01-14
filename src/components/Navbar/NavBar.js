import React from "react";
import ThemeToggle from "components/ThemeToggle";
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
  SelectWrap,
  CurrencyWrap,
  Select,
} from "./NavBar.styles";

const NavBar = (props) => {
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
          <ThemeToggle handleClick={props.handleClick} />
        </NavRight>
      </Nav>
    </NavWrap>
  );
};

export default NavBar;
