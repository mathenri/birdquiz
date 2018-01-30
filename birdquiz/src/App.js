import React, { Component } from 'react';
import './App.css';
import {Button, Image, FormGroup, FormControl, ControlLabel, Form, 
        Grid, Row, Col, Nav, Navbar, NavItem} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import imageFilePaths from './image-file-names.json';
import BirdQuizJumbotron from "./BirdQuizJumbotron";
import ResponseForm from "./ResponseForm";

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
    document.getElementById('game-top').scrollIntoView();
    alert("Quizet startar nu");
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
      alert(`Quizet är klart!\nAntal rätt: ${this.state.nrCorrectAnswers}\nTid: ${this.formatTime(this.state.time)}`);
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

  formatTime(seconds) {
    const min = Math.floor(seconds/60);
    const sec = seconds % 60;
    let minStr = min;
    if (min / 10 < 1) {
        minStr = "0" + minStr;
    }
    let secStr = sec;
    if (sec / 10 < 1) {
        secStr = "0" + secStr;
    }
    return minStr + ":" + secStr;
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <BirdQuizJumbotron startNewQuiz={this.startNewQuiz}/>
          </div>
        </div>

        <div className="row" id="game-top">
          <div className="col-sm-6">
            <h1>{this.formatTime(this.state.time)}</h1>
          </div>
          <div className="col-sm-6">
            <h1 className="pull-right">{this.state.nrCorrectAnswers}</h1>
          </div>
        </div>

        <div className="row content-container center-block">
          <div className="col">
            <Image src={require(`${this.state.currentBirdImageFilePath}`)} responsive />
          </div>
        </div>
        <div className="row form-container center-block">
          <div className="col">
            <ResponseForm handleSubmit={this.handleSubmit} 
                          usersAnswer={this.state.usersAnswer} 
                          handleChange={this.handleChange} />
          </div>
        </div>
        
        <div className="row">
          <div className="col">
            <hr />
            <footer>
              <p>&copy; Mattias Henriksson 2018</p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
