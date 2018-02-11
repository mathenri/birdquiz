import React, {Component} from 'react';
import {Image, Button} from 'react-bootstrap';
import ResponseForm from './ResponseForm';
import QuizAnswerModal from './QuizAnswerModal';
import QuizDoneModal from './QuizDoneModal';

import './Quiz.css';

class Quiz extends Component {

	render() {
		return (
			<div>
				<QuizAnswerModal showQuizAnswerModal={this.props.showQuizAnswerModal}
								 continueQuiz={this.props.continueQuiz}
								 answerModalTitle={this.props.answerModalTitle}
								 answerModalBody={this.props.answerModalBody} />

				<QuizDoneModal  showQuizDoneModal={this.props.showQuizDoneModal}
								registerScore={this.props.registerScore}
								nrCorrectAnswers={this.props.nrCorrectAnswers}
								time={this.props.time} />

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