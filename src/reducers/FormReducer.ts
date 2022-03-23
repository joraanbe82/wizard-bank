import { StepperActions } from '../actions/StepperActions'
import { ActionTypes } from '../action-types'

export type formState = {
	terms: boolean
	pass: string
	confirmPass: string
	clue: string
	errorPass: boolean
	errorSamePass: boolean
	showPass: boolean
}

const initialState = {
	terms: false,
	pass: '',
	confirmPass: '',
	clue: '',
	errorPass: false,
	errorSamePass: false,
	showPass: false,
}

export const FormReducer = (
	// eslint-disable-next-line default-param-last
	state: formState = initialState,
	action: StepperActions
): formState => {
	switch (action.type) {
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
		case ActionTypes.SET_CLUE:
			return { ...state, clue: action.payload }
		case ActionTypes.ERROR_PASSWORD:
			return { ...state, errorPass: action.payload }
		case ActionTypes.ERROR_SAME_PASSWORD:
			return { ...state, errorSamePass: true }
		case ActionTypes.SHOW_PASSWORD:
			return { ...state, showPass: action.payload }
		case ActionTypes.RESET_STEPS:
			return initialState
		default:
			return state
	}
	// const flow = {
	// 	ACCEPT_TERMS: (newState: formState, newAction: StepperActions) => ({
	// 		...newState,
	// 		terms: newAction,
	// 	}),
	// }

	// return flow[action.type] ? flow[action.type](state, action) : state
}
