/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import Step from '@mui/material/Step'
import { Colors } from '../../styles/Colors'

export const StyledStep = styled(Step)`
	// active step
	.css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active {
		color: ${Colors.oficialBlue};
	}

	// complete step
	.css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed {
		color: ${Colors.oficialRed};
	}

	// step label first mobile
	.css-ascpo7-MuiStepLabel-root {
		flex-direction: column;
	}

	@media (min-width: 640px) {
		.css-ascpo7-MuiStepLabel-root {
			flex-direction: row;
		}
	}
`
