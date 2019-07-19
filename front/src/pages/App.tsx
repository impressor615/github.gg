import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

import Index from './Index';
import User from './User';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/user/:username" component={User} />
        </Switch>
      </>
    </ThemeProvider>
  );
};

// const Wrapper = styled.div`
//   background: blue;
//   ${props => props.theme.mq.down('mobile')`background: red;`}
//   ${props => props.theme.mq.between('mobile', 'tablet')`background: skyblue;`}
// `;

export default hot(App);
