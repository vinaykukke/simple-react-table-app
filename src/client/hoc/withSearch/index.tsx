import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from 'Components/Table';
import SearchBox from 'Components/SearchBox';
import {
  fetchItems,
  itemsSelector,
  setFavourite,
  favItemsSelector,
  removeFavourite,
} from 'Scenes/Home/reducer';
import { IState } from 'Types/globalTypes';

export type TWrapperClass = React.ComponentClass<any> | React.StatelessComponent<any>;

export default function withSearch(WrappedComponent: TWrapperClass): any {
  class SearchComponent extends Component<any, any> {
    constructor(props: any) {
      super(props);

      this.state ={
        searchText: '',
        items: [],
        isStateReset: false
      };
    }

    componentDidMount() {
      this.props.fetchItems();
    }

    componentWillReceiveProps({ favItems: items }) {
      const { favItems, setStateReset } = this.props;
      favItems.length !== items.length && this.setState({isStateReset: true});
    }

    handleInputchange = (e: any) => {
      const { value } = e.target;
      const { items, favItems, searching, setStateReset } = this.props;

      let itemToSet = value !== '' ? this.props[searching].filter((item: any) => item.title.includes(value)) : [];

      if (searching === 'favItems') {
        itemToSet = this.props[searching].filter((item: any) => item.title.includes(value));
      }

      this.setState({
        searchText: value,
        items: itemToSet,
        isStateReset: false
      });
    }

    getItems() {
      const { items, isStateReset } = this.state;
      const { searching, favItems, setStateReset } = this.props;

      if (searching === 'favItems') {
        return items.length > 0 ? (isStateReset ? favItems : items) : favItems;
      }
      return items;
    }

    render() {
      const { searchText } = this.state;
      const { columns, setFavourite, searching, removeFavourite } = this.props;

      return <WrappedComponent {...this.props}>
        <SearchBox
          value={searchText}
          onChange={this.handleInputchange}
        />
        <Table
          items={this.getItems()}
          columns={columns}
          setFavourite={setFavourite}
          searching={searching}
          removeFavourite={removeFavourite}
        />
      </WrappedComponent>;
    }
  }

  const withColumns = (options: any) => {
    const mapStateToProps = (state: IState) => ({
      items: itemsSelector(state.home),
      columns: options.columns,
      favItems: favItemsSelector(state.home),
      searching: options.searching,
    });

    const mapDispatchToProps = ({
      fetchItems,
      setFavourite,
      removeFavourite,
    });

    return connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
  }

  return withColumns;
}
