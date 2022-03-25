import React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'

import StepLabel from '@mui/material/StepLabel'

import { StyledStep } from './StyledStepper'

const steps = ['Información', 'Formulario', 'Finalización']

function HorizontalLinearStepper({ activeStep }: { activeStep: number }) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map(label => (
          <StyledStep key={label}>
            <StepLabel>{label}</StepLabel>
          </StyledStep>
        ))}
      </Stepper>
    </Box>
  )
}

export default HorizontalLinearStepper
