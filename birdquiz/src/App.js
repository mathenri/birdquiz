import React, { Component } from 'react';
import './App.css';
import {Jumbotron, Button, Image, FormGroup, FormControl, ControlLabel, Form} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import imageFilePaths from './image-file-names.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usersAnswer: '',
      correctAnswer: 'Storlom',
      currentBirdImageFilePath: './images/first.png',
      nrCorrectAnswers: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.genereateNewBird = this.genereateNewBird.bind(this);
  }

  handleChange(e) {
    this.setState({
      usersAnswer: e.target.value
    });
  }

  handleSubmit(e) {
    if (this.state.usersAnswer === this.state.correctAnswer) {
      alert('Answer ' + this.state.usersAnswer + ' is correct!');
      this.setState({
        nrCorrectAnswers: this.state.nrCorrectAnswers + 1
      });
    } else {
      alert('Answer ' + this.state.usersAnswer + ' is incorrect! The correct answer is ' + this.state.correctAnswer);
    }

    this.genereateNewBird();
    
    e.preventDefault();
  }

  genereateNewBird() {
    if (imageFilePaths.length === 0) {
      alert("Quizet är klart!");
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

  render() {

    return (
      <div className="container">
        <Jumbotron>
          <h1>Fågelquiz</h1>
          <p>Välkommen till Fågelquiz! Arta fåglar och få poäng.</p>
          <p>
            <Button bsStyle="primary" onClick={this.genereateNewBird}>Starta quiz</Button>
          </p>
        </Jumbotron>
        <div className="content-container center-block">
          <Image src={require(`${this.state.currentBirdImageFilePath}`)} responsive />
        </div>
        <div className="form-container center-block">
          <Form inline onSubmit={this.handleSubmit}>
            <FormGroup controlId="answerControl">
              <ControlLabel>Svar:</ControlLabel>{' '}
              <FormControl type="text"
                 value={this.state.usersAnswer} 
                 placeholder="Fågelnamn"
                 onChange={this.handleChange}/>
            </FormGroup>{' '}
            <Button type="submit" bsStyle="success">OK</Button>
          </Form>
        </div>
        <div>
          Antal rätt: {this.state.nrCorrectAnswers}
        </div>

        <hr />
        <footer>
          <p>&copy; Mattias Henriksson 2018</p>
        </footer>
      </div>
    );
  }
}

export default App;
