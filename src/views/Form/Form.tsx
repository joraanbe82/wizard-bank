import React from 'react'

type Props = {
	handleNext: () => void
	handleBack: () => void
}

function Form({ handleNext, handleBack }: Props) {
	return (
		<section>
			<h4>Formulario</h4>
			<div>
				<input type='password' placeholder='Contraseña' />
				<input type='password' placeholder='Repetir contraseña' />
				<textarea maxLength={255} placeholder='Pista' />
			</div>
			<button type='button' onClick={() => handleNext()}>
				Next
			</button>
			<button type='button' onClick={() => handleBack()}>
				Back
			</button>
		</section>
	)
}

export default Form
