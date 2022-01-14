import React from "react";
import { ThemeChange } from "./ThemeToggle.styles";
import Theme from "assets/Images/ThemeIcon.svg";

const ThemeToggle = (props) => {
  return (
    <div>
      <ThemeChange>
        <img
          onClick={props.handleClick}
          src={Theme}
          width={20}
          height={20}
          alt="theme"
        />
      </ThemeChange>
    </div>
  );
};

export default ThemeToggle;
