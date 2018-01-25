import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

const middleware = [];

const enhancers = [
  applyMiddleware(...middleware)
];

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const configureStore = (initialState = {}) => {
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(...enhancers)
  );

  // Make reducers hot reloadable, see http://mxs.is/googmo
  // for redux devtools
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      import('./reducers').then((reducerModule) => {
        store.replaceReducer(reducerModule.default);
      });
    });
  }

  return store;
};

export default configureStore;
