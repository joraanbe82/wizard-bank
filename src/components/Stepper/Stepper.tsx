/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'

const steps = ['Información', 'Formulario', 'Finalización']

function HorizontalLinearStepper({ activeStep }: { activeStep: number }) {
	return (
		<Box sx={{ width: '100%' }}>
			<Stepper activeStep={activeStep}>
				{steps.map(label => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
		</Box>
	)
}

export default HorizontalLinearStepper
