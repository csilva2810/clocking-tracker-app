import { takeLatest, put, call } from 'redux-saga/effects';

import * as api from '../../services/clocking';

import * as actions from './actions';
import * as ActionsTypes from './types';

function* fetchClocking() {
  try {
    const clocking = yield call(api.fetch);
    yield put(actions.fetchClockingSuccess(clocking));
  } catch (e) {
    yield put(actions.fetchClockingError());
  }
}

function* createClocking(action) {
  try {
    const response = yield call(api.create, action.clocking);
    yield put(actions.createClockingSuccess(response.data));
  } catch (e) {
    yield put(actions.createClockingError());
  }
}

export default function* clockingSaga() {
  yield takeLatest(ActionsTypes.FETCH_REQUEST, fetchClocking);
  yield takeLatest(ActionsTypes.CREATE_REQUEST, createClocking);
}
