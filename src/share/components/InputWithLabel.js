import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap';

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