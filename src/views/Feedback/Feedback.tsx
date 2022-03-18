import React from 'react'

function Feedback() {
	return (
		<section>
			<h3>Feedback</h3>
			<div>OK, el registro se ha completado satisfactoriamente</div>
			<div>
				KO, lo sentimos no se ha podido completar el registro, inténtelo de
				nuevo mas tarde
			</div>
			<button type='button'>Volver</button>
		</section>
	)
}

export default Feedback
