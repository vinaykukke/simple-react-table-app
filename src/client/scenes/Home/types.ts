import { ReactChildren } from 'react';

export interface IInitialState {
  items: any[];
  favourites: any[];
}

export interface IHomeProps {
  fetchItems: () => void;
  items: IItem[];
  children: ReactChildren;
}

export interface IItem {
  title: string;
  description: string;
  price: string;
  email: string;
  image: string;
}

export interface IOption {
  Header: string;
  accessor?: any;
  Cell?: any;
}
