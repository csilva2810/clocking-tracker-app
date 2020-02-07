import * as ActionTypes from './types';

export const loginRequest = payload => ({
  type: ActionTypes.LOGIN_REQUEST,
  payload,
});

export const loginFailure = error => ({
  type: ActionTypes.LOGIN_FAILURE,
  error,
});

export const loginSuccess = user => ({
  type: ActionTypes.LOGIN_SUCCESS,
  user,
});
