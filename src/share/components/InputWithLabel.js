import React from 'react'
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

const InputWithLabel = ({label,id, type, onChangeValue}) => 
	(
		<FormGroup>
          <Label for={id}>{label}</Label>
          <Input 
          		type={type} 
          		id={id} 
          		onChange={event => onChangeValue(event,id)}/>		          
        </FormGroup>
	)

export default InputWithLabel	