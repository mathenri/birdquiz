import React, {Component} from "react";
import {Switch, Route} from "react-router";
import Quiz from "./Quiz";
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
  	  			     render={(props) => <Quiz {...props} time={this.props.time} 
					      	  						     nrCorrectAnswers={this.props.nrCorrectAnswers}
					      	  						     currentBirdImageFilePath={this.props.currentBirdImageFilePath}
					      	  						     handleSubmit={this.props.handleSubmit}
					      	  						     usersAnswer={this.props.usersAnswer}
					      	  						     handleChange={this.props.handleChange}
					      	  						     formatTime={this.props.formatTime} />}
				/>
	      	  <Route path="/highscore" 
	      	  		 render={(props) => <Highscore {...props} highscore={this.props.highscore} />} 
	      	    />
	        </Switch>
	    );
	}
}

export default Main;