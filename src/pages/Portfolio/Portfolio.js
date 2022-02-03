import React, { useState } from "react";
import ExitButton from "assets/Images/xbutton.svg";
import {
  Wrapper,
  AssetButton,
  H2,
  StatMenuContainer,
  Img,
  StatMenuWrap,
} from "./Portfolio.styles";

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleExit = () => {
    setOpen(false);
  };
  return (
    <Wrapper>
      {open && (
        <StatMenuContainer>
          <StatMenuWrap>
            <div>Select Coins</div>
            <Img onClick={handleExit} src={ExitButton} alt="button" />
          </StatMenuWrap>
        </StatMenuContainer>
      )}
      <H2>Your Statistics</H2>
      <AssetButton onClick={handleClick}>Add Asset</AssetButton>
    </Wrapper>
  );
};

export default Portfolio;
