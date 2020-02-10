import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    margin: 0;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    color: #313131;
    background-color: white;
  }

  button {
    -webkit-tap-highlight-color: transparent;
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyles;
