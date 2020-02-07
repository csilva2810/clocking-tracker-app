import { SET_SELECTED_MONTH } from './types';

export const setSelectedMonth = selectedMonth => ({
  type: SET_SELECTED_MONTH,
  selectedMonth,
});
