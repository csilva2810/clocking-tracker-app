import { createSelector } from 'reselect';

const getClocking = state => state.clocking.data;
const getSelectedMonth = state => state.ui.selectedMonth;

export const filterByYearAndMonth = createSelector(
  [getClocking, getSelectedMonth],
  (clocking, selectedMonth) => {
    if (!clocking) {
      return null;
    }

    return clocking.filter(item => {
      const [, month, year] = item.date.split('/');

      return [month, year].join('/') === selectedMonth;
    });
  },
);
