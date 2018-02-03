import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class BirdQuizJumbotron extends Component {

	render() {
		return (
			<Jumbotron>
              	<h1>Fågelquiz</h1>
              	<p>Välkommen till Fågelquiz! Arta fåglar och få poäng.</p>
              	<p>
                	<Button bsStyle="primary" onClick={() => this.props.startNewQuiz()}>Starta quiz</Button>
              	</p>
            </Jumbotron>
        );
	}
}

export default BirdQuizJumbotron;