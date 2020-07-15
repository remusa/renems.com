import React from 'react'
import { fireEvent, render } from 'test-utils'
import Contact from '../contact'

it('should submit form when form is correctly filled', () => {
  const { getByText, findByText } = render(<Contact />)

  const submitBtn = getByText(/submit/i)

  // fireEvent.click(submitBtn)
})
