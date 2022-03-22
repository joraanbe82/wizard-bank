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
// TODO refactorizar los states

function Form({ handleNext, handleBack }: Props) {
	const dispatch = useAppDispatch()
	const pass = useAppSelector(state => state.stepper.pass)
	const confirmPass = useAppSelector(state => state.stepper.confirmPass)
	const clue = useAppSelector(state => state.stepper.clue)
	const errorPass = useAppSelector(state => state.stepper.errorPass)
	const errorSamePass = useAppSelector(state => state.stepper.errorSamePass)

	const errorMessageReducer = () => {
		if (errorSamePass) return 'Las contraseñas deben de ser iguales'
		if (errorPass)
			return 'La contraseña debe de tener al menos una letra mayúscula, un número y entre 8 y 24 carácteres'
		return null
	}

	const isFormValid = () => {
		if (pass && confirmPass && clue) {
			return pass.length >= 8 && confirmPass.length >= 8 && clue.length > 0
		}
		return false
	}

	useEffect(() => {
		isFormValid()
	}, [pass, confirmPass, clue])

	const saveData = () => {
		let isDataValid = true

		if (pass.length < 8 || confirmPass.length < 8) {
			isDataValid = false
		}

		if (!ValidatePassword(pass)) {
			isDataValid = false
		}

		if (!isDataValid) {
			dispatch({ type: ActionTypes.ERROR_PASSWORD, payload: true })
		}

		if (isDataValid) {
			handleNext()
		}
	}
	const passwordsEquals = (password: string, confirmPassword: string) => {
		if (ComparePasswords(password, confirmPassword) !== 0) {
			dispatch({ type: ActionTypes.ERROR_SAME_PASSWORD, payload: true })
		}
	}

	return (
		<section>
			<h4>Creación de tu contraseña maestra</h4>
			<h6>
				Recuerda que la contraseña debe de tener al menos una letra mayúscula,
				un número y entre 8 y 24 carácteres para que podamos continuar.
			</h6>
			<div>
				<TextField
					error={errorPass || errorSamePass}
					helperText={errorMessageReducer()}
					variant='outlined'
					label='Contraseña'
					type='password'
					onChange={e =>
						dispatch({
							type: ActionTypes.SET_PASSWORD,
							payload: e.target.value,
						})
					}
					value={pass}
					fullWidth
				/>
				<TextField
					error={errorPass || errorSamePass}
					helperText={errorMessageReducer()}
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
					value={confirmPass}
					onBlur={() => passwordsEquals(pass, confirmPass)}
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
					value={clue}
					style={{
						width: '100%',
						borderRadius: '5px',
						border: '1px solid grey',
						padding: '3px',
					}}
				/>
				<small>Máximo 255 carácteres</small>
			</div>
			<button
				type='button'
				onClick={() => saveData()}
				disabled={!isFormValid()}>
				Siguiente
			</button>
			<button type='button' onClick={() => handleBack()}>
				Volver
			</button>
		</section>
	)
}

export default Form
