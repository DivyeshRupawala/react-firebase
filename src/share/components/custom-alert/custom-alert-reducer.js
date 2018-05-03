import C from './custom-alert-constants'

const customAlert = (state=[], action) => {
	switch(action.type) {
		case C.SHOW_ALERT :
			let obj = Object.assign({}, action.payload) 
			return obj			
		case C.HIDE_ALERT : 
			return {isOpen : false}			
		default :
			return state			
	}
}

export default customAlert