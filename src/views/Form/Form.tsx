import React from 'react'

function Form() {
	return (
		<section>
			<h4>Formulario</h4>
			<div>
				<input type='password' placeholder='Contraseña' />
				<input type='password' placeholder='Repetir contraseña' />
				<textarea maxLength={255} placeholder='Pista' />
			</div>
			<button type='button'>Next</button>
		</section>
	)
}

export default Form
