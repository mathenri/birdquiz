import React, {Component} from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

class ResponseForm extends Component {
	render() {
		return (
			<Form inline onSubmit={this.props.handleSubmit}>
              	<FormGroup controlId="answerControl">
                	<ControlLabel>Svar:</ControlLabel>{' '}
                	<FormControl type="text"
                  		value={this.props.usersAnswer} 
                  		placeholder="Fågelnamn"
                  		onChange={this.props.handleChange}/>
              	</FormGroup>{' '}
              	<Button type="submit" bsStyle="success">OK</Button>
            </Form>
		);
	}
}

export default ResponseForm;