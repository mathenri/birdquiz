import React, {Component} from "react";
import {Switch, Route} from "react-router";
import QuizPage from "./QuizPage";
import Highscore from "./Highscore";
import Home from './Home';

class Main extends Component {
	render() {
		return (
			<Switch>
			  <Route exact path="/" component={Home} />
	      	  <Route path="/quiz" component={QuizPage} />
	      	  <Route path="/highscore" 
	      	  		 render={(props) => <Highscore {...props} highscore={this.props.highscore} />} 
	      	    />
	        </Switch>
	    );
	}
}

export default Main;