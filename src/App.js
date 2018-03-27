import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import Square from './Square';

class App extends Component {

  renderSquare(i) {
    return (
      <Square
        value={i}
      />
    );
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src="orc.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcme to React</h1>
        </header>

        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default App;
