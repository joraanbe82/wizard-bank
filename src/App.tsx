import React from 'react'
import Container from '@mui/material/Container'
import { ActionTypes } from './action-types'

import { useAppDispatch, useAppSelector } from './store/hooks'

import Feedback from './views/Feedback/Feedback'
import Form from './views/Form/Form'
import ProductInformation from './views/ProductInformation/ProductInformation'
import Stepper from './components/Stepper/Stepper'

import { StyledContainer } from './StyledApp'

import './App.css'

function App() {
	const dispatch = useAppDispatch()
	const currentPage = useAppSelector(state => state.stepper.currentPage)

	const handleNext = () => {
		dispatch({ type: ActionTypes.NEXT_STEP, payload: currentPage + 1 })
	}

	const handleBack = () => {
		dispatch({ type: ActionTypes.BACK_STEP, payload: currentPage - 1 })
	}

	const handleReset = () => {
		dispatch({ type: ActionTypes.RESET_STEPS, payload: true })
	}

	return (
		<Container maxWidth='sm'>
			<StyledContainer>
				<section className='stepperSection'>
					<Stepper activeStep={currentPage} />
				</section>

				{currentPage === 0 && <ProductInformation handleNext={handleNext} />}
				{currentPage === 1 && (
					<Form handleNext={handleNext} handleBack={handleBack} />
				)}
				{currentPage === 2 && <Feedback handleReset={handleReset} />}
			</StyledContainer>
		</Container>
	)
}

export default App
