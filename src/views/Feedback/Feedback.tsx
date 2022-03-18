import React from 'react'

type Props = {
	handleReset: () => void
}

function Feedback({ handleReset }: Props) {
	return (
		<section>
			<h3>Feedback</h3>
			<div>OK, el registro se ha completado satisfactoriamente</div>
			<div>
				KO, lo sentimos no se ha podido completar el registro, inténtelo de
				nuevo mas tarde
			</div>
			<button type='button' onClick={() => handleReset()}>
				Inicio
			</button>
		</section>
	)
}

export default Feedback
