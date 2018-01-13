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
      currentBirdImageFilePath: './images/first.png'
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
    } else {
      alert('Answer ' + this.state.usersAnswer + ' is incorrect!');
    }

    this.genereateNewBird();
    
    e.preventDefault();
  }

  genereateNewBird() {
    const nextBird = imageFilePaths[Math.floor(Math.random() * imageFilePaths.length)];

    this.setState({
      correctAnswer: nextBird.name,
      currentBirdImageFilePath: nextBird.imageFilePath
    });
  }

  render() {

    return (
      <div className="container">
        <Jumbotron>
          <h1>Fågelquiz</h1>
          <p>Välkommen till Fågelquiz! Arta fåglar och få poäng.</p>
          <p>
            <Button bsStyle="primary" onClick={this.genereateNewBird}>Nytt quiz</Button>
          </p>
        </Jumbotron>
        <div className="content-container center-block">
          <Image src={require(`${this.state.currentBirdImageFilePath}`)} responsive />
        </div>
        <div className="content-container center-block">
          <Form inline onSubmit={this.handleSubmit}>
            <FormGroup controlId="answerControl">
              <ControlLabel>Answer:</ControlLabel>{' '}
              <FormControl type="text"
                 value={this.state.usersAnswer} 
                 placeholder="Bird name"
                 onChange={this.handleChange}/>
            </FormGroup>{' '}
            <Button type="submit" bsStyle="success">Submit</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default App;
