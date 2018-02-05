import React, {Component} from "react";
import {Switch, Route} from "react-router";
import QuizPage from "./QuizPage";
import Highscore from "./Highscore";
import Home from './Home';

class Main extends Component {
	render() {
		return (
			<Switch>
			  <Route exact path="/" 
			  		 render={(props) => <Home {...props} startNewQuiz={this.props.startNewQuiz} />}
			  />
	      	  <Route path="/quiz" 
  	  			     render={(props) => <QuizPage {...props} time={this.props.time} 
					      	  						     nrCorrectAnswers={this.props.nrCorrectAnswers}
					      	  						     currentBirdImageFilePath={this.props.currentBirdImageFilePath}
					      	  						     handleSubmit={this.props.handleSubmit}
					      	  						     usersAnswer={this.props.usersAnswer}
					      	  						     handleChange={this.props.handleChange}
					      	  						     formatTime={this.props.formatTime} 
					      	  						     startNewQuiz={this.props.startNewQuiz}
					      	  						     isQuizHidden={this.props.isQuizHidden} />}
				/>
	      	  <Route path="/highscore" 
	      	  		 render={(props) => <Highscore {...props} highscore={this.props.highscore} />} 
	      	    />
	        </Switch>
	    );
	}
}

export default Main;