import C from './sign-up-constants'

export const signUp = (firstName, lastName, email, password, dob, sex) =>
	({
		type : C.SIGN_UP,
		payload : {firstName : firstName, lastName : lastName, email : email, password : password, dob : dob, sex:sex}
	})