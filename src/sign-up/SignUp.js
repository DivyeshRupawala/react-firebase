import React from 'react'
import { Card, Button, CardBody, CardTitle } from 'reactstrap'
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { signUp } from './sign-up-actions'
import InputWithLabel from '../share/components/InputWithLabel'

const SignUp = ({signUp, onSignUp=f=>f}) => {
	let _dob, _email, _firstName, _lastName, _mobileNumber, _sex, _password;

	const clickHandler = () => {
		console.log(_dob, _email, _firstName, _lastName, _mobileNumber, _sex, _password)
		//onSignUp(getObj());
	}

	const ID_FIRT_NAME = "firstName";
	const ID_LAST_NAME = "lastName";
	const ID_EMAIL = "email";
	const ID_DOB = "dob";
	const ID_MOBILE_NUMBER = "mobileNumber";
	const ID_SEX = "sex";
	const ID_PASSWORD = "password";

	const getObj = () => ({
		'dob' : _dob,
		'email' : _email,
		'firstName' : _firstName,
		'lastName' : _lastName,
		'mobileNumber' : _mobileNumber,
		'sex' : _sex,
		'password' : _password
	})

	const onHanlderChange = (e, id) => {
		let value = e.currentTarget.value;

		switch(id) {
			case ID_FIRT_NAME : 
				_firstName = value
				break
			case ID_LAST_NAME :
				_lastName = value
				break
			case ID_DOB :
				_dob = value
				break
			case ID_EMAIL :
				_email = value
				break
			case ID_MOBILE_NUMBER :
				_mobileNumber = value
				break
			case ID_SEX :
				_sex = value
				break
			case ID_PASSWORD :
				_password = value		
				break
		}
	}

	return(
		<div className='signup'>	
		  
	      <Card>	       
	        <CardTitle>Sign Up</CardTitle>
	        <CardBody>
		      <Form>
		      	<InputWithLabel id={ID_FIRT_NAME} label="First Name" type="text" onChangeValue={onHanlderChange}/>		       
		      	<InputWithLabel id={ID_LAST_NAME} label="Last Name" type="text" onChangeValue={onHanlderChange}/>	
		      	<InputWithLabel id={ID_MOBILE_NUMBER} label="Mobile Number" type="number" onChangeValue={onHanlderChange}/>
		      	<InputWithLabel id={ID_EMAIL} label="Email" type="email" onChangeValue={onHanlderChange}/>
		      	<InputWithLabel id={ID_PASSWORD} label="Password" type="password" onChangeValue={onHanlderChange}/>	
		      	<InputWithLabel id={ID_DOB} label="Birthday" type="date" onChangeValue={onHanlderChange}/>		       

		        <FormGroup tag="fieldset">		         
		          <FormGroup check>
		            <Label check>
		              <Input type="radio" name="radio1" /> Male
		            </Label>
		          </FormGroup>
		          <FormGroup check>
		            <Label check>
		              <Input type="radio" name="radio1" />Female
		            </Label>
		          </FormGroup>
		          
		        </FormGroup>

		        <Button onClick={clickHandler}>Sign Up</Button>
	          	<Button>Reset</Button>
		      </Form>
	        </CardBody>
	      </Card>
		</div>
	)
}

const mapStateToProps = (state, props) => {
	return {
		signUp : state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSignUp({firstName, lastName, email, password, dob, sex}) {
			dispatch(
				signUp(firstName, lastName, email, password, dob, sex)
			)
		}
	}
}

const container = connect(mapStateToProps, mapDispatchToProps)(SignUp)

export default withRouter(container)