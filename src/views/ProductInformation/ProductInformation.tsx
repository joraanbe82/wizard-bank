import React from 'react'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import { useAppSelector } from '../../store/hooks'

import ProductInfo from '../../components/productInfo/ProductInfo'
import { CancelButton, StepperButton } from '../../styles/StyledComponents'

import './ProductInformation.css'

type Props = {
  handleNext: () => void
}

function ProductInformation({ handleNext }: Props) {
  const terms = useAppSelector(state => state.form.terms)
  const isFormValid = () => terms

  return (
    <section className='infoContainer'>
      <ProductInfo />
      <div className='buttonsDiv'>
        <CancelButton variant='outlined' type='button'>
          Cancelar
        </CancelButton>
        <StepperButton
          variant='contained'
          type='button'
          endIcon={<ArrowForwardIos />}
          onClick={() => handleNext()}
          disabled={!isFormValid()}>
          Siguiente
        </StepperButton>
      </div>
    </section>
  )
}

export default ProductInformation
