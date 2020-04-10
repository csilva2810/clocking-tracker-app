/* eslint-disable default-case */
import produce from 'immer';

import * as ActionTypes from './types';

const initialState = {
  loading: false,
  error: false,
  success: false,
  data: null,
};

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.FETCH_REQUEST: {
        draft.loading = true;
        draft.error = false;
        draft.success = false;
        break;
      }

      case ActionTypes.FETCH_SUCCESS: {
        draft.loading = false;
        draft.error = false;
        draft.success = false;
        draft.data = action.clocking;
        break;
      }

      case ActionTypes.FETCH_ERROR: {
        draft.loading = false;
        draft.error = true;
        draft.success = false;
        draft.data = [];
        break;
      }

      case ActionTypes.CREATE_REQUEST: {
        draft.loading = true;
        draft.error = false;
        draft.success = false;
        break;
      }

      case ActionTypes.CREATE_SUCCESS: {
        draft.loading = false;
        draft.error = false;
        draft.success = true;
        draft.data.push(action.clocking);
        break;
      }

      case ActionTypes.CREATE_ERROR: {
        draft.loading = false;
        draft.error = true;
        draft.success = false;
        break;
      }

      case ActionTypes.CREATE_RESET: {
        draft.loading = false;
        draft.error = false;
        draft.success = false;
        break;
      }

      // case EDIT_DAY: {
      //   const { day } = action;
      //   const index = draft.findIndex(i => i.date === day.date);

      //   draft[index] = day;

      //   break;
      // }
    }
  });

export * from './actions';
export * from './types';
export * from './selectors';

export default reducer;
