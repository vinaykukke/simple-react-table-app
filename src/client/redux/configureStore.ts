import { createStore, combineReducers, applyMiddleware } from 'redux';
import { default as rootReducer } from './rootReducer';
import {
  routerMiddleware as createRouterMiddleware,
} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import history from './generateHistory';

const configureStore = (initialState?: any) => {
  const preloadedState = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

  const routerMiddleware = createRouterMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = applyMiddleware(
    sagaMiddleware,
    routerMiddleware,
  );

  const store = createStore(
    rootReducer,
    preloadedState,
    enhancer,
  );

  // Always run the sagaMiddleware after the store is created.
  sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./rootReducer', () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return store;
};

export default configureStore;
