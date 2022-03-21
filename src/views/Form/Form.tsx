import React, { useEffect } from 'react'

import TextField from '@mui/material/TextField'
import TextareaAutosize from '@mui/material/TextareaAutosize'

import { ActionTypes } from '../../action-types'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { ValidatePassword, ComparePasswords } from '../../utils/Validations'

type Props = {
	handleNext: () => void
	handleBack: () => void
}

function Form({ handleNext, handleBack }: Props) {
	const dispatch = useAppDispatch()
	const pass = useAppSelector(state => state.stepper.pass)
	const confirmPass = useAppSelector(state => state.stepper.confirmPass)
	const clue = useAppSelector(state => state.stepper.clue)
	const errorPass = useAppSelector(state => state.stepper.errorPass)
	const errorSamePass = useAppSelector(state => state.stepper.errorSamePass)

	const errorMessageText = () => {
		let errorMessage
		if (errorPass) {
			errorMessage =
				'La contraseña debe de tener al menos 1 mayúscula, 1 número y entre 8 y 24 caracteres'
			return errorMessage
		}
		if (errorSamePass) {
			errorMessage = 'Las contraseñas deben de ser iguales'
			return errorMessage
		}
		return null
	}

	const isFormValid = () => {
		if (pass && confirmPass && clue) {
			return (
				pass.length >= 8 &&
				confirmPass.length >= 8 &&
				clue.length > 0 &&
				clue.length <= 250
			)
		}
		return false
	}

	useEffect(() => {
		isFormValid()
	}, [pass, confirmPass, clue])

	const saveData = () => {
		let isDataValid = true
		let arePasswordsEquals = true
		if (pass.length < 8 || confirmPass.length < 8) {
			isDataValid = false
			console.log('menos de 8 caracteres')
		}

		if (pass.length >= 8 && confirmPass.length >= 8) {
			if (ComparePasswords(pass, confirmPass) === 0) {
				console.log('passwords iguales')
			} else {
				console.log('password no iguales')
				arePasswordsEquals = false
			}
		}
		if (!ValidatePassword(pass)) {
			console.log('pass no pasa el regex')
			isDataValid = false
		}

		console.log({ isDataValid })

		if (!isDataValid) {
			dispatch({ type: ActionTypes.ERROR_PASSWORD, payload: true })
		}
		if (!arePasswordsEquals) {
			dispatch({ type: ActionTypes.ERROR_SAME_PASSWORD, payload: true })
		}
		if (isDataValid) {
			// TODO validar que se guarda correctamente y se puede habilitar el boton
			// de siguiente
		}
	}

	return (
		<section>
			<h4>Formulario</h4>
			<div>
				<TextField
					error={errorPass || errorSamePass}
					helperText={errorMessageText()}
					variant='outlined'
					label='Contraseña'
					type='password'
					onChange={e =>
						dispatch({
							type: ActionTypes.SET_PASSWORD,
							payload: e.target.value,
						})
					}
					fullWidth
				/>
				<TextField
					error={errorPass || errorSamePass}
					helperText={errorMessageText()}
					variant='outlined'
					label='Repetir Contraseña'
					type='password'
					onChange={e =>
						dispatch({
							type: ActionTypes.CONFIRM_PASSWORD,
							payload: e.target.value,
						})
					}
					fullWidth
				/>
				<TextareaAutosize
					maxLength={255}
					aria-label='text-area'
					minRows={5}
					placeholder='Pista para recuperar la contraseña'
					onChange={e =>
						dispatch({
							type: ActionTypes.SET_CLUE,
							payload: e.target.value,
						})
					}
					style={{
						width: '100%',
						borderRadius: '5px',
						border: '1px solid grey',
						padding: '3px',
					}}
				/>
				<button type='button' onClick={() => saveData()}>
					Guardar
				</button>
			</div>
			<button
				type='button'
				onClick={() => handleNext()}
				disabled={!isFormValid()}>
				Next
			</button>
			<button type='button' onClick={() => handleBack()}>
				Back
			</button>
		</section>
	)
}

export default Form
