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

export const authSuccess = () => ({
  type: ActionTypes.AUTH_SUCCESS,
});

export const userRequest = payload => ({
  type: ActionTypes.USER_REQUEST,
});

export const updateUserRequest = payload => ({
  type: ActionTypes.UPDATE_USER_REQUEST,
  payload,
});

export const updateUserFailure = error => ({
  type: ActionTypes.UPDATE_USER_FAILURE,
  error,
});

export const updateUserSuccess = () => ({
  type: ActionTypes.UPDATE_USER_SUCCESS,
});

export const updateUserReset = () => ({
  type: ActionTypes.UPDATE_USER_RESET,
});

export const setUser = user => ({
  type: ActionTypes.SET_USER,
  user,
});
