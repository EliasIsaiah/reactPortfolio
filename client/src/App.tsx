import React from 'react';
import logo from './logo.svg';
import About from './About';
import 'typeface-roboto';
import './App.css';
import { Container } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <div className="App-header">
      <Container>
        <header className="App-header">

        <About/>

        </header>
      </Container>
    </div>
  );
}

export default App;
