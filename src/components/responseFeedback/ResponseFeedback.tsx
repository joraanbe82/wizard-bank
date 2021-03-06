import React from 'react'

import DoneAllIcon from '@mui/icons-material/DoneAll'
import ErrorIcon from '@mui/icons-material/Error'

import { Colors } from '../../styles/Colors'
import { useAppSelector } from '../../store/hooks'

import './ResponseFeedback.css'

function ResponseFeedback() {
  const complete = useAppSelector(state => state.stepper.complete)

  const completeSuccess = 'El registro se ha completado satisfactoriamente'
  const completeError =
    'Lo sentimos no hemos podido crear tu Cuenta Corriente OpenClose, inténtelo de	nuevo mas tarde'

  return (
    <section className='responseSection'>
      {complete ? (
        <div className='responseTitle'>
          <DoneAllIcon stroke={Colors.green} data-testid='done-icon' />
          <h3>¡Cuenta OpenClose creada satisfactortiamente!</h3>
        </div>
      ) : (
        <div className='responseTitle'>
          <ErrorIcon
            sx={{ color: Colors.oficialRed }}
            data-testid='error-icon'
          />
          <h3>Ha ocurrido un error</h3>
        </div>
      )}
      <div>{complete ? completeSuccess : completeError}</div>
    </section>
  )
}

export default ResponseFeedback
