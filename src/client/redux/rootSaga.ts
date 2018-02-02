import { all } from 'redux-saga/effects';
import { homeListeners } from 'Scenes/Home/reducer';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    homeListeners()
  ])
}
