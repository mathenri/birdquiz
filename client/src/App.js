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
      highscore: [
        {
          name: 'Mattias',
          score: 23,
          time: 200,
          date: new Date()
        }
      ],
    };

    this.setScore = this.setScore.bind(this);
    this.formatTime = this.formatTime.bind(this);
  }

  setScore(score) {
    let newHighScore = this.state.highscore;
    newHighScore.push(score);
    this.setState({
      highscore: newHighScore
    });
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

        <Header />
        <Main highscore={this.state.highscore}
              setScore={this.setScore}
              formatTime={this.formatTime} />
        
        <Footer />
      </div>
    );
  }
}

export default App;
