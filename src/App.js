import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const sha = process.env.REACT_APP_GIT_SHA;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          BRUUUUUUUUUUheeeeeeeeeeeeeeeee
        </p>
              <p>{sha}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
