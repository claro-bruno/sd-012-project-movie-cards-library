import React from 'react';
import './App.css';
import Movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList Movies={Movies} />
    </div>
  );
}

export default App;
