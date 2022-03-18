import React from 'react'

function ProductInformation() {
	return (
		<section>
			<header>
				Bienvenido a tu
				<h3>Cuenta Corriente OpenClose</h3>
			</header>
			s
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
				<label htmlFor='check-id'>
					<input type='checkbox' id='check-id' />
				</label>
			</div>
			<button type='button'>Next</button>
		</section>
	)
}

export default ProductInformation
