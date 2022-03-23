import React from 'react'

import TextField from '@mui/material/TextField'

import { ActionTypes } from '../../action-types'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { ComparePasswords } from '../../utils/Validations'

import InputAdornmentComponent from './InputAdorment'
import TextAreaComponent from './TextAreaComponent'

interface FormProps {
	pass: string
	confirmPass: string
	clue: string
}

function FormInputs({ pass, confirmPass, clue }: FormProps) {
	const dispatch = useAppDispatch()
	const errorPass = useAppSelector(state => state.stepper.errorPass)
	const errorSamePass = useAppSelector(state => state.stepper.errorSamePass)
	const showPass = useAppSelector(state => state.stepper.showPass)

	const errorMessageReducer = () => {
		if (errorSamePass) return 'Las contraseñas deben de ser iguales'
		if (errorPass)
			return 'La contraseña debe de tener al menos una letra mayúscula, un número y entre 8 y 24 carácteres'
		return null
	}

	const passwordsEquals = (password: string, confirmPassword: string) => {
		if (ComparePasswords(password, confirmPassword) !== 0) {
			dispatch({ type: ActionTypes.ERROR_SAME_PASSWORD, payload: true })
		}
	}

	return (
		<div>
			<TextField
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
			<TextField
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
				onBlur={() => passwordsEquals(pass, confirmPass)}
				InputProps={{
					endAdornment: <InputAdornmentComponent showPass={showPass} />,
				}}
			/>
			<TextAreaComponent clue={clue} />
		</div>
	)
}

export default FormInputs
