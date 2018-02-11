import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

class QuizAnswerModal extends Component {
	render() {
		return (
			<Modal show={this.props.showQuizAnswerModal} onHide={this.props.continueQuiz}>
				<Modal.Header closeButton>
					<Modal.Title>{this.props.answerModalTitle}</Modal.Title>
      			</Modal.Header>
      			<Modal.Body>
      				{this.props.answerModalBody}
      			</Modal.Body>
      			<Modal.Footer>
	            	<Button bsStyle="primary" onClick={this.props.continueQuiz}>OK</Button>
	          	</Modal.Footer>
			</Modal>
		);
	}
}

export default QuizAnswerModal;