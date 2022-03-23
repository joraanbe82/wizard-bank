/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import Step from '@mui/material/Step'
import { Colors } from '../../styles/Colors'

export const StyledStep = styled(Step)`
	.css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active {
		color: ${Colors.oficialBlue};
	}

	.css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed {
		color: ${Colors.oficialRed};
	}
`
