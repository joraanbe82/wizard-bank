import React, { ChangeEvent } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'

import { StyledCheckBox } from '../../styles/StyledComponents'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { ActionTypes } from '../../action-types'

function ProductInfo() {
  const dispatch = useAppDispatch()
  const terms = useAppSelector(state => state.form.terms)

  const handleTerms = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ActionTypes.ACCEPT_TERMS,
      payload: event.target.checked,
    })
  }
  return (
    <>
      <header>
        <h2>Bienvenido a la Cuenta Corriente OpenClose</h2>
      </header>

      <div>
        <p>Estás a punto de contratar una nueva cuenta corriente OpenClose</p>
        <p>
          Durante el proceso vamos a necesitar que nos facilites una serie de
          datos, no te preocupes ! es algo muy sencillo de hacer !
        </p>
        <p>
          Para confirmar de que eres mayor de edad y podamos seguir el proceso
          necesitamos que aceptes que tratemos tus datos según la politica de
          protección de datos.
        </p>
        <p>
          <FormControlLabel
            label='	Soy mayor de edad, acepto los términos y condiciones.'
            control={
              <StyledCheckBox
                checked={terms}
                id='check-id'
                name='accept-terms'
                onChange={handleTerms}
              />
            }
          />
        </p>
      </div>
    </>
  )
}

export default ProductInfo
