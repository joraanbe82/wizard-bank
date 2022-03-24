/* eslint-disable no-shadow */
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
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

	// test('by clicking on the next button, will change component info for form component', () => {
	// 	const titleElement = screen.getByText(
	// 		/Bienvenido a la cuenta corriente OpenClose/i
	// 	)
	// 	const checkboxElement = screen.getByLabelText(/Soy mayor de edad,/i)
	// 	const nextButton = screen.getByText('Siguiente')

	// 	fireEvent.click(nextButton)
	// 	expect(titleElement).not.toBeInTheDocument()
	// 	expect(checkboxElement).not.toBeInTheDocument()

	// 	const formTitleElement = screen.getByText(
	// 		/Creación de tu contraseña maestra/i
	// 	)
	// 	expect(formTitleElement).toBeInTheDocument()
	// })

	// test('current page have to be 1', () => {
	// 	const { currentPage } = store.getState().stepper
	// 	expect(currentPage).toBe(1)
	// })
})
