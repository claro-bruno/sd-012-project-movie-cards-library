import React from 'react';
import './App.css';
import Header from './components/Header';
import MoviesList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MoviesList movies="a" />
    </div>
  );
}

export default App;
