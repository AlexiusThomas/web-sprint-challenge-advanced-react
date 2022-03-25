import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AppClass from './AppClass'


// Write your tests here
test('sanity', () => {
  expect(true).toBe(true)
})

beforeEach(() => {
  render(<AppClass />)
})

describe('Class App', () => {
  test('Renders without crashing', () => {

  })
  test('Renders Coordinates', () => {
    const heading = screen.getByText(/coordinates/i)
    expect(heading).toBeVisible()
    expect(heading).toBeInTheDocument()
  })
  test('Renders Up Button', () => {
    const functionalBtn = screen.getByText(/up/i)
    expect(functionalBtn).toBeVisible()
    expect(functionalBtn).toBeInTheDocument()
  })
  test('Renders Down Button', () => {
    const functionalBtn = screen.getByText(/down/i)
    expect(functionalBtn).toBeVisible()
    expect(functionalBtn).toBeInTheDocument()
  })
  test('Renders Left Button', () => {
    const functionalBtn = screen.getByText(/left/i)
    expect(functionalBtn).toBeVisible()
    expect(functionalBtn).toBeInTheDocument()
  })
  test('Renders Right Button', () => {
    const functionalBtn = screen.getByText(/right/i)
    expect(functionalBtn).toBeVisible()
    expect(functionalBtn).toBeInTheDocument()
  })
  test('Renders Reset Button', () => {
    const functionalBtn = screen.getByText(/reset/i)
    expect(functionalBtn).toBeVisible()
    expect(functionalBtn).toBeInTheDocument()
  })
  test('Renders Submit Button', () => {
    const functionalBtn = screen.getByTestId('submit')
    expect(functionalBtn).toBeVisible()
    expect(functionalBtn).toBeInTheDocument()
  })
  test('Type in email and updates value',  () => {
    const emailInput = screen.getByTestId("email")
    const submitBtn =  screen.getByTestId('submit')
    fireEvent.change(emailInput, { target: { value: 'foo@gmail.com'} })
    fireEvent.click(submitBtn)
    const mes = screen.getByTestId("message")
    expect(mes).toBeVisible();

  })
  

})