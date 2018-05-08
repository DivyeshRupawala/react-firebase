import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { withCookies } from 'react-cookie';

import Header from './share/components/Header'
import Footer from './share/components/Footer'

import LogIn from './login/LogIn'
import SignUp from './sign-up/SignUp'

import Home from './home/Home'

import CustomAlert from './share/components/custom-alert/CustomAlert'

const RouterHandler = ({isUserLoggedIn, cookies}) => {
	let isLoggedIn = isUserLoggedIn ;

	if (!isLoggedIn) {		
		const userCookie = cookies.get('user');
		if (userCookie) {
			isLoggedIn = true;			
		}
	}

	return(
		<BrowserRouter>
			<div>
				<CustomAlert />
				<Header />			
				<center className='center-panel'>
					{isLoggedIn ? 
						<Switch>
					      <Route exact path='/' component={Home}/>
								<Route path='/home' component={Home} />
					      <Redirect from="/logIn" exact to="/" />
					    </Switch>					    
					    :
					    <Switch>
					      <Route exact path='/' component={LogIn}/>
					      <Route path='/logIn' component={LogIn}/>
					      <Route path='/signUp' component={SignUp}/>
					    </Switch>	
					}
					
			    </center>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

const mapStateToProps = (state, props) => {	
	return {
		isUserLoggedIn : state.authUser.isAuthUser
	}
}
	

const container = connect(mapStateToProps)(withCookies(RouterHandler))

export default container