import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const NavWrap = styled.div`
  width: 100%;
  background: ${(props) => props.theme.main};
  padding-block: 4px;
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-evenly;
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  height: 60px;
  width: 74%;
`;

export const SelectWrap = styled.div`
  background: ${(props) => props.theme.card.secondary};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 100px;
  transition: 900ms ease-out;

  &:hover {
    border: 1px solid green;
  }
`;

export const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 6px;
  width: 200px;
  padding-left: 8px;
  background: ${(props) => props.theme.card.secondary};
  height: 38px;
  transition: 900ms ease-out;

  &:hover {
    border: 1px solid green;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Search = styled.input`
  border-radius: 6px;
  border: none;
  width: 80%;
  outline: none;
  background: ${(props) => props.theme.card.secondary};
  height: 24px;
`;

export const Button = styled(NavLink)`
  color: ${(props) => props.theme.color};
  border-radius: 8px;
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 100px;
  height: 38px;
  &.active {
    background: ${(props) => props.theme.card.main};
  }
  &:hover {
    color: #00fc2a;
    transition: color 1s;
  }
`;

export const Select = styled.select`
  border: none;
  outline: none;
  width: 70px;
  background: ${(props) => props.theme.card.secondary};
  margin-left: 3px;
  padding-block: 4px;
  color: ${(props) => props.theme.color};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.color};
`;

export const CurrencyWrap = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  background: ${(props) => props.theme.card.secondary};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const ThemeWrap = styled.div`
  right: 0;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const Overview = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const ItemsWrap = styled.div`
  position: absolute;
  top: 10%;
  border-radius: 6px;
  overflow: hidden;
  z-index: 2;
  background: #2c2f36;
`;
export const Item = styled.div`
  cursor: pointer;
  padding: 10px;
  &:hover {
    opacity: 0.5;
    background: ${(props) => props.theme.main};
  }
`;
