import * as reducer from './reducer';
import HomePageReducer, { initialState } from './reducer';
import { put, select } from 'redux-saga/effects';

let items: any[] = [];
let favitem: any = {};

beforeEach(() => {
  items = [{
    "title": "iPhone 6S Oro",
    "description": "Vendo un iPhone 6 S color Oro nuevo y sin estrenar. Me han dado uno en el trabajo y no necesito el que me compré. En tienda lo encuentras por 749 euros y yo lo vendo por 740. Las descripciones las puedes encontrar en la web de apple. Esta libre.",
    "price": "740",
    "email": "iphonemail@wallapop.com",
    "image": "iphone.png"
  }];
  favitem = {
    "title": "Samsung Galaxy S8",
    "description": "This is a great phone",
    "price": "940",
    "email": "galaxy@wallapop.com",
    "image": "galaxy.png"
  };
});

describe('Actions', () => {
  it('should create an action to setItems', () => {
    const expectedAction = {
      type: reducer.SET_ITEMS,
      payload: items,
    };

    expect(reducer.setItems(items)).toEqual(expectedAction);
  });

  it('should create an action to setFavourite', () => {
    const expectedAction = {
      type: reducer.SET_FAVOURITES,
      payload: items,
    };

    expect(reducer.setFavourite(items)).toEqual(expectedAction);
  });

  it('should create an action to removeFavourite', () => {
    const expectedAction = {
      type: reducer.REMOVE_FAVOURITES,
      payload: items,
    };

    expect(reducer.removeFavourite(items)).toEqual(expectedAction);
  });

  it('should create an action to resetFavourites', () => {
    const expectedAction = {
      type: reducer.RESET_FAVOURITES,
      payload: items,
    };

    expect(reducer.resetFavourites(items)).toEqual(expectedAction);
  });

  it('should create an action to fetchItems', () => {
    const expectedAction = {
      type: reducer.FETCH_ITEMS,
    };

    expect(reducer.fetchItems()).toEqual(expectedAction);
  });
});

describe('Home Reducer', () => {
  it('should return the initial state', () => {
    expect(HomePageReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_ITEMS', () => {
    const action = {
      type: reducer.SET_ITEMS,
      payload: items,
    };
    expect(HomePageReducer(initialState, action)).toEqual({
      favourites: [],
      items: items
    });
  });

  it('should handle SET_FAVOURITES', () => {
    const action = {
      type: reducer.SET_FAVOURITES,
      payload: favitem,
    };
    expect(HomePageReducer(initialState, action)).toEqual({
      favourites: [favitem],
      items: []
    });
  });

  it('should handle RESET_FAVOURITES', () => {
    const action = {
      type: reducer.RESET_FAVOURITES,
      payload: items,
    };
    const initial = {
      favourites: [favitem],
      items: []
    }
    expect(HomePageReducer(initial, action)).toEqual({
      favourites: items,
      items: []
    });
  });
});
