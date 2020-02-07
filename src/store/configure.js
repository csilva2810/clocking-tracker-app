import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

export default function configureStore(reducers, rootSaga) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));

  sagaMiddleware.run(rootSaga);

  return store;
}
