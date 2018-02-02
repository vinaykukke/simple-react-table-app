import React from 'react';
import renderer from 'react-test-renderer';

import Button from './index';

describe('Button Component', () => {
  it('should render <Button />', () => {
    const tree = renderer.create(<Button title='test'/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
