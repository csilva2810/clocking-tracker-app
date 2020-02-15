import { SET_SELECTED_MONTH, SET_THEME } from './types';

export const setSelectedMonth = selectedMonth => ({
  type: SET_SELECTED_MONTH,
  selectedMonth,
});

export const setTheme = theme => ({
  type: SET_THEME,
  theme,
});
