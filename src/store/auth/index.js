/* eslint-disable default-case */
import { produce } from 'immer';

import * as ActionTypes from './types';

const initialState = {
  loading: false,
  error: '',
  user: null,
  updating: false,
  updateError: '',
};

const authReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ActionTypes.USER_REQUEST:
      case ActionTypes.LOGIN_REQUEST:
      case ActionTypes.SIGNUP_REQUEST: {
        draft.loading = true;
        draft.error = false;
        break;
      }

      case ActionTypes.AUTH_FAILURE: {
        draft.loading = false;
        draft.error = action.error;
        break;
      }

      case ActionTypes.AUTH_SUCCESS: {
        draft.loading = false;
        draft.error = '';
        draft.user = action.user;
        break;
      }

      case ActionTypes.UPDATE_USER_REQUEST: {
        draft.updating = true;
        draft.updateError = false;
        break;
      }

      case ActionTypes.UPDATE_USER_FAILURE: {
        draft.updating = false;
        draft.updateError = action.error;
        break;
      }

      case ActionTypes.UPDATE_USER_SUCCESS: {
        draft.updating = false;
        draft.updateError = '';
        draft.user = {
          ...state.user,
          ...action.user,
        };
        break;
      }

      case ActionTypes.RESET: {
        Object.entries(initialState).forEach(([key, value]) => {
          draft[key] = value;
        });
        break;
      }
    }
  });

export * from './types';
export * from './actions';

export default authReducer;
