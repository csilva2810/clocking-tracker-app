import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import createTheme from './styles/theme';

/**
 * Connects to the store to find the user selected theme
 * */
const Provider = ({ children }) => {
  const theme = useSelector(({ ui }) => ui.theme);

  return <ThemeProvider theme={createTheme(theme)}>{children}</ThemeProvider>;
};

export default Provider;
