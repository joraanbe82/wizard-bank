import React, { ChangeEvent, MouseEventHandler } from 'react'

type Props = {
	handleNext: () => void
	// handleChange: ChangeEvent<HTMLInputElement>
}
function ProductInformation({ handleNext }: Props) {
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
							type='checkbox'
							id='check-id'
							name='accept-terms'
							// onChange={e => handleChange}
						/>
					</label>
					Soy mayor de edad, acepto los términos.
				</p>
			</div>
			<button type='button' onClick={() => handleNext()}>
				Next
			</button>
		</section>
	)
}

export default ProductInformation
