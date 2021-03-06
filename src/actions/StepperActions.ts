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
  payload: boolean
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
interface SetErrorPassword {
  type: ActionTypes.ERROR_PASSWORD
  payload: boolean
}
interface SetErrorSamePassword {
  type: ActionTypes.ERROR_SAME_PASSWORD
  payload: boolean
}
interface SetClue {
  type: ActionTypes.SET_CLUE
  payload: string
}
interface PendingProccess {
  type: ActionTypes.PENDING_PROCCESS
  payload: boolean
}
interface CompleteProccess {
  type: ActionTypes.COMPLETE_PROCCESS
  payload: string
}
interface CompleteSuccess {
  type: ActionTypes.COMPLETE_SUCCESS
  payload: boolean
}
interface CompleteError {
  type: ActionTypes.COMPLETE_ERROR
  payload: boolean
}
interface ShowPassword {
  type: ActionTypes.SHOW_PASSWORD
  payload: boolean
}
export type StepperActions =
  | NextStep
  | BackStep
  | ResetSteps
  | AcceptTerms
  | SetPassword
  | SetConfirmPassword
  | SetErrorPassword
  | SetErrorSamePassword
  | SetClue
  | PendingProccess
  | CompleteProccess
  | CompleteSuccess
  | CompleteError
  | ShowPassword
