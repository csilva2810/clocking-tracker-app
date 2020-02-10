import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import AppPage from './pages/App';

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={Login} />
    <Route path="/app" component={AppPage} />
  </BrowserRouter>
);

export default Routes;
