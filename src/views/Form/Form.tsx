import React, { useEffect } from 'react'

import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'

import { useAppSelector } from '../../store/hooks'
import { StepperButton } from '../../styles/StyledComponents'

import FormInputs from '../../components/formInputs/FormInputs'

import './Form.css'

type Props = {
	handleNext: () => void
	handleBack: () => void
}

function Form({ handleNext, handleBack }: Props) {
	const pass = useAppSelector(state => state.form.pass)
	const confirmPass = useAppSelector(state => state.form.confirmPass)
	const clue = useAppSelector(state => state.form.clue)

	const isFormValid = () => {
		if (pass && confirmPass && clue) {
			return pass.length >= 8 && confirmPass.length >= 8 && clue.length > 0
		}
		return false
	}

	useEffect(() => {
		isFormValid()
	}, [pass, confirmPass, clue])

	return (
		<section>
			<h4>Creación de tu contraseña maestra</h4>
			<h6>
				Recuerda que la contraseña debe de tener al menos una letra mayúscula,
				un número y entre 8 y 24 carácteres para que podamos continuar.
			</h6>

			<FormInputs pass={pass} confirmPass={confirmPass} clue={clue} />
			<section className='buttonsSection'>
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
					onClick={() => handleNext()}
					disabled={!isFormValid()}>
					Siguiente
				</StepperButton>
			</section>
		</section>
	)
}

export default Form
