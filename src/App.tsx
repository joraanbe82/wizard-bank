import React, { useState } from 'react'

import ProductInformation from './views/ProductInformation/ProductInformation'
import Form from './views/Form/Form'
import Feedback from './views/Feedback/Feedback'
import Stepper from './components/Stepper/Stepper'
import './App.css'

function App() {
	const [activeStep, setActiveStep] = useState<number>(0)
	const [skipped, setSkipped] = React.useState(new Set<number>())

	const isStepOptional = (step: number) => step === 1

	const isStepSkipped = (step: number) => skipped.has(step)

	const handleNext = () => {
		let newSkipped = skipped
		if (isStepSkipped(activeStep)) {
			newSkipped = new Set(newSkipped.values())
			newSkipped.delete(activeStep)
		}

		setActiveStep(prevActiveStep => prevActiveStep + 1)
		setSkipped(newSkipped)
	}

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1)
	}
	/** ¿Usar con el boton confimrar? */
	const handleReset = () => {
		setActiveStep(0)
	}

	return (
		<>
			<section className='App'>App component</section>
			<section>
				<ProductInformation />
				<Form />
				<Feedback />
				<Stepper activeStep={activeStep} />
			</section>
		</>
	)
}

export default App
