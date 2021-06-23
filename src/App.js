import React, { Component } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
        <Header />
        <MovieList />
      </div>
    );
  }
}

export default App;
