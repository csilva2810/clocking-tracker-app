import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    color: ${props => props.theme.colors.text.base};
    background-color: ${props => props.theme.colors.background.base};
  }

  button {
    -webkit-tap-highlight-color: transparent;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyles;
