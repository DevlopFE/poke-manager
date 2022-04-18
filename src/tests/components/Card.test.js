import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '../test-utils'
import { Card } from '../../components/Card/Card';

describe('Component <Card />', () => {

  test('it renders with data', () => {
    const item = {
        "name": "picachu",
    }
    const { getByText } = render( <Card  item={item} /> );
    expect(getByText(item.name)).toBeInTheDocument()
  })
})
