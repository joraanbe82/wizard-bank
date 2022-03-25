import React, { useEffect } from 'react'

import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'

import FormTitle from '../../components/formInputs/FormTitle'
import { useAppSelector } from '../../store/hooks'
import { StepperButton } from '../../styles/StyledComponents'

import FormInputs from '../../components/formInputs/FormInputs'

import { IsFormValid } from '../../utils/Validations'

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

  // useEffect(() => {
  //   IsFormValid(pass, confirmPass, clue, errorPass, errorSamePass)
  // }, [pass, confirmPass, clue, errorPass, errorSamePass])

  return (
    <section>
      <FormTitle />
      <FormInputs pass={pass} confirmPass={confirmPass} clue={clue} />
      <section className='buttonsSection'>
        <StepperButton
          startIcon={<ArrowBackIos />}
          variant='contained'
          type='button'
          onClick={() => handleBack()}>
          Volver
        </StepperButton>
        <StepperButton
          variant='contained'
          type='button'
          endIcon={<ArrowForwardIos />}
          onClick={() => handleNext()}
          disabled={
            !IsFormValid(pass, confirmPass, clue, errorPass, errorSamePass)
          }>
          Siguiente
        </StepperButton>
      </section>
    </section>
  )
}

export default Form
