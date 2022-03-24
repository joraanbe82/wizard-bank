import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import store from '../../store'
import Form from './Form'

const handleNext = jest.fn()
const handleBack = jest.fn()
const isFormatValid = jest.fn()

describe('render form component', () => {
	beforeEach(() => {
		render(
			<Provider store={store}>
				<Form handleNext={handleNext} handleBack={handleBack} />
			</Provider>
		)
	})

	test('should render the title h2', () => {
		const titleElement = screen.getByText(/Creación de tu contraseña maestra/i)
		expect(titleElement).toBeInTheDocument()
	})

	test('should have an input for password and be empty', () => {
		const inputPassElement = screen.getByLabelText('Contraseña')
		expect(inputPassElement).toBeInTheDocument()
		expect(inputPassElement.textContent).toBe('')
	})
	test('should have an input for repeat password and be empty', () => {
		const inputRepeatPassElement = screen.getByLabelText('Repetir Contraseña')
		expect(inputRepeatPassElement).toBeInTheDocument()
		expect(inputRepeatPassElement.textContent).toBe('')
	})
	test('should have a text area for the clue and be empty', () => {
		const textAreaEl = screen.getByPlaceholderText(
			/Pista para recuperar la contraseña/i
		)
		expect(textAreaEl).toBeInTheDocument()
		expect(textAreaEl.textContent).toBe('')
	})

	test('can be written in the input for password', () => {
		const inputPassElement = screen.getByLabelText(
			'Contraseña'
		) as HTMLInputElement
		fireEvent.change(inputPassElement, { target: { value: 'pruebaKO123' } })
		expect(inputPassElement.value).toBe('pruebaKO123')
	})

	test('can be written in the input for repeat password', () => {
		const inputRepeatPassElement = screen.getByLabelText(
			'Repetir Contraseña'
		) as HTMLInputElement
		fireEvent.change(inputRepeatPassElement, {
			target: { value: 'pruebaKO123' },
		})
		expect(inputRepeatPassElement.value).toBe('pruebaKO123')
	})

	test('can be written in the text area', () => {
		const textAreaEl = screen.getByPlaceholderText(
			/Pista para recuperar la contraseña/i
		) as HTMLInputElement
		fireEvent.change(textAreaEl, {
			target: { value: 'pruebaKO123' },
		})
		expect(textAreaEl.value).toBe('pruebaKO123')
	})

	test('after lost the focus fire blur event', () => {
		const inputRepeatPassElement = screen.getByLabelText(
			'Repetir Contraseña'
		) as HTMLInputElement

		fireEvent.focusOut(inputRepeatPassElement)
		fireEvent.blur(inputRepeatPassElement)

		expect(isFormatValid).toBeCalled()
	})
})
