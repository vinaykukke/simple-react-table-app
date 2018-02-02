import React from 'react';
import Modal from 'react-modal';

import withSearch from 'Hoc/withSearch';

import * as S from './index.styles';
import { IModalProps } from './types';
import { modalOptions } from './options';

import './modal.css';

const ModalComponent = (props: IModalProps) => {
  return <Modal isOpen={props.isOpen} ariaHideApp={false}>
    <div>
      <h1>Favourites</h1>
      <S.Button onClick={props.closeModal}>
        Close
      </S.Button>
    </div>
    {props.children}
  </Modal>
}

export default withSearch(ModalComponent)(modalOptions);
