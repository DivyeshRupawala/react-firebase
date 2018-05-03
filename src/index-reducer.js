import { combineReducers } from 'redux'
import signUp from './sign-up/sign-up-reducer'
import customAlert from './share/components/custom-alert/custom-alert-reducer'
import authUser from './login/login-reducer'

export default combineReducers({
						  signUp,
						  customAlert,
						  authUser
						});
