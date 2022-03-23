import React, { ChangeEvent } from 'react'

import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import FormControlLabel from '@mui/material/FormControlLabel'

import { StepperButton, StyledCheckBox } from '../../styles/StyledComponents'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { ActionTypes } from '../../action-types'

type Props = {
	handleNext: () => void
}
function ProductInformation({ handleNext }: Props) {
	const dispatch = useAppDispatch()
	const terms = useAppSelector(state => state.form.terms)

	const handleTerms = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: ActionTypes.ACCEPT_TERMS,
			payload: event.target.checked,
		})
	}

	const isFormValid = () => terms

	return (
		<section>
			<header>
				<h2>Bienvenido a la Cuenta Corriente OpenClose</h2>
			</header>

			<div>
				Durante el proceso vamos a necesitar que nos facilites una serie de
				datos, no te preocupes ! es algo muy sencillo de hacer !
			</div>
			<div>
				<p>
					Para confirmar de que eres mayor de edad y podamos seguir el proceso
					necesitamos que acepte que tratemos sus datos según la politica de
					protección de datos.
				</p>
				<p>
					<FormControlLabel
						label='	Soy mayor de edad, acepto los términos y condiciones.'
						control={
							<StyledCheckBox
								checked={terms}
								id='check-id'
								name='accept-terms'
								onChange={handleTerms}
							/>
						}
					/>
				</p>
			</div>
			<StepperButton
				variant='contained'
				type='button'
				endIcon={<ArrowForwardIos />}
				onClick={() => handleNext()}
				disabled={!isFormValid()}>
				Siguiente
			</StepperButton>
		</section>
	)
}

export default ProductInformation
