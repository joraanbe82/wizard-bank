/* eslint-disable no-shadow */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import store from './store'
import App from './App'

describe('Given a Redux store, render a stepper component and product info component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
  })

  test('render stepper component', () => {
    const thirdLabel = screen.getByText('Finalización')
    expect(thirdLabel).toBeInTheDocument()
  })

  test('render the first component view product information', () => {
    const titleElement = screen.getByText(
      /Bienvenido a la cuenta corriente OpenClose/i
    )
    expect(titleElement).toBeInTheDocument()
  })

  test('current page have to be 0', () => {
    const { currentPage } = store.getState().stepper
    expect(currentPage).toBe(0)
  })
})
