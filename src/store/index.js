import { createStore, combineReducers, applyMiddleware } from 'redux';

import { save, get } from '../utils/db';
import clocking from './clocking';
import ui from './ui';

const reducers = combineReducers({
  clocking,
  ui,
});

const storage = store => next => action => {
  const result = next(action);
  save(store.getState());
  return result;
};

const preloadedState = get();

const storeArgs = [reducers, preloadedState, applyMiddleware(storage)].filter(
  Boolean,
);

const store = createStore(...storeArgs);

export default store;
