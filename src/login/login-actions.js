import C from './login-constants'

export const login = (email, password) => 
	({
		type :C.LOGIN,
		payload : {email : email, password : password} 
	})

export const logout = () =>
	({
		type: C.LOGOUT
	})	