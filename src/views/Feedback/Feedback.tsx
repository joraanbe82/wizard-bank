import React, { useEffect } from 'react'

import Button from '@mui/material/Button'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'

import { ActionTypes } from '../../action-types'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

import ResponseFeedback from '../../components/responseFeedback/ResponseFeedback'

import { StyledButton } from './StyledFeedback'
import { Colors } from '../../styles/Colors'

type Props = {
	handleReset: () => void
}

function Feedback({ handleReset }: Props) {
	const dispatch = useAppDispatch()
	const password = useAppSelector(state => state.stepper.pass)
	const complete = useAppSelector(state => state.stepper.complete)

	useEffect(() => {
		dispatch({ type: ActionTypes.COMPLETE_PROCCESS, payload: password })
	}, [])

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
