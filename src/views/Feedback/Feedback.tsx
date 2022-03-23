import React, { useEffect } from 'react'

import Button from '@mui/material/Button'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'

import { ActionTypes } from '../../action-types'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

import ResponseFeedback from '../../components/responseFeedback/ResponseFeedback'

import { StyledButton } from './StyledFeedback'
import { Colors } from '../../styles/Colors'

import './Feedback.css'

type Props = {
	handleReset: () => void
}

function Feedback({ handleReset }: Props) {
	const dispatch = useAppDispatch()
	const password = useAppSelector(state => state.form.pass)
	const complete = useAppSelector(state => state.stepper.complete)
	const pending = useAppSelector(state => state.stepper.pending)

	useEffect(() => {
		dispatch({ type: ActionTypes.COMPLETE_PROCCESS, payload: password })
	}, [])

	return (
		<section>
			{!pending && (
				<>
					<ResponseFeedback complete={complete} />

					<div className='endButtonDiv'>
						<StyledButton
							type='button'
							variant='outlined'
							endIcon={<ArrowForwardIos stroke={Colors.oficialRed} />}
							onClick={() => handleReset()}>
							Inicio
						</StyledButton>
					</div>
				</>
			)}
		</section>
	)
}

export default Feedback
