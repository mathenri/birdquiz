import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      highscore: [{name: 'Mattias', score: 23}],
    };

    this.setScore = this.setScore.bind(this);
  }

  setScore(score) {
    let newHighScore = this.state.highscore;
    newHighScore.push(score);
    this.setState({
      highscore: newHighScore
    });
  }

  render() {
    return (
      <div className="container">

        <Header />
        <Main highscore={this.state.highscore}
              setScore={this.setScore} />
        
        <Footer />
      </div>
    );
  }
}

export default App;
