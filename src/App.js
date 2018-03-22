import React, { Component } from 'react';
import logo from './logo.svg';
import Content from './Content.js';
import listContent from './listContent.js';
import List from './List.js';

import './App.css';

class App extends Component {
    constructor(props) {
      super(props)
      this.state = { s_users: []}
    
    }
   componentWillMount() {
    fetch('https://api.github.com/users')
      .then((response) => {
        return response.json()
      })
      .then((users) => {
        console.log(users)
        this.setState({ s_users: users })
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <List listado={this.state.s_users}/>
      </div>
    );
  }
}

export default App;
