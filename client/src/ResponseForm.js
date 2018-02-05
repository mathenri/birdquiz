import React, {Component} from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

class ResponseForm extends Component {
	render() {
		return (
			<Form inline onSubmit={this.props.handleSubmit} autocomplete="off">
      	<FormGroup controlId="answerControl">
        	<FormControl type="text"
                  		 value={this.props.usersAnswer} 
                  		 placeholder="Fågelnamn"
                  		 onChange={this.props.handleChange}
                       bsSize="large"/>
      	</FormGroup>{' '}
      	<Button type="submit" bsStyle="success" bsSize="large">OK</Button>
      </Form>
		);
	}
}

export default ResponseForm;