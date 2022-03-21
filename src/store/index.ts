import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { ThunkAction, Action } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { StepperReducer } from '../reducers/StepperReducer'

import rootSaga from './sagas'

export type GlobalState = ReturnType<typeof rootReducer>

const sagaMiddleware = createSagaMiddleware()

export const rootReducer = combineReducers({ stepper: StepperReducer })

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>

export default store
