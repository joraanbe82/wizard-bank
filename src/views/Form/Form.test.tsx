import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store'
import Form from './Form'

const handleNext = jest.fn()
const handleBack = jest.fn()

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
  test('should have a next button disable and back button enable', () => {
    const nextButton = screen.getByText('Siguiente')
    const backButton = screen.getByText('Volver')

    expect(nextButton).toBeDisabled()
    expect(backButton).toBeEnabled()
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

  test('after lost the focus fire blur event, not matches passwords', async () => {
    const inputRepeatPassElement = screen.getByLabelText(
      'Repetir Contraseña'
    ) as HTMLInputElement
    const errorMessage = /Las contraseñas deben de ser iguales/i

    expect(screen.queryByText(errorMessage)).toBeNull()

    fireEvent.change(inputRepeatPassElement, {
      target: { value: 'pruebaKO456' },
    })
    fireEvent.blur(inputRepeatPassElement)

    expect(await screen.findAllByText(errorMessage)).toBeTruthy()
  })

  test('type a character on input value hide the error message pass are not equals', async () => {
    const inputRepeatPassElement = screen.getByLabelText(
      'Repetir Contraseña'
    ) as HTMLInputElement
    const errorMessage = /Las contraseñas deben de ser iguales/i

    expect(screen.queryAllByText(errorMessage)).toBeTruthy()

    fireEvent.change(inputRepeatPassElement, {
      target: { value: 'pruebaKO4567' },
    })
    expect(screen.queryByText(errorMessage)).toBeNull()
  })

  test('delete a character on input value hide the error message pass are not equals', async () => {
    const inputRepeatPassElement = screen.getByLabelText(
      'Repetir Contraseña'
    ) as HTMLInputElement
    const errorMessage = /Las contraseñas deben de ser iguales/i

    // type a value
    expect(screen.queryByText(errorMessage)).toBeNull()

    fireEvent.change(inputRepeatPassElement, {
      target: { value: 'pruebaKO456' },
    })
    fireEvent.blur(inputRepeatPassElement)

    expect(await screen.findAllByText(errorMessage)).toBeTruthy()

    // delete a value
    fireEvent.change(inputRepeatPassElement, {
      target: { value: 'pruebaKO45' },
    })
    expect(screen.queryByText(errorMessage)).toBeNull()
  })

  test("after lost focus fire blur event, don't be valid password", async () => {
    const inputPassElement = screen.getByLabelText(
      'Contraseña'
    ) as HTMLInputElement

    const inputRepeatPassElement = screen.getByLabelText(
      'Repetir Contraseña'
    ) as HTMLInputElement

    const errorMessage =
      'La contraseña debe de tener al menos una letra mayúscula, un número y entre 8 y 24 carácteres'

    expect(screen.queryByText(errorMessage)).toBeNull()

    fireEvent.change(inputPassElement, { target: { value: 'prueba' } })
    fireEvent.change(inputRepeatPassElement, {
      target: { value: 'prueba' },
    })
    fireEvent.blur(inputRepeatPassElement)
    expect(await screen.findAllByText(errorMessage)).toBeTruthy()
  })

  test('after fill password, repeat password and clue with correct values,the next button will be enable', () => {
    const nextButton = screen.getByText('Siguiente')
    const inputPassElement = screen.getByLabelText(
      'Contraseña'
    ) as HTMLInputElement

    const inputRepeatPassElement = screen.getByLabelText(
      'Repetir Contraseña'
    ) as HTMLInputElement
    const textAreaEl = screen.getByPlaceholderText(
      /Pista para recuperar la contraseña/i
    ) as HTMLInputElement

    expect(nextButton).toBeDisabled()
    fireEvent.change(inputPassElement, { target: { value: 'pruebaKO123' } })
    fireEvent.change(inputRepeatPassElement, {
      target: { value: 'pruebaKO123' },
    })
    fireEvent.blur(inputRepeatPassElement)
    fireEvent.change(textAreaEl, {
      target: { value: 'pruebaKO123' },
    })

    expect(nextButton).toBeEnabled()
  })
  test('clicking next button', () => {
    const nextButton = screen.getByText('Siguiente')
    fireEvent.click(nextButton)
    expect(handleNext).toHaveBeenCalledTimes(1)
  })
  test('clicking back button', () => {
    const backButton = screen.getByText('Volver')
    fireEvent.click(backButton)
    expect(handleBack).toHaveBeenCalledTimes(1)
  })
})
