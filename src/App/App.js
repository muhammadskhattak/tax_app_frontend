import React, { Component } from 'react';
import '../Stylesheets/App.css';
import Home from '../Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;