// Projeto desenvolvido com ajuda do Raphael Oliveira,
// Denilson Santuchi e Luis Filipe / turma 16 - A
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}

export default App;
