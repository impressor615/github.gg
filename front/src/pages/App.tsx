import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Wrapper>
          <h1>hello world!</h1>
        </Wrapper>
      </>
    </ThemeProvider>
  );
};
const Wrapper = styled.div`
  background: blue;
  ${props => props.theme.mq.down('mobile')`background: red;`}
  ${props => props.theme.mq.between('mobile', 'tablet')`background: skyblue;`}
`;

export default hot(App);
