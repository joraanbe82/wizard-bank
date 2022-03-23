/* eslint-disable import/prefer-default-export */

import styled from 'styled-components'
import { TextareaAutosize } from '@mui/material'
import { Colors } from '../../styles/Colors'

export const StyledTextArea = styled(TextareaAutosize)`
	width: 100%;
	border-radius: 5px;
	border: 1px solid ${Colors.oficialBlue};
`
