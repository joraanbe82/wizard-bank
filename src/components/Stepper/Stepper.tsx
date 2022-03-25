import React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'

import { useAppSelector } from '../../store/hooks'

import { StyledStep } from './StyledStepper'

const steps = ['Información', 'Formulario', 'Finalización']

function HorizontalLinearStepper() {
  const currentPage = useAppSelector(state => state.stepper.currentPage)

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={currentPage}>
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
