import React, { useEffect } from 'react'
import { Loading } from 'notiflix/build/notiflix-loading-aio'

import Button from '@mui/material/Button'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'

import { ActionTypes } from '../../action-types'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import submitForm from '../../service/api'
import ResponseFeedback from '../../components/responseFeedback/ResponseFeedback'

import { StyledButton } from './StyledFeedback'
import { Colors } from '../../styles/Colors'

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

	useEffect(() => {
		Loading.pulse()
		if (password) {
			submitForm(password)
				.then((response: Response) => {
					if (response.status === 200) {
						// console.log('olé')
						dispatch({
							type: ActionTypes.COMPLETE_SUCCESS,
							payload: true,
						})
						Loading.remove()
					}
				})
				.catch(error => {
					// console.log('cachis en la mar')
					dispatch({ type: ActionTypes.COMPLETE_ERROR, payload: false })
					Loading.remove()
				})
		}
	}, [password])

	return (
		<section>
			<ResponseFeedback complete={complete} />

			<StyledButton
				type='button'
				variant='outlined'
				endIcon={<ArrowForwardIos stroke={Colors.oficialRed} />}
				onClick={() => handleReset()}>
				Inicio
			</StyledButton>
		</section>
	)
}

export default Feedback
