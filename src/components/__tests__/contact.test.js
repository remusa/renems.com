import { fireEvent } from '@testing-library/react'
import React from 'react'
import { render, screen, userEvent } from 'test-utils'
import Contact from '../contact'

const submit = jest.fn()

it('should submit form when form is correctly filled', () => {
  const mockData = {
    email: 'test@test.com',
    name: 'John Doe',
    message: 'Hello, world!',
  }

  render(<Contact />)

  // Arrange
  const email = screen.getByLabelText(/email/i)
  const name = screen.getByLabelText(/name/i)
  const message = screen.getByLabelText(/message/i)
  const submit = screen.getByText(/submit/i)

  // Act
  userEvent.type(email, mockData.email)
  fireEvent.change(email, {
    target: {
      value: mockData.email,
    },
  })
  // screen.debug(email)
  userEvent.type(name, mockData.name)
  userEvent.type(message, mockData.message)

  // Assert
  // expect(email).toHaveAttribute('value', mockData.email)
  // expect(name).toHaveAttribute('value', mockData.name)
  // expect(message).toHaveAttribute('value', mockData.message)

  expect(submit).toBeEnabled()

  // expect(submit).toHaveBeenCalledTimes(1)
  // expect(submit).toHaveBeenCalledWith(mockData)
})
