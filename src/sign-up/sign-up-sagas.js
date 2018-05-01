import { call, put } from 'redux-saga/effects'
import C from './sign-up-constants'
import {signUpUserApi} from './sign-up-api'

export function* signUp(action) {
   try {
       const users = yield call (signUpUserApi, action.payload);

       console.log("Users : "+users)
       // // Instructing middleware to dispatch corresponding action.
       yield put({type: C.SIGN_UP_SUCCESS, payload : users});
   } catch (e) {
      console.log("Error : " + e.message);
   }
}


