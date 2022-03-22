import { call, put, takeEvery } from 'redux-saga/effects'
import { Loading } from 'notiflix/build/notiflix-loading-aio'
import { ActionTypes } from '../../action-types'

import submitForm from '../../service/api'

type FormParams = {
	type: string
	payload: string
}

function* fetchForm(action: FormParams) {
	try {
		Loading.pulse()
		yield put({ type: ActionTypes.PENDING_PROCCESS, payload: true })
		yield call(submitForm, action.payload)
		yield put({ type: ActionTypes.COMPLETE_SUCCESS, payload: true })
		yield put({ type: ActionTypes.PENDING_PROCCESS, payload: false })
		Loading.remove()
	} catch {
		yield put({ type: ActionTypes.COMPLETE_ERROR, payload: false })
		yield put({ type: ActionTypes.PENDING_PROCCESS, payload: false })
		Loading.remove()
	}
}

function* watchComplete() {
	yield takeEvery(ActionTypes.COMPLETE_PROCCESS, fetchForm)
}

export default watchComplete
