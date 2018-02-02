import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import home from 'Scenes/Home/reducer';

export default combineReducers({
  home,

  // keeps track of route history
  router: routerReducer,
});
