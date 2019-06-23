import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';

const baseAPI = 'http://localhost:3000/'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="app-content">
        <Header />
      </div>
    )
  }
}

export default App;
