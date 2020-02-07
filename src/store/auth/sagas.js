import { call, put, takeLatest } from 'redux-saga/effects';

import * as auth from '../../services/auth';

import * as ActionTypes from './types';
import { loginFailure, loginSuccess } from './actions';

export function* login(action) {
  try {
    const response = yield call(auth.login, action.payload);
    yield call(auth.authenticate, response.data.token);
    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export default function* authSaga() {
  yield takeLatest(ActionTypes.LOGIN_REQUEST, login);
}
