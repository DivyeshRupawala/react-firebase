import React from 'react'
import { Card, Button, CardBody, CardTitle } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import CustomAlert from '../share/components/CustomAlert'

const LogIn = () => {
	return(
		<div className='login'>	
		  
	      <Card>	       
	        <CardTitle>Log In</CardTitle>
	        <CardBody>
		      <Form>
		        <FormGroup>
		          <Label for="email">Email</Label>
		          <Input type="email"/>		          
		        </FormGroup>

		        <FormGroup>
		          <Label for="password">Password</Label>
		          <Input type="password" id="password"/>          
		        </FormGroup>

		        <Button>Log In</Button>
	          	<Button>Cancel</Button>
		      </Form>
	        </CardBody>
	      </Card>
		</div>
	)
}

export default LogIn