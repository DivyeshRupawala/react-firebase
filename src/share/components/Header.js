import React from 'react'
import logo from '../../assets/images/logo.svg'
import {Link} from 'react-router-dom'

const Header = () =>
	(
		<header className="App-header">
			
	      <Link to="/" >
	         <img src={logo} className="App-logo" alt="logo" />
	      </Link>
					
	      <div className="menu-panel">
	        <Link to='logIn'>LogIn</Link>
	        <Link to='signUp'>SignUp</Link>						
	      </div>
	          
	    </header>
	)

export default Header;
