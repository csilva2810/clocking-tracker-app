/* eslint-disable default-case */
import { produce } from 'immer';

import * as ActionTypes from './types';

const initialState = {
  loading: false,
  error: '',
  user: null,
};

const authReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.LOGIN_REQUEST: {
        draft.loading = true;
        draft.error = false;
        break;
      }

      case ActionTypes.LOGIN_FAILURE: {
        draft.loading = false;
        draft.error = action.error;
        break;
      }

      case ActionTypes.LOGIN_SUCCESS: {
        draft.loading = false;
        draft.error = '';
        draft.user = action.user;
        break;
      }
    }
  });

export * from './types';
export * from './actions';

export default authReducer;
