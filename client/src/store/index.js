import { combineReducers } from 'redux';

import configureStore from './configure';

import clocking from './clocking';
import ui from './ui';
import auth from './auth';

import rootSaga from './root-saga';

const store = configureStore(
  combineReducers({
    clocking,
    ui,
    auth,
  }),
  rootSaga,
);

export default store;
