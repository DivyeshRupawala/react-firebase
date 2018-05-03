import { createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import appReducer from './index-reducer'
import mySaga from './index-sagas'

const initialState = {
	"signUp" : [],
	"customAlert" : {
		isOpen : false
	},	
	authUser : {
		isAuthUser : false
	}
};

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(appReducer, initialState, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(mySaga)

export default store