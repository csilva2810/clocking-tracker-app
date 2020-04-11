import { fork } from 'redux-saga/effects';

import authSaga from './auth/sagas';
import uiSaga from './ui/sagas';
import clockingSaga from './clocking/sagas';

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(uiSaga);
  yield fork(clockingSaga);
}
