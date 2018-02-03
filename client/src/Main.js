import React, {Component} from "react";
import {Switch, Route} from "react-router";
import Quiz from "./Quiz";
import Highscore from "./Highscore";

class Main extends Component {
	render() {
		return (
			<Switch>
	      	  <Route exact path="/" 
	      	  			   render={(props) => <Quiz {...props} startNewQuiz={this.props.startNewQuiz} 
	      	  												   time={this.props.time} 
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