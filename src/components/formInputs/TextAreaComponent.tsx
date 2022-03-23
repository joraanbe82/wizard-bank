import React from 'react'

import { ActionTypes } from '../../action-types'
import { useAppDispatch } from '../../store/hooks'
import { StyledTextArea } from './StyledTextArea'

import './TextAreaComponent.css'

interface Props {
	clue: string
}

function TextAreaComponent({ clue }: Props) {
	const dispatch = useAppDispatch()

	return (
		<section className='textAreaSection'>
			<StyledTextArea
				maxLength={255}
				aria-label='text-area'
				minRows={5}
				placeholder='Pista para recuperar la contraseña'
				onChange={e =>
					dispatch({
						type: ActionTypes.SET_CLUE,
						payload: e.target.value,
					})
				}
				value={clue}
			/>
			<small>Máximo 255 carácteres</small>
		</section>
	)
}

export default TextAreaComponent
