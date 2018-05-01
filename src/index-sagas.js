import { takeEvery } from 'redux-saga/effects'
import C from './sign-up/sign-up-constants'
import { signUp } from './sign-up/sign-up-sagas'

export default function* mySaga() {
  yield takeEvery(C.SIGN_UP, signUp)
}
