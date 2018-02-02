import React, { Component } from 'react';
import Modal from 'react-modal';

import ModalComponent from 'Components/ModalComponent';
import withSearch from 'Hoc/withSearch';

import * as S from './index.styles';

import { IHomeProps, IItem } from './types';
import { homeOptions } from './options';

class Home extends Component<IHomeProps, any> {
  constructor(props: IHomeProps) {
    super(props);

    this.state = {
      modalIsOpen: false,
    }
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render() {
    return <S.HomeBackground>
      <h3>Web Test playground</h3>
      <h5>You can click on the headers of any columns in the table to order them by DESC or ASC</h5>
      <S.Button onClick={this.openModal}>
        Show favourites
      </S.Button>
      <ModalComponent
        isOpen={this.state.modalIsOpen}
        closeModal={this.closeModal}
      />
      {this.props.children}
    </S.HomeBackground>
  }
}

export default withSearch(Home)(homeOptions);
