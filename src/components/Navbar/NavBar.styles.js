import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
  margin-right: 20px;
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 90%;
  margin: auto;
`;

export const SelectWrap = styled.div`
  background: ${(props) => props.theme.card.secondary};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 100px;
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
    background: #2c2f36;
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

export const CurrencyWrap = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  background: ${(props) => props.theme.card.secondary};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
