import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@styles/global';
import theme from '@styles/theme';

import Index from './Index';
import User from './User';
import Error404 from './errors/404';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/users/:username" component={User} />
          <Route path="/errors/404" component={Error404} />
          <Redirect to="/" />
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
