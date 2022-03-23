import React from 'react'

import { ActionTypes } from '../../action-types'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { ValidatePassword, ComparePasswords } from '../../utils/Validations'

import InputAdornmentComponent from './InputAdorment'
import TextAreaComponent from './TextAreaComponent'

import { StyledTextField } from '../../styles/StyledComponents'

interface FormProps {
	pass: string
	confirmPass: string
	clue: string
}

function FormInputs({ pass, confirmPass, clue }: FormProps) {
	const dispatch = useAppDispatch()
	const errorPass = useAppSelector(state => state.form.errorPass)
	const errorSamePass = useAppSelector(state => state.form.errorSamePass)
	const showPass = useAppSelector(state => state.form.showPass)

	const errorMessageReducer = () => {
		if (errorSamePass) return 'Las contraseñas deben de ser iguales'
		if (errorPass)
			return 'La contraseña debe de tener al menos una letra mayúscula, un número y entre 8 y 24 carácteres'
		return null
	}

	const isFormatValid = () => {
		let isDataValid = true

		if (pass.length < 8 || confirmPass.length < 8) {
			isDataValid = false
		}
		if (ComparePasswords(pass, confirmPass) !== 0) {
			dispatch({ type: ActionTypes.ERROR_SAME_PASSWORD, payload: true })
		}

		if (!ValidatePassword(pass)) {
			isDataValid = false
		}

		if (!isDataValid) {
			dispatch({ type: ActionTypes.ERROR_PASSWORD, payload: true })
		}
	}
	return (
		<div>
			<StyledTextField
				error={errorPass || errorSamePass}
				helperText={errorMessageReducer()}
				variant='outlined'
				label='Contraseña'
				type={showPass ? 'text' : 'password'}
				onChange={e =>
					dispatch({
						type: ActionTypes.SET_PASSWORD,
						payload: e.target.value,
					})
				}
				value={pass}
				fullWidth
				InputProps={{
					endAdornment: <InputAdornmentComponent showPass={showPass} />,
				}}
			/>
			<StyledTextField
				error={errorPass || errorSamePass}
				helperText={errorMessageReducer()}
				variant='outlined'
				label='Repetir Contraseña'
				type={showPass ? 'text' : 'password'}
				onChange={e =>
					dispatch({
						type: ActionTypes.CONFIRM_PASSWORD,
						payload: e.target.value,
					})
				}
				fullWidth
				value={confirmPass}
				onBlur={() => isFormatValid()}
				InputProps={{
					endAdornment: <InputAdornmentComponent showPass={showPass} />,
				}}
			/>
			<TextAreaComponent clue={clue} />
		</div>
	)
}

export default FormInputs
