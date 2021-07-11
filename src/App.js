import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movie from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movie={ movie } />

    </div>
  );
}

export default App;
