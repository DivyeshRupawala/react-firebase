import { takeEvery } from 'redux-saga/effects'
import C from './sign-up/sign-up-constants'
import { signUp } from './sign-up/sign-up-sagas'

import LOGIN_CONSTANTS from './login/login-constants'
import { login } from './login/login-sagas'

export default function* mySaga() {
  yield takeEvery(C.SIGN_UP, signUp)
  yield takeEvery(LOGIN_CONSTANTS.LOGIN, login)
}
