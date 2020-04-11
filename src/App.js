import React from 'react';
import { Provider } from 'react-redux';

import Reset from './styles/reset';
import Global from './styles/global';

import store from './store';
import Routes from './Routes';
import ThemeProvider from './ThemeProvider';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <Reset />
          <Global />
          <Routes />
        </ThemeProvider>
      </Provider>
    </>
  );
}
