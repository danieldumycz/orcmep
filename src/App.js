import React, { Component } from 'react';

import './App.css';

import MapComponent from './MapComponent.js'

class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src="orc.png" className="App-logo" alt="logo" />
          <h1 className="App-title">orcMep</h1>
        </header>
		<MapComponent />
      </div>
    );
  }
}

export default App;
