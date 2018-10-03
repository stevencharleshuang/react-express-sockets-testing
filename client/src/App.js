import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from './api/socketService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }
  }
  componentWillMount() {
    // Test Fetch
    const url = 'http://localhost:5000/api';
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(response => {
        console.log('Success:', (response));
        this.setState({ data: response.message })
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div className="App">
          <h1>Sockets Testing React Express and More!</h1>
          <p>Node Server Fetch Testing. Message = {this.state.data}</p>
      </div>
    );
  }
}

export default App;
