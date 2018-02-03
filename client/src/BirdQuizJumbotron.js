import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Route } from 'react-router-dom';

class BirdQuizJumbotron extends Component {

	render() {
		return (
			<Jumbotron>
              	<h1>Fågelquiz</h1>
              	<p>Välkommen till Fågelquiz! Arta fåglar och få poäng.</p>
              	<p>
                	{/*<Button bsStyle="primary" onClick={() => this.props.startNewQuiz()}>Starta quiz</Button>*/}
                  <Route 
                    render={({history}) => (
                      <Button bsStyle="primary" onClick={() => {history.push('/quiz')} }>
                        Starta Quiz
                      </Button>
                    )} 
                  />
              	</p>
            </Jumbotron>
        );
	}
}

export default BirdQuizJumbotron;