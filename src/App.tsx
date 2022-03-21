import React, { ChangeEvent, MouseEventHandler, useState } from 'react'

import Container from '@mui/material/Container'

import ProductInformation from './views/ProductInformation/ProductInformation'
import Form from './views/Form/Form'
import Feedback from './views/Feedback/Feedback'
import Stepper from './components/Stepper/Stepper'
import './App.css'

function App() {
	const [activeStep, setActiveStep] = useState<number>(0)
	const [form, setForm] = useState({})

	const handleNext = () => {
		setActiveStep((prevActiveStep: number) => prevActiveStep + 1)
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value =
			e.target.type === 'checkbox' ? e.target.checked : e.target.value
		setForm({
			...form,
			[e.target.name]: value,
		})
	}

	const handleBack = () => {
		setActiveStep((prevActiveStep: number) => prevActiveStep - 1)
	}
	/** ¿Usar con el boton confimrar? */
	const handleReset = () => {
		setActiveStep(0)
	}

	return (
		<Container maxWidth={false}>
			<section>
				<Stepper activeStep={activeStep} />
			</section>
			<section>
				{activeStep === 0 && (
					<ProductInformation
						// handleChange={handleChange}
						handleNext={handleNext}
					/>
				)}
				{activeStep === 1 && (
					<Form
						// handleChange={handleChange}
						handleNext={handleNext}
						handleBack={handleBack}
					/>
				)}
				{activeStep === 2 && <Feedback handleReset={handleReset} />}
			</section>
		</Container>
	)
}

export default App
