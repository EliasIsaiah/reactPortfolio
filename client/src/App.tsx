import React from 'react';
import axios from 'axios';
import About from './About';
import Header from './Header';
import Repos from './Repos';
import 'typeface-roboto';
import './App.css';
import { Container } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <div className="App">
      <Container>
        <header className="App-header">
          <Header />

          <About value={"Elias is a full-stack web developer"} />
          <Repos />

        </header>
      </Container>
    </div>
  );
}

export default App;
