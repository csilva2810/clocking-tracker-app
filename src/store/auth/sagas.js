import { call, put, take, takeLatest } from 'redux-saga/effects';

import * as authService from '../../services/auth';
import * as userService from '../../services/user';

import { LOGIN_REQUEST, SIGNUP_REQUEST, LOGOUT, UPDATE_USER_REQUEST } from './types';
import {
  authFailure,
  authSuccess,
  updateUserSuccess,
  updateUserFailure,
} from './actions';

/**
 * Atempts an user authentication by login or signup
 **/
function* authenticate(type, user) {
  const method = type === LOGIN_REQUEST ? authService.login : authService.signup;

  try {
    const response = yield call(method, user);

    yield put(authSuccess(response.data));

    return response.data;
  } catch (error) {
    yield put(authFailure(error));
  }
}

/**
 * Executes the authFlow logic for the application
 **/
function* authFlow() {
  while (true) {
    const { type, payload } = yield take([LOGIN_REQUEST, SIGNUP_REQUEST]);
    const user = yield call(authenticate, type, payload);

    if (user) {
      yield call(authService.setToken, user.token);
      yield take(LOGOUT);
      yield call(authService.removeToken);
    }
  }
}

function* updateUser(action) {
  try {
    const response = yield call(userService.update, action.payload);
    yield put(updateUserSuccess(response.data));
  } catch (e) {
    yield put(updateUserFailure(e));
  }
}

export default function* authSaga() {
  yield takeLatest(UPDATE_USER_REQUEST, updateUser);
  yield call(authFlow);
}
