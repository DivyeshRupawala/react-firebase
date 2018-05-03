import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import RouterHandler from './RouterHandler'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './config-store'
import { CookiesProvider } from 'react-cookie';

Window.store = store;

ReactDOM.render(<Provider store={store}>
					<CookiesProvider>
						<RouterHandler />
					</CookiesProvider>
				</Provider>, document.getElementById('root'));
registerServiceWorker();
