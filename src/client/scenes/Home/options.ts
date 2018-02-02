import { IOption } from './types';

const columnsHome: IOption[] = [{
  Header: 'Title',
  accessor: 'title' // String-based value accessors!
}, {
  Header: 'Description',
  accessor: 'description'
}, {
  Header: 'Price',
  accessor: 'price'
}, {
  Header: 'Email',
  accessor: 'email'
}];

export const homeOptions = {
  searching: 'items', // SHould be the name of the prop that you are searching in the HOC
  columns: columnsHome,
}
