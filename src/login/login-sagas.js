import { call, put } from 'redux-saga/effects'
import ALERT_CONSTANTS from '../share/components/custom-alert/custom-alert-constants'
import C from './login-constants'
import {onLogin} from './login-api'

export function* login(action) {
   try {
       const response = yield call (onLogin, action.payload);
       if (response.size > 0) {
          let data = {}
          response.docs.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              //console.log(doc.id, " => ", doc.data());
              //cookiesUtils.setAuthorisedUser(doc.data());
              data = doc.data();              
          });

          yield put({type: ALERT_CONSTANTS.SHOW_ALERT, payload : {isOpen : true, message : 'Authorised', type : 'success'}});
          yield put({type: C.LOGGED_IN, payload : data});       	
       } else {
       		yield put({type: ALERT_CONSTANTS.SHOW_ALERT, payload : {isOpen : true, message : 'Please enter valid credential.', type : 'danger'}});
       }
   } catch (e) {
      console.log("Error : " + e.message);
   }
}


