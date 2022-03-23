import React, { useEffect } from 'react'

import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'

import { ActionTypes } from '../../action-types'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { ValidatePassword } from '../../utils/Validations'
import { StepperButton } from '../../styles/StyledComponents'

import FormInputs from '../../components/formInputs/FormInputs'

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

	return (
		<section>
			<h4>Creación de tu contraseña maestra</h4>
			<h6>
				Recuerda que la contraseña debe de tener al menos una letra mayúscula,
				un número y entre 8 y 24 carácteres para que podamos continuar.
			</h6>

			<FormInputs pass={pass} confirmPass={confirmPass} clue={clue} />
			<section>
				<StepperButton
					startIcon={<ArrowBackIos />}
					variant='contained'
					type='button'
					onClick={() => handleBack()}>
					Volver
				</StepperButton>
				<StepperButton
					variant='contained'
					type='button'
					endIcon={<ArrowForwardIos />}
					onClick={() => saveData()}
					disabled={!isFormValid()}>
					Siguiente
				</StepperButton>
			</section>
		</section>
	)
}

export default Form
