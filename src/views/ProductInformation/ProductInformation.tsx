import React, { ChangeEvent } from 'react'

import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import FormControlLabel from '@mui/material/FormControlLabel'
import Button from '@mui/material/Button'

import {
	CancelButton,
	StepperButton,
	StyledCheckBox,
} from '../../styles/StyledComponents'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { ActionTypes } from '../../action-types'

import './ProductInformation.css'

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
		<section className='infoContainer'>
			<header>
				<h2>Bienvenido a la Cuenta Corriente OpenClose</h2>
			</header>

			<div />
			<div>
				<p>
					Durante el proceso vamos a necesitar que nos facilites una serie de
					datos, no te preocupes ! es algo muy sencillo de hacer !
				</p>
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
			<div className='buttonsDiv'>
				<CancelButton variant='outlined' type='button'>
					Cancelar
				</CancelButton>
				<StepperButton
					variant='contained'
					type='button'
					endIcon={<ArrowForwardIos />}
					onClick={() => handleNext()}
					disabled={!isFormValid()}>
					Siguiente
				</StepperButton>
			</div>
		</section>
	)
}

export default ProductInformation
