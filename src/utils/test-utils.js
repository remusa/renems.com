// test-utils.js
import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const AllTheProviders = ({ children }) => {
  return <>{children}</>
}

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render, userEvent }
