import C from './login-constants'
 
const authUser = (state={}, actions) => {
	switch(actions.type) {
		case C.LOGGED_IN :
			let user = actions.payload
			return {isAuthUser : true, user};
		case C.LOGOUT :
			return {isAuthUser : false, user : {}}	
		default:
			return state;	
	}
}


export default authUser