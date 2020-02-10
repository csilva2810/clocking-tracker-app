import React from 'react';
import { Provider } from 'react-redux';

import Reset from './styles/reset';
import Global from './styles/global';

import Routes from './Routes';
import store from './store';

export default function App() {
  return (
    <>
      <Reset />
      <Global />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}
