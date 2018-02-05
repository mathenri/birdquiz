import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.css';
import Header from "./Header";
import Main from "./Main";

class App extends Component {
  constructor() {
    super();

    this.state = {
      highscore: [{name: 'Mattias', score: 23}],
    };
  }

  render() {
    return (
      <div className="container">

        <Header />
        <Main highscore={this.state.highscore} />
        
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
