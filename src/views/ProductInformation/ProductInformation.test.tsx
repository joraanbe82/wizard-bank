/** eslint-disable */
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store'
import ProductInformation from './ProductInformation'

const handleNext = jest.fn()

describe('render product information component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <ProductInformation handleNext={handleNext} />
      </Provider>
    )
  })

  test('render the title h2', () => {
    const titleElement = screen.getByText(
      /Bienvenido a la cuenta corriente OpenClose/i
    )
    expect(titleElement).toBeInTheDocument()
  })

  test('exist a checkbox', () => {
    const checkboxElement = screen.getByLabelText(/Soy mayor de edad,/i)
    expect(checkboxElement).toBeInTheDocument()
  })

  test('checkbox is unchecked, store term value is false and next button is disable', () => {
    const checkboxElement = screen.getByLabelText(/Soy mayor de edad,/i)
    expect(checkboxElement).not.toBeChecked()

    const { terms } = store.getState().form
    expect(terms).toBe(false)

    const nextButton = screen.getByText('Siguiente')
    expect(nextButton).toBeDisabled()
  })

  test('by clicking on the checkbox the next button is enabled and the value of terms is true', () => {
    const checkboxElement = screen.getByLabelText(/Soy mayor de edad,/i)
    fireEvent.click(checkboxElement)
    expect(checkboxElement).toBeChecked()

    const nextButton = screen.getByText('Siguiente')
    expect(nextButton).toBeEnabled()

    const { terms } = store.getState().form
    expect(terms).toBe(true)
  })

  test('clicking button', () => {
    const nextButton = screen.getByText('Siguiente')
    fireEvent.click(nextButton)
    expect(handleNext).toHaveBeenCalledTimes(1)
  })
  test('current page have to be 0', () => {
    const { currentPage } = store.getState().stepper
    expect(currentPage).toBe(0)
  })
})
