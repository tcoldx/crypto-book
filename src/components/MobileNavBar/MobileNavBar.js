import React from "react";
import { Wrapper, StyledLink } from "./MobileNavBar.styles";
import Overview from "../../assets/Images/overview.svg";
import Search from "../../assets/Images/SearchIcon.svg";
import Summary from "../../assets/Images/summarymobile.svg";
import Portfolio from "../../assets/Images/portfolio.svg";

const MobileNavBar = () => {
  return (
    <Wrapper>
      <StyledLink to="/">
        <img src={Overview} width={40} height={40} alt="overview" />
        <div>Overview</div>
      </StyledLink>
      <StyledLink to="/portfolio">
        <img src={Portfolio} width={40} height={40} alt="portfolio" />
        <div>Portfolio</div>
      </StyledLink>
      <StyledLink to="/coin/bitcoin">
        <img src={Summary} width={40} height={40} alt="summary" />
        <div>Summary</div>
      </StyledLink>
      <StyledLink to="/search">
        <img src={Search} width={40} height={40} alt="search" />
        <div>Search</div>
      </StyledLink>
    </Wrapper>
  );
};

export default MobileNavBar;
