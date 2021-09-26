import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'; // 同时使用saga和thunk 0/2
// import thunk from 'redux-thunk'; // 同时使用saga和thunk 1/2
import reducers from './reducers/index';
import rootSaga from './sagas/rootSaga';

const initialState = {};

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      })
    : compose;

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
// const middleware = [sagaMiddleware,thunk];  // 同时使用saga和thunk 2/2
const enhancers = composeEnhancers(
  applyMiddleware(...middleware),
);

const store = createStore(reducers, initialState, enhancers);
sagaMiddleware.run(rootSaga);

export default store;