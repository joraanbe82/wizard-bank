/* eslint-disable import/prefer-default-export */
import { TextareaAutosize } from '@mui/material'
import styled from 'styled-components'
import { Colors } from '../../styles/Colors'

export const StyledTextArea = styled(TextareaAutosize)`
  border-color: ${Colors.oficialBlue};
  border-radius: 5px;
  border: 1px solid ${Colors.oficialBlue};
  font-size: 1rem;
  font-weight: 400;
  width: 100% !important;
`
