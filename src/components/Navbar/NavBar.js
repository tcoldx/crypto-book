import React, { useState } from "react";
import { changeCurrency } from "store/global/actions";
import { getSearch } from "store/global/actions";
import { useDispatch, useSelector } from "react-redux";
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
  ThemeWrap,
  Overview,
  ButtonWrap,
  ItemsWrap,
  Item,
  StyledLink,
} from "./NavBar.styles";

const NavBar = (props) => {
  const [close, setClose] = useState(false);

  const dispatch = useDispatch();
  const { coins } = useSelector((state) => state.global);

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(changeCurrency(value));
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    if (value === "") {
      setClose(true);
    } else {
      setClose(false);
    }
    dispatch(getSearch(value));
  };

  const handleClick = () => {
    setClose(true);
  };

  return (
    <NavWrap>
      <Nav>
        <NavLeft>
          <Overview>
            <h2>Overview</h2>
          </Overview>
          <ButtonWrap>
            <Button activeClassName="active" exact to="/">
              Coins
            </Button>
            <Button activeClassName="active" exact to="/portfolio">
              Portfolio
            </Button>
          </ButtonWrap>
        </NavLeft>
        <NavRight>
          <SearchWrap>
            <img width={15} height={15} src={SearchIcon} alt="search" />
            <Search
              onChange={(e) => handleSearch(e)}
              type="search"
              placeholder="Search..."
            />
            {close ? null : (
              <ItemsWrap>
                {coins?.map((el) => {
                  return (
                    <Item onClick={handleClick} key={el.id}>
                      <StyledLink to={`/coin/${el.id}`}>{el.name}</StyledLink>
                    </Item>
                  );
                })}
              </ItemsWrap>
            )}
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
          <ThemeWrap>
            <ThemeToggle toggle={props.toggle} />
          </ThemeWrap>
        </NavRight>
      </Nav>
    </NavWrap>
  );
};

export default NavBar;
