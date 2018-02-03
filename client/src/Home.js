import React, {Component} from 'react';
import BirdQuizJumbotron from './BirdQuizJumbotron';

class Home extends Component {
	render() {
		return (
			<div className="row">
	          <div className="col">
	            <BirdQuizJumbotron startNewQuiz={this.props.startNewQuiz}/>
	          </div>
	        </div>
		);
	}

}

export default Home;