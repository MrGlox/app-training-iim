import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './components/List.jsx';
import Clock from './containers/Clock.jsx';
import Form from './containers/Form.jsx';
import data from './data.json';

class App extends Component {
  filterData() {
    data.filter(); // si ma chaine de caractère est include dans le nom d'un appartement je garde l'appart sinon je le drop
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Clock />
          <Form />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <List list={data} />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React with yourself
          </a>
        </header>
      </div>
    );
  }
}

export default App;
