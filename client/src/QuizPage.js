import React, {Component} from 'react';
import StartQuizButton from './StartQuizButton';
import Quiz from './Quiz';
import imageFilePaths from './image-file-names.json';
import {Redirect} from 'react-router-dom';

class QuizPage extends Component {
	constructor() {
		super();
		this.state = {
			isQuizHidden: true,
			usersAnswer: '',
	      	correctAnswer: 'Storlom',
	      	currentBirdImageFilePath: './images/first.png',
	      	nrCorrectAnswers: 0,
	      	time: 0,
	      	showQuizAnswerModal: false,
	      	answerModalTitle: '',
	      	answerModalBody: '',
	      	showQuizDoneModal: false
		};

		this.startNewQuiz = this.startNewQuiz.bind(this);
		this.continueQuiz = this.continueQuiz.bind(this);
		this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.genereateNewBird = this.genereateNewBird.bind(this);
	    this.timerTick = this.timerTick.bind(this);
	    this.quizDone = this.quizDone.bind(this);
	    this.registerScore = this.registerScore.bind(this);
	}

	startNewQuiz() {
		this._clockIntervalId = setInterval(this.timerTick, 1000);
		this.setState({
		  isQuizHidden: !this.state.isQuizHidden
		});
		this.genereateNewBird();
	}

	genereateNewBird() {
		if (imageFilePaths.length === 0) {
		  this.quizDone()
		} else {
		  const nextBirdIndex = Math.floor(Math.random() * imageFilePaths.length);
		  const nextBird = imageFilePaths.splice(nextBirdIndex, 1)[0];

		  this.setState({
		    usersAnswer: '',
		    correctAnswer: nextBird.name,
		    currentBirdImageFilePath: nextBird.imageFilePath
		  });
		}
	}

	quizDone() {
		clearInterval(this._clockIntervalId);
		this.setState({
			showQuizDoneModal: true
		});
	}

	registerScore() {
		const playerScore = this.state.nrCorrectAnswers;
		const playerName = 'Mattias';
		const gameTime = this.state.time;

		this.props.setScore(
			{
				name: playerName,
				score: playerScore,
				time: gameTime,
				date: new Date()
			}
		);
		this.props.history.push('/highscore');
	}

	timerTick() {
		this.setState({
		  time: this.state.time + 1
		});
	}

	handleChange(e) {
		this.setState({
		  usersAnswer: e.target.value
		});
	}

	handleSubmit(e) {
		if (this.state.usersAnswer === this.state.correctAnswer) {
		  {/*alert('Answer ' + this.state.usersAnswer + ' is correct!');*/}
		  this.setState({
		  	showQuizAnswerModal: true,
		  	answerModalTitle: 'Rätt!',
		  	answerModalBody: this.state.usersAnswer + ' är rätt svar.',
		    nrCorrectAnswers: this.state.nrCorrectAnswers + 1
		  });
		} else {
			this.setState({
				showQuizAnswerModal: true,
				answerModalTitle: 'Fel!',
		  		answerModalBody: this.state.usersAnswer + ' är fel. Rätt svar är ' + this.state.correctAnswer
			});
		  {/*alert('Answer ' + this.state.usersAnswer + ' is incorrect! The correct answer is ' + this.state.correctAnswer);*/}
		}

		e.preventDefault();
	}

	continueQuiz() {
		this.setState({
			showQuizAnswerModal: false
		});
		this.genereateNewBird();
	}

	

	render() {
		return (
			<div>
				{this.state.isQuizHidden && 
					<StartQuizButton startNewQuiz={this.startNewQuiz} />}

		        {!this.state.isQuizHidden &&
		        	<Quiz time={this.state.time} 
					      nrCorrectAnswers={this.state.nrCorrectAnswers}
					      currentBirdImageFilePath={this.state.currentBirdImageFilePath}
					      handleSubmit={this.handleSubmit}
					      usersAnswer={this.state.usersAnswer}
					      handleChange={this.handleChange}
					      formatTime={this.props.formatTime}
					      continueQuiz={this.continueQuiz}
					  	  showQuizAnswerModal={this.state.showQuizAnswerModal}
					  	  answerModalTitle={this.state.answerModalTitle}
					  	  answerModalBody={this.state.answerModalBody}
					  	  showQuizDoneModal={this.state.showQuizDoneModal}
					  	  registerScore={this.registerScore} />}
	        </div>
		);
	}

}

export default QuizPage;