import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import AppPage from './pages/App';
import Canvas from './pages/Canvas';

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={Login} />
    <Route path="/app" component={AppPage} />
    {process.env.NODE_ENV === 'development' && (
      <Route path="/canvas" component={Canvas} />
    )}
  </BrowserRouter>
);

export default Routes;
