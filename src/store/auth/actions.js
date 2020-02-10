import * as ActionTypes from './types';

export const reset = () => ({
  type: ActionTypes.RESET,
});

export const loginRequest = payload => ({
  type: ActionTypes.LOGIN_REQUEST,
  payload,
});

export const signupRequest = payload => ({
  type: ActionTypes.SIGNUP_REQUEST,
  payload,
});

export const authFailure = error => ({
  type: ActionTypes.AUTH_FAILURE,
  error,
});

export const authSuccess = user => ({
  type: ActionTypes.AUTH_SUCCESS,
  user,
});

export const userRequest = payload => ({
  type: ActionTypes.USER_REQUEST,
});
