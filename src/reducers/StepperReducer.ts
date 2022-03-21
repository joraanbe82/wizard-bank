import { StepperActions } from '../actions/StepperActions'
import { ActionTypes } from '../action-types'

export type stepperState = {
	currentPage: number
	terms: boolean
	pass: string
	confirmPass: string
	clue: string
}

const initialState = {
	currentPage: 0,
	terms: false,
	pass: '',
	confirmPass: '',
	clue: '',
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
		case ActionTypes.SET_PASSWORD:
			return { ...state, pass: action.payload }
		case ActionTypes.CONFIRM_PASSWORD:
			return { ...state, confirmPass: action.payload }
		case ActionTypes.SET_CLUE:
			return { ...state, clue: action.payload }

		default:
			return state
	}
}
