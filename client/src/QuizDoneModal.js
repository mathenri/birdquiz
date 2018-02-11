import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

class QuizDoneModal extends Component {
	render() {
		return (
			<Modal show={this.props.showQuizDoneModal} onHide={this.props.registerScore}>
				<Modal.Header closeButton>
					<Modal.Title>Quiz slut!</Modal.Title>
      			</Modal.Header>
      			<Modal.Body>
      				<p>Antal rätt: {this.props.nrCorrectAnswer}</p>
      				<p>Tid: {this.props.time}</p>
      			</Modal.Body>
      			<Modal.Footer>
	            	<Button bsStyle="primary" onClick={this.props.registerScore}>OK</Button>
	          	</Modal.Footer>
			</Modal>
		);
	}
}

export default QuizDoneModal;