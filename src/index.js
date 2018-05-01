import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import RouterHandler from './RouterHandler'
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import appReducer from './index-reducer'
import mySaga from './index-sagas'

const initialState = {
	"signUp" : [] 
};

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(appReducer, initialState, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(mySaga)

Window.store = store;

ReactDOM.render(<Provider store={store}>
		<RouterHandler />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
