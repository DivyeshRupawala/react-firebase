import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './share/components/Header'
import Footer from './share/components/Footer'

import LogIn from './login/LogIn'
import SignUp from './sign-up/SignUp'

const RouterHandler = () => {
	return(
		<BrowserRouter>
			<div>
				<Header />			
				<center className='center-panel'>	
					<Switch>
				      <Route exact path='/' component={LogIn}/>
				      <Route path='/logIn' component={LogIn}/>
				      <Route path='/signUp' component={SignUp}/>
				    </Switch>	
			    </center>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default RouterHandler