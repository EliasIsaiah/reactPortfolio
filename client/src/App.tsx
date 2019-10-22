import React from 'react';
import logo from './logo.svg';
import about from './About';
import Button from '@material-ui/core/Button';
import 'typeface-roboto';
import './App.css';
import { Container } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <div className="App-header">
      <Container>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>

        </header>
      </Container>
    </div>
  );
}

export default App;
