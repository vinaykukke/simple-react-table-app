import React, { Component } from 'react';
import ReactTable from 'react-table';

import Button from 'Components/Button';

import 'react-table/react-table.css';
import * as S from './index.styles';

import { ITableProps } from './types';

const renderFavButton = (cellProps: any, props: ITableProps) => {
  return <Button
    title='Add to favourite'
    onClick={() => props.setFavourite(cellProps.original)}
    name={cellProps.original.title}
  />
};

const renderFavRemoveButton = (cellProps: any, props: ITableProps) => {
  return <Button
    title='Remove'
    onClick={() => props.removeFavourite(cellProps.original)}
    name={cellProps.original.title}
  />
};

const Table = (props: ITableProps) => {
  const { items } = props;
  const defaultPages = items.length < 5 ? (items.length === 0 ? 5 : items.length) : 5;
  const newColumns = props.columns;
  const favButton = {
    Header: '',
    Cell: cellProps => renderFavButton(cellProps, props),
  };
  const removeFavButton = {
    Header: '',
    Cell: cellProps => renderFavRemoveButton(cellProps, props),
  };
  const image = {
    Header: 'Image',
    accessor: 'image',
    Cell: cellProps => <img src={`assets/${cellProps.original.image}`} />,
  }

  // TODO: Need to more robust way of checking if `button` exists in `props.columns`
  props.searching === 'items' && newColumns.length < 5 && newColumns.push(favButton);
  props.searching === 'favItems' && newColumns.length < 3 && newColumns.push(image, removeFavButton);

  return <S.TableContainer>
    <ReactTable
      noDataText="Search for something..."
      data={items}
      columns={newColumns}
      defaultPageSize={defaultPages}
      showPageJump={false}
    />
  </S.TableContainer>;
};

export default Table;
