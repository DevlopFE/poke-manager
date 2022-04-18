import React from 'react'
import {render} from '@testing-library/react'
import { PokeManagerProvider } from '../context/provider'

const AllTheProviders = ({children}) => {
  return (
    <PokeManagerProvider>
    {children}
    </PokeManagerProvider>

  )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}