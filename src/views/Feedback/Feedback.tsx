import React, { useEffect } from 'react'
import { Loading } from 'notiflix/build/notiflix-loading-aio'

import { ActionTypes } from '../../action-types'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import submitForm from '../../service/api'

type Props = {
	handleReset: () => void
}
interface Response {
	status: number
}

function Feedback({ handleReset }: Props) {
	const dispatch = useAppDispatch()
	const password = useAppSelector(state => state.stepper.pass)
	const complete = useAppSelector(state => state.stepper.complete)
	const completeSuccess = 'OK, el registro se ha completado satisfactoriamente'
	const completeError =
		'KO, lo sentimos no se ha podido completar el registro, inténtelo de	nuevo mas tarde'

	useEffect(() => {
		Loading.pulse()
		if (password) {
			submitForm(password)
				.then((response: Response) => {
					if (response.status === 200) {
						// console.log('olé')
						dispatch({
							type: ActionTypes.COMPLETE_SUCCESS,
							payload: completeSuccess,
						})
						Loading.remove()
					}
				})
				.catch(error => {
					// console.log('cachis en la mar')
					dispatch({ type: ActionTypes.COMPLETE_ERROR, payload: completeError })
					Loading.remove()
				})
		}
	}, [password])

	return (
		<section>
			{complete && (
				<>
					<h3>Feedback</h3>
					<div>{complete}</div>
					<button type='button' onClick={() => handleReset()}>
						Inicio
					</button>
				</>
			)}
		</section>
	)
}

export default Feedback
