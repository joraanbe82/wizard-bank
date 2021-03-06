import { StepperActions } from '../actions/StepperActions'
import { ActionTypes } from '../action-types'

export type formState = {
  clue: string
  confirmPass: string
  errorPass: boolean
  errorSamePass: boolean
  pass: string
  showPass: boolean
  terms: boolean
}

const initialState = {
  clue: '',
  confirmPass: '',
  errorPass: false,
  errorSamePass: false,
  pass: '',
  showPass: false,
  terms: false,
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
}
