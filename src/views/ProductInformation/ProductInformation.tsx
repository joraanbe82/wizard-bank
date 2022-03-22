import React, { ChangeEvent, MouseEventHandler } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { ActionTypes } from '../../action-types'

type Props = {
	handleNext: () => void
}
function ProductInformation({ handleNext }: Props) {
	const dispatch = useAppDispatch()
	const terms = useAppSelector(state => state.stepper.terms)

	const handleTerms = (e: boolean) => {
		dispatch({
			type: ActionTypes.ACCEPT_TERMS,
			payload: e,
		})
	}
	console.log(terms)
	const isFormValid = () => terms
	return (
		<section>
			<header>
				<h2>Bienvenido a tu</h2>
				<h3>Cuenta Corriente OpenClose</h3>
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
					<label htmlFor='check-id'>
						<input
							checked={terms}
							type='checkbox'
							id='check-id'
							name='accept-terms'
							onChange={e => handleTerms(e.target.checked)}
						/>
					</label>
					Soy mayor de edad, acepto los términos.
				</p>
			</div>
			<button
				type='button'
				onClick={() => handleNext()}
				disabled={!isFormValid()}>
				Next
			</button>
		</section>
	)
}

export default ProductInformation
