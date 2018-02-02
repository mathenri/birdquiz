import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import BirdQuizJumbotron from './BirdQuizJumbotron';
import ResponseForm from './ResponseForm';

class Quiz extends Component {

	render() {
		return (
			<div>
				<div className="row">
		          <div className="col">
		            <BirdQuizJumbotron startNewQuiz={this.props.startNewQuiz}/>
		          </div>
		        </div>

		        <div className="row" id="game-top">
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
		        <div className="row form-container center-block">
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