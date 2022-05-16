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
    color: lightgrey;
    opacity: 0.7;
    font-weight: 600;
  }
  
  body {
    font-family: "Poppins, sans-serif";
    background: ${(props) => props.theme.main};
    min-height: 100vh;
    color: white;
  }
  
  button {
    border: none;
    cursor: pointer;
  }


  
  `;
