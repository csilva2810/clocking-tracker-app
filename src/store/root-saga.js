import { fork } from 'redux-saga/effects';

import authSaga from './auth/sagas';
import uiSaga from './ui/sagas';

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(uiSaga);
}
