/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Checkbox } from '@mui/material'
import { Colors } from './Colors'

export const StepperButton = styled(Button)`
	background: ${Colors.oficialBlue};
	&:hover {
		background: #002b45d1;
	}
`
export const CancelButton = styled(Button)`
	color: ${Colors.oficialRed};
	border: none;

	&:hover {
		border-color: ${Colors.oficialRed};
	}
`

export const StyledTextField = styled(TextField)`
	margin-top: 1rem;

	.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
		color: ${Colors.oficialBlue};
	}
	.css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
		.MuiOutlinedInput-notchedOutline {
		border-color: ${Colors.oficialBlue};
	}
`
export const StyledCheckBox = styled(Checkbox)`
	&.Mui-checked {
		color: ${Colors.oficialRed};
	}
`
