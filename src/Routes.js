import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PrivateRoute from './components/application/PrivateRoute';

import Login from './pages/Login';
import Clocking from './pages/Clocking';
import CreateClocking from './pages/CreateClocking';
import EditClocking from './pages/EditClocking';

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={Login} />
    <PrivateRoute exact path="/clocking" component={Clocking} />
    <PrivateRoute exact path="/clocking/create" component={CreateClocking} />
    <PrivateRoute exact path="/clocking/:date/edit" component={EditClocking} />
  </BrowserRouter>
);

export default Routes;
