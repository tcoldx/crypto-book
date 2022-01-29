import React, { useState } from "react";
import {
  Wrapper,
  AssetButton,
  H2,
  StatMenuContainer,
} from "./Portfolio.styles";

const Portfolio = () => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Wrapper>
      <AssetButton onClick={handleClick}>Add Asset</AssetButton>
      <H2>Your Statistics</H2>
      {open && <StatMenuContainer>1</StatMenuContainer>}
    </Wrapper>
  );
};

export default Portfolio;
