/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import Button from '@mui/material/Button'
import { Colors } from '../../styles/Colors'

export const StyledButton = styled(Button)`
	color: ${Colors.oficialRed};
	border: none;

	&:hover {
		border-color: ${Colors.oficialRed};
	}
`
