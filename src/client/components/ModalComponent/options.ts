import { IOption } from './types';

const columnsModal: IOption[] = [{
  Header: 'Title',
  accessor: 'title'
}];

export const modalOptions = {
  searching: 'favItems', // Should be the name of prop that you are searching in the HOC
  columns: columnsModal,
}
