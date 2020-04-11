/* eslint-disable default-case */
import { format } from '../../services/clocking';

import * as ActionTypes from './types';

const initialState = {
  loading: false,
  error: false,
  success: false,
  data: null,
};

const loadingReducer = action => {
  switch (action.type) {
    case ActionTypes.FETCH_REQUEST:
    case ActionTypes.CREATE_REQUEST:
    case ActionTypes.EDIT_REQUEST: {
      return true;
    }
  }

  return false;
};

const errorReducer = action => {
  switch (action.type) {
    case ActionTypes.FETCH_ERROR:
    case ActionTypes.CREATE_ERROR:
    case ActionTypes.EDIT_ERROR: {
      return true;
    }
  }

  return false;
};

const successReducer = action => {
  switch (action.type) {
    case ActionTypes.CREATE_SUCCESS:
    case ActionTypes.EDIT_SUCCESS: {
      return true;
    }
  }

  return false;
};

const dataReducer = (state = null, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_SUCCESS: {
      return action.clocking;
    }

    case ActionTypes.FETCH_ERROR: {
      return [];
    }

    case ActionTypes.CREATE_SUCCESS: {
      return [...state, format(action.clocking)];
    }

    case ActionTypes.EDIT_SUCCESS: {
      return state.map(item => {
        if (item.id === action.id) {
          return format(action.clocking);
        }

        return item;
      });
    }

    default:
      return state;
  }
};

const reducer = (state = initialState, action) => {
  return {
    loading: loadingReducer(action),
    error: errorReducer(action),
    success: successReducer(action),
    data: dataReducer(state.data, action),
  };
};

export * from './actions';
export * from './types';
export * from './selectors';

export default reducer;
