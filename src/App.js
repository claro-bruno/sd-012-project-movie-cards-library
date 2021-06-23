import React from 'react';
import './App.css';
import movies from '../src/data'
import Header from '../src/components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList  movies={movies}/>
    </div>
  );
}

export default App;
