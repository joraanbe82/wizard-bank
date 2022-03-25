import { all, fork } from 'redux-saga/effects'
import watchComplete from './watchComplete'

export default function* rootSaga() {
  yield all([fork(watchComplete)])
}
