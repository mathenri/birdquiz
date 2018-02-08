import React, {Component} from 'react';
import {Image, Modal, Button} from 'react-bootstrap';
import ResponseForm from './ResponseForm';
import './Quiz.css';

class Quiz extends Component {

	render() {
		return (
			<div>
				<Modal show={this.props.showQuizModal} onHide={this.props.continueQuiz}>
					<Modal.Header closeButton>
						<Modal.Title>Rätt!</Modal.Title>
          			</Modal.Header>
          			<Modal.Body>
          				Rätt svarat! Snyggt!
          			</Modal.Body>
          			<Modal.Footer>
		            	<Button bsStyle="primary" onClick={this.props.continueQuiz}>OK</Button>
		          	</Modal.Footer>
				</Modal>

				<div className="row">
		          <div className="col-sm-6">
		            <h1>{this.props.formatTime(this.props.time)}</h1>
		          </div>
		          <div className="col-sm-6">
		            <h1 className="pull-right">{this.props.nrCorrectAnswers}</h1>
		          </div>
		        </div>

		        <div className="row content-container center-block">
		          <div className="col">
		            <Image src={require(`${this.props.currentBirdImageFilePath}`)} responsive />
		          </div>
		        </div>
		        <div className="row form-container text-center">
		          <div className="col">
		            <ResponseForm handleSubmit={this.props.handleSubmit} 
		                          usersAnswer={this.props.usersAnswer} 
		                          handleChange={this.props.handleChange} />
		          </div>
		        </div>
		    </div>
		);
	}
}

export default Quiz;