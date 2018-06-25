import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim'
import 'bootstrap/dist/js/bootstrap.js';
import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

library.add(faStar)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
