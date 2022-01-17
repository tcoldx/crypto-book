import React from "react";
import { NavWrap, NavUnderContainer } from "./NavUnder.styles";
import BarLoader from "react-spinners/BarLoader";

const NavUnder = () => {
  return (
    <NavWrap>
      <NavUnderContainer>
        <BarLoader width={300} speedMultiplier={2} />
      </NavUnderContainer>
    </NavWrap>
  );
};

export default NavUnder;
