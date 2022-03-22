import { JsxElement } from 'typescript'
import { StepperActions } from '../actions/StepperActions'
import { ActionTypes } from '../action-types'

export type stepperState = {
	currentPage: number
	terms: boolean
	pass: string
	confirmPass: string
	errorPass: boolean
	errorSamePass: boolean
	clue: string
	complete: null | boolean
	pending: boolean
}

const initialState = {
	currentPage: 0,
	terms: false,
	pass: '',
	confirmPass: '',
	errorPass: false,
	errorSamePass: false,
	clue: '',
	complete: null,
	pending: false,
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
			return initialState
		case ActionTypes.ACCEPT_TERMS:
			return { ...state, terms: action.payload }
		case ActionTypes.SET_PASSWORD:
			return {
				...state,
				pass: action.payload,
				errorPass: false,
				errorSamePass: false,
			}
		case ActionTypes.CONFIRM_PASSWORD:
			return {
				...state,
				confirmPass: action.payload,
				errorPass: false,
				errorSamePass: false,
			}
		case ActionTypes.ERROR_PASSWORD:
			return { ...state, errorPass: action.payload }
		case ActionTypes.ERROR_SAME_PASSWORD:
			return { ...state, errorSamePass: true }
		case ActionTypes.SET_CLUE:
			return { ...state, clue: action.payload }
		case ActionTypes.COMPLETE_SUCCESS:
			return { ...state, complete: action.payload }
		case ActionTypes.COMPLETE_ERROR:
			return { ...state, complete: action.payload }
		default:
			return state
	}
}
