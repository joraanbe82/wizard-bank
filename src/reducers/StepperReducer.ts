import { StepperActions } from '../actions/StepperActions'
import { ActionTypes } from '../action-types'

export type stepperState = {
  currentPage: number
  complete: null | boolean
  pending: null | boolean
}

const initialState = {
  currentPage: 0,
  complete: null,
  pending: null,
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
    case ActionTypes.COMPLETE_SUCCESS:
      return { ...state, complete: action.payload }
    case ActionTypes.COMPLETE_ERROR:
      return { ...state, complete: action.payload }
    case ActionTypes.PENDING_PROCCESS:
      return { ...state, pending: action.payload }

    default:
      return state
  }
}
