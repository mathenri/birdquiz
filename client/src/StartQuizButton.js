import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class StartQuizButton extends Component {

	render() {
		return (
			<div className="row">
				<div className="col text-center">
					<Button bsStyle="primary" bsSize="large" onClick={() => this.props.startNewQuiz()}>
						Starta Quiz!
					</Button>
				</div>
			</div>
		);
	}
}

export default StartQuizButton;