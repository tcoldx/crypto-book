import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
    }

  a {
    text-decoration: none;
  }
  
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.color};
    font-weight: bold;
  }
  
  body {
    font-family: "Poppins";
    background: ${(props) => props.theme.main};
    min-height: 100vh;
    color: white;
  }
  
  button {
    border: none;
    cursor: pointer;
  }
  
  `;
