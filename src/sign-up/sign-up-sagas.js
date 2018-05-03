import { call, put } from 'redux-saga/effects'
import C from './sign-up-constants'
import ALERT_CONSTANTS from '../share/components/custom-alert/custom-alert-constants'
import {signUpUserApi} from './sign-up-api'

export function* signUp(action) {
   try {
       const users = yield call (signUpUserApi, action.payload);

       console.log("Users : "+users)
       // // Instructing middleware to dispatch corresponding action.
       yield put({type: C.SIGN_UP_SUCCESS, payload : users});
       yield put({type: ALERT_CONSTANTS.SHOW_ALERT, payload : {isOpen : true, message : 'Sign Up has been completed successfuly.'}});
       
   } catch (e) {
      console.log("Error : " + e.message);
   }
}


