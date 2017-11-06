import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import Main from './components/Main/MainContainer';

export default(
  <App>
    <Route exact path="/" component={Main} />
  </App>
);
