/* eslint-disable default-case */
import produce from 'immer';
import moment from 'moment';

import { SET_SELECTED_MONTH, SET_THEME } from './types';

const initialState = {
  selectedMonth: moment()
    .format('MM/YYYY')
    .toString(),
  theme: 'light',
};

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_SELECTED_MONTH: {
        draft.selectedMonth = action.selectedMonth;
      }
    }

    switch (action.type) {
      case SET_THEME: {
        draft.theme = action.theme;
      }
    }
  });

export * from './types';
export * from './actions';

export default reducer;
