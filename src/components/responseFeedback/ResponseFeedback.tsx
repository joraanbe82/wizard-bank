import React from 'react'

import DoneAll from '@mui/icons-material/DoneAll'
import ErrorOutline from '@mui/icons-material/ErrorOutline'

import { Colors } from '../../styles/Colors'
import { H3Styled, Title } from './StyledResponse'

interface Props {
	complete: null | boolean
}

function ResponseFeedback({ complete }: Props) {
	const completeSuccess = 'El registro se ha completado satisfactoriamente'
	const completeError =
		'Lo sentimos no hemos podido crear tu Cuenta Corriente OpenClose, inténtelo de	nuevo mas tarde'
	return (
		<>
			{complete ? (
				<Title>
					<DoneAll stroke={Colors.green} />
					<H3Styled>¡Cuenta OpenClose creada satisfactortiamente!</H3Styled>
				</Title>
			) : (
				<Title>
					<ErrorOutline />
					<H3Styled>Ha abido un error</H3Styled>
				</Title>
			)}
			<div>{complete ? completeSuccess : completeError}</div>
		</>
	)
}

export default ResponseFeedback
