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

export type StepperActions = NextStep | BackStep | ResetSteps | AcceptTerms
