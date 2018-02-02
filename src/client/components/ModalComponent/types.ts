import { ReactChildren } from 'react';

export interface IModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactChildren;
}

export interface IOption {
  Header: string;
  accessor?: any;
  Cell?: any;
}
