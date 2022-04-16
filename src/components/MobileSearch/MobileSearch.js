import React from "react";
import ExitButton from "assets/Images/xbutton.svg";
import { Top } from "./MobileSearch.styles";

const MobileSearch = () => {
  return (
    <div>
      <Top>
        <img width="20" src={ExitButton} alt="exit" />
        <h1>Close</h1>
      </Top>
    </div>
  );
};

export default MobileSearch;
