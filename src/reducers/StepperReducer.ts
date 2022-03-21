import { StepperActions } from '../actions/StepperActions'
import { ActionTypes } from '../action-types'

export type stepperState = {
	currentPage: number
	terms: boolean
}

const initialState = {
	currentPage: 0,
	terms: false,
}

export const StepperReducer = (
	// eslint-disable-next-line default-param-last
	state: stepperState = initialState,
	action: StepperActions
): stepperState => {
	switch (action.type) {
		case ActionTypes.NEXT_STEP:
			return { ...state, currentPage: action.payload }
		case ActionTypes.BACK_STEP:
			return { ...state, currentPage: action.payload }
		case ActionTypes.RESET_STEPS:
			return { ...state, currentPage: 0 }
		case ActionTypes.ACCEPT_TERMS:
			return { ...state, terms: action.payload }

		default:
			return state
	}
}
