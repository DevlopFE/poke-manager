import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '../test-utils'
import { NavBar } from '../../components/NavBar/navbar';

describe('Component <NavBar />', () => {

  test('it renders', () => {
    const { getByText } = render(<NavBar />);
    const title = getByText(/Pokemon collection/i);
    expect(title).toBeInTheDocument();
  })
})
