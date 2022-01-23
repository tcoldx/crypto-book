import React from "react";
import { changeCurrency } from "store/global/actions";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(changeCurrency(value));
  };
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
            <Select onChange={handleChange}>
              <option value="btc">BTC</option>
              <option value="eth">ETH</option>
              <option value="gbp">GBP</option>
              <option value="eur">EUR</option>
              <option value="usd">USD</option>
            </Select>
          </SelectWrap>
          <ThemeToggle toggle={props.toggle} />
        </NavRight>
      </Nav>
    </NavWrap>
  );
};

export default NavBar;
