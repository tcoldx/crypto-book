import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavWrap = styled.div`
  width: 100%;
  background: rgb(25, 27, 31);
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
  color: white;
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
  background: #2c2f36;
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
  background: #2c2f36;
  height: 38px;
`;

export const Search = styled.input`
  border-radius: 6px;
  border: none;
  width: 80%;
  outline: none;
  background: #2c2f36;
  height: 24px;
`;

export const Button = styled(Link)`
  color: white;
  border-radius: 8px;
  display: flex;
  font-weight: bold;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  background: #2c2f36;
  width: 100px;
  height: 38px;
`;

export const Select = styled.select`
  border: none;
  outline: none;
  width: 70px;
  background: rgb(44, 47, 54);
  margin-left: 3px;
  padding-block: 4px;
  color: white;
`;

export const ThemeChange = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #2c2f36;
  cursor: pointer;
`;

export const CurrencyWrap = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  background: rgb(25, 27, 31);
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
