import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store'

import Feedback from './Feedback'

const handleReset = jest.fn()

describe('render feedback component', () => {
	beforeEach(() => {
		render(
			<Provider store={store}>
				<Feedback handleReset={handleReset} />
			</Provider>
		)
	})

	test('should render ok icon if the response is ok', () => {
		setTimeout(async () => {
			const doneAllIconElement = screen.getByTestId('done-icon')
			expect(doneAllIconElement).toBeVisible()
		}, 3000)
	})
	test('should render error icon if the response is not ok', () => {
		setTimeout(async () => {
			const errorIconElement = screen.getByTestId('error-icon')
			expect(errorIconElement).toBeInTheDocument()
		}, 3000)
	})

	test('should render button init after loading finished in 3 sec', async () => {
		setTimeout(async () => {
			const buttonInit = screen.findByText('Inicio')
			expect(await buttonInit).toBeInTheDocument()
		}, 3000)
	})

	test('clicking button', () => {
		setTimeout(() => {
			const nextButton = screen.getByText('Siguiente')
			fireEvent.click(nextButton)
			expect(handleReset).toHaveBeenCalledTimes(1)
		}, 3000)
	})
})
