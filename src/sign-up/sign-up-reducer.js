import C from './sign-up-constants'

const signUp = (state=[], action) => {
	switch(action.type) {
		case C.SIGN_UP:
			return state
		case  C.SIGN_UP_SUCCESS:
			return [...state, action.payload]
		default:
			return state
	}
}

export default signUp