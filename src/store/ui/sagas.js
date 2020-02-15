import { take, fork, put } from 'redux-saga/effects';

import { SET_USER } from '../auth/types';
import { setTheme } from './actions';

function* watchSetUser() {
  while (true) {
    const { user } = yield take(SET_USER);

    yield put(setTheme(user.config.theme));
  }
}

export default function* uiSaga() {
  yield fork(watchSetUser);
}
