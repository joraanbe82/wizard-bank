import React, { useState } from 'react'

import TextField from '@mui/material/TextField'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import { ActionTypes } from '../../action-types'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { ComparePasswords } from '../../utils/Validations'

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

	const handleClickShowPassword = () => {
		dispatch({ type: ActionTypes.SHOW_PASSWORD, payload: !showPass })
	}

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault()
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
					endAdornment: (
						<InputAdornment position='end'>
							<IconButton
								aria-label='toggle password visibility'
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
								edge='end'>
								{showPass ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					),
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
					endAdornment: (
						<InputAdornment position='end'>
							<IconButton
								aria-label='toggle password visibility'
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
								edge='end'>
								{showPass ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					),
				}}
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
	)
}

export default FormInputs
