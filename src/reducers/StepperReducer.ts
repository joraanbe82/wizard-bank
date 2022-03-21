import { StepperActions } from '../actions/StepperActions'
import { ActionTypes } from '../action-types'

export type stepperState = {
	currentPage: number
}

const initialState = {
	currentPage: 0,
}

export const StepperReducer = (
	// eslint-disable-next-line default-param-last
	state: stepperState = initialState,
	action: StepperActions
): stepperState => {
	switch (action.type) {
		case ActionTypes.NEXT_STEP:
			return { currentPage: action.payload }
		case ActionTypes.BACK_STEP:
			return { currentPage: action.payload }
		case ActionTypes.RESET_STEPS:
			return { currentPage: 0 }
		default:
			return state
	}
}
