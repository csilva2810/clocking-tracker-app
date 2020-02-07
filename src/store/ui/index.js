/* eslint-disable default-case */
import produce from 'immer';
import moment from 'moment';

import { SET_SELECTED_MONTH } from './types';

const initialState = {
  selectedMonth: moment()
    .format('MM/YYYY')
    .toString(),
};

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_SELECTED_MONTH: {
        draft.selectedMonth = action.selectedMonth;
      }
    }
  });

export * from './types';
export * from './actions';

export default reducer;
