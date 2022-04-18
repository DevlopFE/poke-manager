import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '../test-utils'
import { CardContainer } from '../../components/CardContainer/CardContainer';

describe('Component <CardContainer />', () => {

  test('it renders data', () => {
    const filteredItemsList = [{ "name": "picachu" }]
    const { getByText }= render(<CardContainer filteredItemsList={filteredItemsList} />)
    expect(getByText('picachu')).toBeInTheDocument()
  })
})