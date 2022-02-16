import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  position: fixed;
  background: #2c2d33;
  width: 100%;
  display: none;
  bottom: 0;
  color: white;
  z-index: 1;
  left: 0px;
  justify-content: space-around;
  align-items: center;
  height: 85px;
  @media (max-width: 900px) {
    display: flex;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const LinkWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  color: white;
`;
