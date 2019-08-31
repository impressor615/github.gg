import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Noto Sans KR', sans-serif;
    font-display: swap;
  }

  h1 {
    margin: 0;
  }
`;

export default GlobalStyle;
