import React from 'react'
import Container from '@mui/material/Container'

import Stepper from './components/Stepper/Stepper'

import { StyledContainer } from './StyledApp'
import StepperBodies from './components/stepperBodies/StepperBodies'

import './App.css'

function App() {
  return (
    <Container maxWidth='sm'>
      <StyledContainer>
        <section className='stepperSection'>
          <Stepper />
        </section>

        <StepperBodies />
      </StyledContainer>
    </Container>
  )
}

export default App
