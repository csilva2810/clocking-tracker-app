import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

export default function configureStore(reducers, rootSaga) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  const store = createStore(reducers, applyMiddleware(...middlewares));

  sagaMiddleware.run(rootSaga);

  return store;
}
