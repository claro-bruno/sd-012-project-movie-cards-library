import React from 'react';
import './App.css';
import Header from './Header';
import MovieList from './MovieList';
import MovieCard from './MovieCard';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
      <MovieCard />
    </div>
  );
}

export default App;
