import React, { Component } from 'react';
import './App.css';
import {Jumbotron, Button, Image, FormGroup, FormControl, ControlLabel, Form, 
        Grid, Row, Col} from 'react-bootstrap';
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
      nrCorrectAnswers: 0,
      time: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.genereateNewBird = this.genereateNewBird.bind(this);
    this.startNewQuiz = this.startNewQuiz.bind(this);
    this.timerTick = this.timerTick.bind(this);
  }

  startNewQuiz() {
    setInterval(this.timerTick, 1000);
    this.genereateNewBird();
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
      <Grid>
        <Jumbotron>
          <h1>Fågelquiz</h1>
          <p>Välkommen till Fågelquiz! Arta fåglar och få poäng.</p>
          <p>
            <Button bsStyle="primary" onClick={this.startNewQuiz}>Starta quiz</Button>
          </p>
        </Jumbotron>

        <Row>
          <Col md={6}>
            <h1>{this.state.time}</h1>
          </Col>
          <Col md={6}>
            <h1 className="pull-right">Antal rätt: {this.state.nrCorrectAnswers}</h1>
          </Col>
        </Row>

        <Row className="content-container center-block">
          <Image src={require(`${this.state.currentBirdImageFilePath}`)} responsive />
        </Row>
        <Row className="form-container center-block">
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
        </Row>
        
        <Row>
          <hr />
          <footer>
            <p>&copy; Mattias Henriksson 2018</p>
          </footer>
          </Row>
      </Grid>
    );
  }
}

export default App;
