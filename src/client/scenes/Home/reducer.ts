import { IInitialState } from './types';

/**
 * ACTION TYPES
 */
export const FETCH_ITEMS = 'w/src/client/scenes/Home/FETCH_ITEMS';
export const SET_ITEMS = 'w/src/client/scenes/Home/SET_ITEMS';
export const SET_FAVOURITES = 'w/src/client/scenes/Home/SET_FAVOURITES';
export const RESET_FAVOURITES = 'w/src/client/scenes/Home/RESET_FAVOURITES';
export const REMOVE_FAVOURITES = 'w/src/client/scenes/Home/REMOVE_FAVOURITES';

export const initialState: IInitialState = {
  items: [],
  favourites: [],
};

/**
 * REDUCER
 */
export default function Home(state = initialState, action) {
  switch (action.type) {
    case SET_ITEMS: {
      return {
        ...state,
        items: action.payload,
      };
    }

    case SET_FAVOURITES: {
      return {
        ...state,
        favourites: [
          ...state.favourites,
          action.payload
        ],
      }
    }

    case RESET_FAVOURITES: {
      return {
        ...state,
        favourites: action.payload,
      }
    }

    default: {
      return state;
    }
  }
}

/**
 * ACTION CREATORS
 */
export const setItems = (items: any) => ({
  type: SET_ITEMS,
  payload: items
});

export const fetchItems = () => ({
  type: FETCH_ITEMS,
});

export const setFavourite = (favItems: any) => ({
  type: SET_FAVOURITES,
  payload: favItems,
});

export const removeFavourite = (favItem: any) => ({
  type: REMOVE_FAVOURITES,
  payload: favItem
});

export const resetFavourites = (items: any[]) => ({
  type: RESET_FAVOURITES,
  payload: items,
});

/**
 * SELECTORS
 */
export const itemsSelector = state => state.items;
export const favItemsSelector = state => state.favourites;

/**
 * SAGAS
 */
import { put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import { IState } from 'Types/globalTypes';
import _ from 'lodash';

export function* fetchItemsSaga() {
  let gotItems;
  let items;
  yield axios.get('/assets/items.json')
  .then((res) => {
    gotItems = true;
    items = res.data.items;
  });

  yield gotItems && put(setItems(items));
}

export function* removeFavouritesSaga(item: any) {
  const favItems = yield select((state: IState) => favItemsSelector(state.home));
  const newFavItems = favItems.filter((favItem) => !_.isEqual(favItem, item.payload));
  yield put(resetFavourites(newFavItems));
}

/**
 * LISTENERS
 */
export function* homeListeners() {
  yield takeLatest(FETCH_ITEMS, fetchItemsSaga);
  yield takeLatest(REMOVE_FAVOURITES, removeFavouritesSaga);
}
