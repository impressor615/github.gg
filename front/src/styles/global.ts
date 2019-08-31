import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Noto Sans KR', sans-serif;
  }

  #root {
    height: 100%;
  }

  h1,
  p {
    margin: 0;
  }
`;

export default GlobalStyle;
