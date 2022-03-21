import { ActionTypes } from '../action-types'

interface NextStep {
	type: ActionTypes.NEXT_STEP
	payload: number
}
interface BackStep {
	type: ActionTypes.BACK_STEP
	payload: number
}
interface ResetSteps {
	type: ActionTypes.RESET_STEPS
	payload: number
}
interface AcceptTerms {
	type: ActionTypes.ACCEPT_TERMS
	payload: boolean
}
interface SetPassword {
	type: ActionTypes.SET_PASSWORD
	payload: string
}

interface SetConfirmPassword {
	type: ActionTypes.CONFIRM_PASSWORD
	payload: string
}

interface SetClue {
	type: ActionTypes.SET_CLUE
	payload: string
}
export type StepperActions =
	| NextStep
	| BackStep
	| ResetSteps
	| AcceptTerms
	| SetPassword
	| SetConfirmPassword
	| SetClue
