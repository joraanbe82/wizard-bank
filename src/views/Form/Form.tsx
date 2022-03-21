import React, { useEffect } from 'react'
import { ActionTypes } from '../../action-types'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import ValidatePassword from '../../utils/Validations'

type Props = {
	handleNext: () => void
	handleBack: () => void
}

function Form({ handleNext, handleBack }: Props) {
	const dispatch = useAppDispatch()
	const pass = useAppSelector(state => state.stepper.pass)
	const confirmPass = useAppSelector(state => state.stepper.confirmPass)
	const clue = useAppSelector(state => state.stepper.clue)

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

	return (
		<section>
			<h4>Formulario</h4>
			<div>
				<input
					type='password'
					placeholder='Contraseña'
					name='pass'
					onChange={e =>
						dispatch({
							type: ActionTypes.SET_PASSWORD,
							payload: e.target.value,
						})
					}
				/>
				<input
					type='password'
					placeholder='Repetir contraseña'
					name='confirmPass'
					onChange={e =>
						dispatch({
							type: ActionTypes.CONFIRM_PASSWORD,
							payload: e.target.value,
						})
					}
				/>
				<textarea
					maxLength={255}
					placeholder='Pista'
					name='clue'
					onChange={e =>
						dispatch({
							type: ActionTypes.SET_CLUE,
							payload: e.target.value,
						})
					}
				/>
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
