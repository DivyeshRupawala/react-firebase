import React from 'react'
import { 
	InputGroup, 
	InputGroupAddon, 
	Button, 
	Input } from 'reactstrap';

const searchBox = () => {
	return (
		<div>
			<InputGroup>			       
		    	<Input placeholder="Search Product by Name or Category..." />
		        <InputGroupAddon addonType="append">
		          <Button color="info">Search</Button>
		        </InputGroupAddon>
		    </InputGroup>
		</div>
	)
}

export default searchBox;