import React from 'react'

import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'

import { useAppSelector } from '../../store/hooks'
import { StepperButton } from '../../styles/StyledComponents'

import { IsFormValid } from '../../utils/Validations'
import FormInputs from '../../components/formInputs/FormInputs'
import FormTitle from '../../components/formInputs/FormTitle'

import './Form.css'

type Props = {
  handleNext: () => void
  handleBack: () => void
}

function Form({ handleNext, handleBack }: Props) {
  const pass = useAppSelector(state => state.form.pass)
  const confirmPass = useAppSelector(state => state.form.confirmPass)
  const clue = useAppSelector(state => state.form.clue)
  const errorPass = useAppSelector(state => state.form.errorPass)
  const errorSamePass = useAppSelector(state => state.form.errorSamePass)

  return (
    <section>
      <FormTitle />
      <FormInputs pass={pass} confirmPass={confirmPass} clue={clue} />
      <section className='buttonsSection'>
        <StepperButton
          onClick={() => handleBack()}
          startIcon={<ArrowBackIos />}
          type='button'
          variant='contained'>
          Volver
        </StepperButton>
        <StepperButton
          endIcon={<ArrowForwardIos />}
          disabled={
            !IsFormValid(clue, confirmPass, errorPass, errorSamePass, pass)
          }
          onClick={() => handleNext()}
          type='button'
          variant='contained'>
          Siguiente
        </StepperButton>
      </section>
    </section>
  )
}

export default Form
