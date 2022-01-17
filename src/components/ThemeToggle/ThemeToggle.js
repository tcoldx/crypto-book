import React from "react";
import { ThemeChange } from "./ThemeToggle.styles";
import theme from "assets/Images/ThemeIcon.svg";

const ThemeToggle = (props) => {
  const handleClick = () => {
    props.toggle();
  };
  return (
    <div>
      <ThemeChange onClick={handleClick}>
        <img src={theme} width={20} height={20} alt="theme" />
      </ThemeChange>
    </div>
  );
};

export default ThemeToggle;
