import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Clocking from './pages/Clocking';
import CreateClocking from './pages/CreateClocking';
import EditClocking from './pages/EditClocking';

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={Clocking} />
    <Route exact path="/clocking/create" component={CreateClocking} />
    <Route exact path="/clocking/:date/edit" component={EditClocking} />
  </BrowserRouter>
);

export default Routes;
