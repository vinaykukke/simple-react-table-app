import React from 'react';
import renderer from 'react-test-renderer';

import SearchBox from './index';

describe('SearchBox Component', () => {
  it('should render <SearchBox />', () => {
    const tree = renderer.create(<SearchBox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
