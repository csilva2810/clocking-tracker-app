import { call, put, take } from 'redux-saga/effects';

import * as auth from '../../services/auth';

import { LOGIN_REQUEST, SIGNUP_REQUEST, LOGOUT } from './types';
import { authFailure, authSuccess } from './actions';

/**
 * Atempts an user authentication by login or signup
 **/
function* authenticate(type, user) {
  const method = type === LOGIN_REQUEST ? auth.login : auth.signup;

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
      yield call(auth.setToken, user.token);
      yield take(LOGOUT);
      yield call(auth.removeToken);
    }
  }
}

export default function* authSaga() {
  yield call(authFlow);
}
