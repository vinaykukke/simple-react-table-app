import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import configureStore from 'Redux/configureStore';
import history from 'Redux/generateHistory';
import Routes from 'Components/Routes';

import './styles/global';

const store = configureStore();

const App = <Provider store={store}>
  <ConnectedRouter history={history}>
    <Routes />
  </ConnectedRouter>
</Provider>;

const rootEl = document.getElementById('root');

render(
  App,
  rootEl,
);

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept(['Components/Routes'], () => {
      const nextApp = <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>;

      render(nextApp, rootEl);
    });
  }
}
