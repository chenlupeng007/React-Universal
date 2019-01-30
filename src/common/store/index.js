import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import composedReducer from '@common/reducers';

const configureStore = (defaultState) => {
  const middlewares = [
    thunk
  ];

  return createStore(
    composedReducer,
    defaultState,
    applyMiddleware(...middlewares)
  );
}

export default configureStore;