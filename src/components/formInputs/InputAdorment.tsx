import React from 'react'

import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/VisibilityOutlined'
import VisibilityOff from '@mui/icons-material/VisibilityOffOutlined'

import { ActionTypes } from '../../action-types'
import { Colors } from '../../styles/Colors'
import { useAppDispatch } from '../../store/hooks'

interface Props {
  showPass: boolean
}

function InputAdornmentComponent({ showPass }: Props) {
  const dispatch = useAppDispatch()

  const handleClickShowPassword = () => {
    dispatch({ type: ActionTypes.SHOW_PASSWORD, payload: !showPass })
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  return (
    <InputAdornment position='end'>
      <IconButton
        aria-label='toggle password visibility'
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        edge='end'>
        {showPass ? (
          <VisibilityOff sx={{ color: Colors.oficialRed }} />
        ) : (
          <Visibility sx={{ color: Colors.oficialBlue }} />
        )}
      </IconButton>
    </InputAdornment>
  )
}

export default InputAdornmentComponent
