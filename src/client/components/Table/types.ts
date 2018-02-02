export interface ITableProps {
  items: any[];
  columns: any[];
  setFavourite: (favItem: any) => void;
  searching: string;
  removeFavourite: (favItem: any) => void;
}
